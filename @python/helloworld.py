
# simple consoles
print('hello, I am Python!')

# results: ***********
print('*' * 10)


## variables
# name = input('What is your name? ')
# favorite_color = input('What is your favorite color? ')
# print(name + ' likes ' + favorite_color)

## type conversion

# int()
# float()
# bool()

# birth_year = input('Birth year: ')

# type checking with type()
# print(type(birth_year))

# age = 2023 - int(birth_year)
# print(type(age))
# print(age)

# weight_lbs = input('weight (lbs): ')
# weight_kg = int(weight_lbs) * 0.45
# print(weight_kg)


## using double quotes
course = "python's for beginners"
course_with_inside_dbl_quotes = 'phython for "Beginners"'

paragraph = '''
by using this syntax we will be able to 
write paragraph.
'''
print(course)

# with strings 
title = 'Python for Beginners'
# in left to right (forward)
print(title[1])

# right to left (reverse)
print(title[-1])

# full string [:] => Python for Beginners
# from 0 index to 4th idx [0:4] => Pyth
# from 0 to 3 index values [:3] => Pyt
# from 2 to end index values [2:] => thon for Beginners
# [1:-1] from 1st index to last before index -1 will exclude the last character
print(title[2:])
print(title[1:-1])

# string concat
first_name ='John'
last_name = 'Smith'

# normal way
message = first_name + ' [' + last_name + '] is a coder' 
msg = f'{first_name} [{last_name}] is a coder!!!'

print(message)
print(msg)

## string methods
description = "python is so easy to learn"
print(len(description))

# this will not change the original text
print(description.upper())
print(description.lower())
print(description)
print(description.find('p'))
print(description.replace('so easy', 'very easy'))
print(description.title()) # Python Is So Easy To Learn

# ensure the char is available
print('easy' in description)