from flask import Flask
from flask_cors import CORS

import pymongo
  
# creating a Flask app
app = Flask(__name__)
CORS(app)

client=pymongo.MongoClient("mongodb://localhost:27017/")
mydb=client["quotes"]

quotes=mydb.quotes_data
books=mydb.book_data

@app.route('/getrandomquote', methods = ['GET'])
def GetRandomQuote():
    quote = list(quotes.aggregate([{ '$sample': { 'size': 1 } }]))[0]
    book = list(books.find({"id": quote["bookId"]}))[0]

    data = {}
    data["id"] = str(quote["_id"])
    data["Quote"] = quote["Quote"]
    data['DateAdded'] = quote["DateAdded"]
    data["BookName"] = book["Name"]
    data["AuthorName"] = book["Author"]
    data["Likes"] = quote["Likes"]
    return data
  

if __name__ == '__main__':
  
    app.run(host="0.0.0.0", port=5000)

  