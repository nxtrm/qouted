import pymongo
from pymongo import MongoClient
import json

client=pymongo.MongoClient("mongodb://localhost:27017/")
mydb=client["quotes"]

quotes=mydb.quotes_data

with open('./Data/quotes.json', 'r') as file:
    quotes_raw=json.load(file)
    quotes.insert_many(quotes_raw)

books=mydb.book_data

with open('./Data/books.json', 'r') as file:
    books_raw=json.load(file)
    books.insert_many(books_raw)