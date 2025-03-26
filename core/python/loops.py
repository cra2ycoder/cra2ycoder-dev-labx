# simple for in loop
for i in 'python':
    print(i)

# simple loop with list(array)
for i in ['John', 'Michael', 'Sarah', 'Smith']:
    print(i)

# simple loop with numbers
# prints => 0, 1, 2, 3, 4, 5... 9
# range(10) => 1, 2, 3,...10
# range(5, 10) => 5, 6, 7, 8, 9
# range(5, 10, 2) => 5, 7, 9
for i in range(5, 10):
    print(i)

# nested loops
for x in range(4):
    for y in range(3):
        print(f"({x}, {y})")


# simple game
numbers = [5, 2, 5, 2, 2]

# printing F
for x in numbers:
    print('x' * x)

print('===============')

# printing F with detail
for x in numbers:
    pattern = ''
    for y in range(x):
        pattern += 'x'
    print(pattern)
