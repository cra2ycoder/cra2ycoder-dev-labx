# simple list
names = ['disney', 'marvel', 'dc', 'pixar']

# reading

# first index => disney
print(names[0])

# last index => pixar
print(names[-1])

# from 2nd index to last index => dc, pixar
print(names[2:])

# from 2nd index to 3rd index => dc
print(names[2:3])

# ^ note all the above statements will not impact the original values


# writing
names[0] = 'star wars'