# function
def greet_user():
    print('Hi there!')
    print('welcome aboard!')

print('start')
greet_user()
print('finish')

# function with params
def say_hello(name):
    print(f"Hi, {name}!")

say_hello('John')

# function with multiple params
def add(a, b, c):
    print(f'{a} {b} {c}')

add(1, 2, 3)

# keywords arguments
def get_user_names(first_name, last_name):
    print(f'{first_name} {last_name}')

# order of params doesn't matter here
get_user_names(last_name="jackson", first_name="micheal")

# should maintain the consistency otherwise python fails
# this fails
# get_user_names(last_name="test", "a")

# this works
# get_user_names("test", last_name="a")

# return
# by default all the functions returns `None`
def square(number):
    return number * number

value = square(3)
print(value)

# re-usable function
def multiply_value(number):
    print(number * number)

user_input = input('Enter a number: ')
multiply_value(int(user_input))
