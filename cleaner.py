input_file = 'clippings.txt'  # Replace with the path to your input file
output_file = 'quotes.txt'  # Replace with the path to your output file

with open(input_file, 'r', encoding='utf-8') as file:
    lines = file.readlines()

quotes = []
for line in lines:
    if line.startswith('- Your Highlight'):
        quote = lines[lines.index(line) + 2].strip()
        quotes.append(quote)

with open(output_file, 'w', encoding='utf-8') as file:
    file.write('\n'.join(quotes))

#------------------------------------------------------

