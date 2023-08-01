import re
import json

#remove any unicode chars
def remove_unicode(text):
    return text.encode('ascii', 'ignore').decode('ascii')

# remove any substrings
def filter_quotes(quote, other_quotes):
    for other_quote in other_quotes:
        if quote != other_quote and quote['Quote'] in other_quote['Quote']:
            return True
        elif len(quote["Quote"]) == 0:
            return True
    return False

def check_book(book_data, lastBookName, lines, bookID):
    book = {}
    #Write the book data into a separate file
    bookName = remove_unicode(lines[0].strip()[0:lines[0].strip().find("(")-1])
    if bookName != lastBookName :

            bookID = bookID+1
                
            book["Name"] = bookName
            book["Author"] = lines[0][(lines[0].find("(") + 1):(lines[0].find(")"))]
            book_data.append(book)

    return bookID, bookName, book_data

#extract quotes
def parse_data(input_text):

    quotes_data = []
    separator = r"\n==========\n"
    quotes = re.split(separator, input_text)
    quoteID = 0

    book_data = []

    #get first book name
    lastBookName=""
    bookID = -1

    for quote in quotes:
        if not quote.strip():
            continue
        
        data = {}
        lines = quote.strip().split("\n")
        
        bookID, lastBookName, book_data = check_book(book_data, lastBookName, lines, bookID)
        
        #Extracting/ generating metadata
        # data["Id"] = quoteID
        data["bookId"] = bookID
        data['DateAdded'] = lines[1][(lines[1].find("| Added on") +11) :]
        
        
        #Extracting the quote
        text = quote[quote.find("\n\n")::]
        data['Quote'] = remove_unicode(text)
        data['Quote'] = data['Quote'].strip()

        quotes_data.append(data)

        quoteID = quoteID+1
    
    return quotes_data, book_data

