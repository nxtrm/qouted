input_file = 'quotes.txt'  # Replace with the path to your input file
output_file = 'unique_quotes.txt'  # Replace with the path to your output file

with open(input_file, 'r', encoding='utf-8') as file:
    quotes = file.read().splitlines()

unique_quotes = []
for quote in quotes:
    is_duplicate = False
    for unique_quote in unique_quotes:
        if quote in unique_quote:
            is_duplicate = True
            break
        elif unique_quote in quote:
            unique_quotes.remove(unique_quote)
            break
    if not is_duplicate:
        unique_quotes.append(quote+"\n")

with open(output_file, 'w', encoding='utf-8') as file:
    file.write('\n'.join(unique_quotes))
