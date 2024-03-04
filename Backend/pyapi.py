from bson import ObjectId
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import bcrypt


import pymongo
  
# creating a Flask app
app = Flask(__name__)

#Cookies
app.config['JWT_SECRET_KEY'] = '!z#x#QZh8ZVACnDHK%U4'
app.config['JWT_TOKEN_LOCATION'] = ['cookies']
app.config['JWT_ACCESS_COOKIE_PATH'] = '/'
jwt = JWTManager(app)

CORS(app, supports_credentials=True)

client=pymongo.MongoClient("mongodb://localhost:27017/")
mydb=client["quotes"]

quotes=mydb.quotes_data
books=mydb.book_data
users = mydb.users

#Returns a random quote from the quotes table
@app.route('/getrandomquote', methods = ['GET'])
def GetRandomQuote():
    quote = list(quotes.aggregate([{ '$sample': { 'size': 1 } }]))[0]
    book = list(books.find({"id": quote["bookId"]}))[0]

    data = {
        "id": str(quote["_id"]),
        "Quote": quote["Quote"],
        "DateAdded": quote["DateAdded"],
        "BookName": book["Name"],
        "AuthorName": book["Author"],
        "Likes": quote["Likes"]
    }
    return data

#Fetches a quote with a known id
@app.route('/quote/<slug>', methods=['GET'])
def Quote(slug):
    try:
        quote_id=ObjectId(slug)
        quote = quotes.find_one({"_id": quote_id})

        if quote:
            book = list(books.find({"id": quote["bookId"]}))[0]
            data = {
                "id": str(quote["_id"]),
                "Quote": quote["Quote"],
                "DateAdded": quote["DateAdded"],
                "BookName": book["Name"],
                "AuthorName": book["Author"],
                "Likes": quote["Likes"]
            }
            return data
        else:
            return "Quote not found", 404
    except Exception as e:
            return jsonify({"error": str(e)}), 500

@app.route('/search/<qtype>/<query>', methods=['GET'])
def search_quotes(qtype, query):
    
    #currently only working correctly for types:quote
    try:
        query_params = {}
        if qtype == "book":
            query_params['BookName'] = query
        elif qtype == "quote":
            query_params['Quote'] = {"$regex": query, "$options": "i"}

        results = []
        if query_params:
            results = list(quotes.find(query_params))

        if results:
            formatted_results = []
            for quote in results:
                book = list(books.find({"id": quote["bookId"]}))[0]
                data = {
                    "id": str(quote["_id"]),
                    "Quote": quote["Quote"],
                    "DateAdded": quote["DateAdded"],
                    "BookName": book["Name"],
                    "AuthorName": book["Author"],
                    "Likes": quote["Likes"]
                }
                formatted_results.append(data)

            return jsonify(formatted_results), 200
        else:
            return "No resultsfound", 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500



@app.route('/delete/<slug>', methods = ['GET'])
def Delete(slug):
    try:
        quote_id=ObjectId(slug)
        result = quotes.delete_one({"_id": quote_id})

        if result.deleted_count > 0:
            return jsonify({"message": "Quote deleted successfully."}), 200
        else:
            return jsonify({"message": "Quote not found."}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

#Adds one like to the quote provided
@app.route("/like/<slug>", methods=["POST"])
def Like(slug):
    try:
        quote_id = ObjectId(slug)
        quote = quotes.find_one({"_id": quote_id})

        if quote:
            quote["Likes"] = quote.get("Likes", 0) + 1
            quotes.update_one({"_id": quote_id}, {"$set": quote})
            return "Quote Liked Successfully"
        else:
            return "Quote not found", 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

#Removes a like from a quote provided
@app.route("/dislike/<slug>", methods=["POST"])   
def Disike(slug):
    try:
        quote_id = ObjectId(slug)
        quote = quotes.find_one({"_id": quote_id})

        if quote:
            quote["Likes"] = quote.get("Likes", 0) - 1
            quotes.update_one({"_id": quote_id}, {"$set": quote})
            return "Like removed"
        else:
            return "Quote not found", 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route("/login", methods=["POST"])
def Login():
    try:
        data = request.json
        username = data.get("username")
        password = data.get("password")
        
        # Form validation
        if not username or not password:
            return jsonify({"error": "All fields are required"}), 400
        
        existing_user = users.find_one({"username": username})
        if not existing_user:
            return jsonify({"error": "This user does not exist"}), 400
        
        if existing_user and bcrypt.checkpw(password.encode('utf-8'), existing_user['password'].encode('utf-8')):
            access_token = create_access_token(identity=username)
            response = jsonify({"access_token": access_token})

            return response, 200
        else:
            return jsonify({"error": "Invalid credentials"}), 401
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/register", methods=["POST"])
def Register():
    try:
        data = request.json
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")

        # Form validation
        if not username or not email or not password:
            return jsonify({"error": "All fields are required"}), 400

        if len(password) < 8:
            return jsonify({"error": "Password must be at least 8 characters long"}), 400

        # Check if username or email already exists in the database
        existing_user = users.find_one({"$or": [{"username": username}, {"email": email}]})
        if existing_user:
            return jsonify({"error": "Username or email already exists"}), 400

        # Hash the password using bcrypt
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        hashed_password_str = hashed_password.decode('utf-8')

        new_user = {
            "username": username,
            "email": email,
            "password": hashed_password_str,
        }

        users.insert_one(new_user)
        return jsonify({"message": "User registered successfully"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)

  