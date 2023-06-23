try:
    age = int(input('Age: '))
    print(age)
except ValueError:
    # only cares about input value
    print('invalid value!')

try:
    age = int(input('Age: '))
    income = 20000
    risk = income / age
    print(age)
except ZeroDivisionError:
    # cares about the math errors on division
    print('Age cannot be 0.')
except ValueError:
    print('invalid value!')