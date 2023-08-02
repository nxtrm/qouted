import pymongo
from pymongo import MongoClient

from quote_extraction import filter_quotes, parse_data, clean_up

#initializing the database
client=pymongo.MongoClient("mongodb://localhost:27017/")
mydb=client["quotes"]

quotes=mydb.quotes_data
books=mydb.book_data

input_file = './Data/clippings.txt'
with open(input_file, 'r' , encoding='utf-8') as file:
    input_text = file.read()

#2. Extracting quotes
quotes_data, book_data = parse_data(input_text)

#3. Filtering quotes and cleaning them up
filtered_quotes = []
for quote in quotes_data:
    if not filter_quotes(quote, quotes_data):
        filtered_quotes.append(clean_up(quote))

quotes.insert_many(filtered_quotes)
books.insert_many(book_data)

print("Quotes extracted and saved")