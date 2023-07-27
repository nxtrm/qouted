import re
import json

def parse_quotes(input_text):
    # Define the regular expression pattern to split quotes
    separator = r"\n==========\n"
    
    # Split the input text into individual quotes using re.split()
    quotes = re.split(separator, input_text)
    
    # Initialize an empty list to store the extracted data
    quotes_data = []
    
    for quote in quotes:
        if not quote.strip():
            continue
        
        # Extract the relevant information from each quote
        data = {}
        lines = quote.strip().split("\n")
        
        data['BookName'] = lines[0].strip()
        #Extract author
        data['Author'] = lines[0][(lines[0].find("(") + 1):(lines[0].find(")"))]
        data['DateAdded'] = lines[1][(lines[1].find("| Added on") +11) :]
        data['Quote'] = ''
    

        # Remove extra spaces from the quote
        data['Quote'] = data['Quote'].strip()

        quotes_data.append(data)
    
    return quotes_data

input_file = 'clippings.txt'

with open(input_file, 'r' , encoding='utf-8') as file:
    input_text = file.read()

 
quotes_data = parse_quotes(input_text)

# Save the data into a JSON file
with open('quotes.json', 'w') as json_file:
    json.dump(quotes_data, json_file)

print("Quotes extracted and saved to 'quotes.json'")
