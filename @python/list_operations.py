numbers = [5, 2, 1, 7, 4]

# adding the value at specified index
numbers.insert(0, 200)

# adding the value at the last index
numbers.append(100)

# clear all the values and make it empty
# numbers.clear()

# index of the specified item
print(numbers.index(7))

# this will throw an error where the value doesn't exit
# numbers.index(-1)

# asc sorting
numbers.sort()

# reverse order
numbers.reverse()

# value exist or not in list
print(50 in numbers)

# copy of the list without affecting the original list
numbers2 = numbers.copy()

print(numbers)