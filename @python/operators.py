
## logical operators

has_high_income = True
has_good_credit = True
has_criminal_record = False

# and operator (logical and) => &&
if has_high_income and has_good_credit:
    print("Eligible for loan")

# or operator (logical or) => ||
if has_high_income or has_good_credit:
    print("Eligible for loan")

# and not (logical not) => && !
if has_high_income and not has_criminal_record:
     print("Eligible for loan")


## comparison operators
temperature = 35

# greater than
# >, <, ==, !=, <=, >=
if temperature > 30:
    print("It's a hot day!")
else:
    print("Its not a hot day!")