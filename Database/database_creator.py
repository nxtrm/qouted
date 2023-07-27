import re
import json

#remove any unicode chars
def remove_unicode(text):
    return text.encode('ascii', 'ignore').decode('ascii')

def parse_quotes(input_text):

    counter = 0

    separator = r"\n==========\n"

    quotes = re.split(separator, input_text)

    quotes_data = []
    
    for quote in quotes:
        if not quote.strip():
            continue

        data = {}
        lines = quote.strip().split("\n")
        
        data["id"] = counter

        data['BookName'] = lines[0].strip()[1:lines[0].strip().find("(")-1]
        data['Author'] = lines[0][(lines[0].find("(") + 1):(lines[0].find(")"))]
        data['DateAdded'] = lines[1][(lines[1].find("| Added on") +11) :]

        text = quote[quote.find("\n\n"): quote.find("==========")]

        data['Quote'] = remove_unicode(text)
    

        # Remove extra spaces from the quote
        data['Quote'] = data['Quote'].strip()

        quotes_data.append(data)

        counter = counter+1
    
    return quotes_data

input_file = 'clippings.txt'

with open(input_file, 'r' , encoding='utf-8') as file:
    input_text = file.read()

 
quotes_data = parse_quotes(input_text)

# Save the data into a JSON file
with open('quotes.json', 'w') as json_file:
    json.dump(quotes_data, json_file)

print("Quotes extracted and saved to 'quotes.json'")
