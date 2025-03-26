def lbs_to_kg(weight):
    return weight * 0.45

def kg_to_lbs(weight):
    return weight / 0.45

def find_max(numbers):
    # manual way
    # numbers.sort()
    # numbers.reverse()
    # return numbers[0]

    # with inbuilt function
    return max(numbers)