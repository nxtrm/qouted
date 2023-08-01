import pymongo
from pymongo import MongoClient
import json

from quote_extraction import is_substring, parse_data 

client=pymongo.MongoClient("mongodb://localhost:27017/")
mydb=client["quotes"]

quotes=mydb.quotes_data
books=mydb.book_data

input_file = './Data/clippings.txt'
with open(input_file, 'r' , encoding='utf-8') as file:
    input_text = file.read()

#2. Extract quotes
quotes_data, book_data = parse_data(input_text)

#3. Filter quotes to find substrings
filtered_quotes = []
for quote in quotes_data:
    if not is_substring(quote, quotes_data):
        filtered_quotes.append(quote)

quotes.insert_many(filtered_quotes)
books.insert_many(book_data)

print("Quotes extracted and saved")