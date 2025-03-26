
# two dimensional list
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# write
matrix[0][1] = 20

# read
print(matrix[0][1])

# printing all the values
for row in matrix:
    for item in row:
        print(item)
