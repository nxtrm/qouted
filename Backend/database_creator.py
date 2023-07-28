import re
import json

#remove any unicode chars
def remove_unicode(text):
    return text.encode('ascii', 'ignore').decode('ascii')

def parse_quotes(input_text):

    book_data = []
    
    lastBookName = ""
    bookID = 0


    separator = r"\n==========\n"
    quotes_data = []
    quotes = re.split(separator, input_text)
    quoteID = 0


    for quote in quotes:
        if not quote.strip():
            continue

        book = {}
        data = {}

        lines = quote.strip().split("\n")
        
        #Write the book data into a separate file
        bookName = remove_unicode(lines[0].strip()[0:lines[0].strip().find("(")-1])
        if bookName != lastBookName:
            book["id"] = bookID
            book["Name"] = bookName
            book["Author"] = lines[0][(lines[0].find("(") + 1):(lines[0].find(")"))]
            book_data.append(book)

            bookID = bookID+1
            lastBookName = bookName


        #Extracting/ generating metadata
        data["id"] = quoteID
        data['DateAdded'] = lines[1][(lines[1].find("| Added on") +11) :]

        #Extracting the quote
        text = quote[quote.find("\n\n")::]
        data['Quote'] = remove_unicode(text)
        data['Quote'] = data['Quote'].strip()

        quotes_data.append(data)

        quoteID = quoteID+1
    
    return quotes_data, book_data

# remove any substrings
def is_substring(quote, other_quotes):
    for other_quote in other_quotes:
        if quote != other_quote and quote['Quote'] in other_quote['Quote']:
            return True
    return False

#1. Open the filq with quotes
input_file = 'clippings.txt'
with open(input_file, 'r' , encoding='utf-8') as file:
    input_text = file.read()

#2. Extract quotes
quotes_data, book_data = parse_quotes(input_text)

#3. Filter quotes to find substrings
filtered_quotes = []
for quote in quotes_data:
    if not is_substring(quote, quotes_data):
        filtered_quotes.append(quote)


#4. Save the data into a JSON file
with open('books.json', 'w') as json_file:
    json.dump( book_data, json_file)

with open('quotes.json', 'w') as json_file:
    json.dump(quotes_data, json_file)

print("Quotes extracted and saved to 'quotes.json'")
