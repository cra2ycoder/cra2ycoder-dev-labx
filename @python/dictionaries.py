# dictionaries are key value pairs
customer = {
    "name": "John Smith",
    "age": 30,
    "is_verified": True,
}

print(customer)
print(customer["name"])
# print(customer['birth_year'])

print(customer.get('name'))

# when the value doesn't exist default value will be returned
print(customer.get('birth_year', 'Jan 1 1980'))

# updating the value
customer["name"] = 'Micheal'

print(customer)


phone_number = input('Phone number: ')

numbers_as_string = {
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "0": "Zero",
}

output = ""
for number in phone_number:
    output += numbers_as_string[number] + ' '

print(output)