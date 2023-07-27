import json

def is_substring(quote, other_quotes):
    for other_quote in other_quotes:
        if quote != other_quote and quote['Quote'] in other_quote['Quote']:
            return True
    return False

# Load the data from the JSON file
with open('quotes.json', 'r') as json_file:
    quotes_data = json.load(json_file)

# Create a new list to store the filtered quotes
filtered_quotes = []

# Iterate through each quote and check if it is a substring of any other quote
for quote in quotes_data:
    if not is_substring(quote, quotes_data):
        filtered_quotes.append(quote)

# Save the filtered data into a new JSON file
with open('filtered_quotes.json', 'w') as filtered_json_file:
    json.dump(filtered_quotes, filtered_json_file)

print("Filtered quotes extracted and saved to 'filtered_quotes.json'")
