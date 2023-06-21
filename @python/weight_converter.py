weight = int(input('Weight: '))
unit = input('(L)bs or (K)g: ')

if unit.upper() == 'L':
    converted = weight * 0.45
    print(f"You are {converted} kilos")
else:
    # single / -> float point
    # double // -> integer
    converted = weight // 0.45
    print(f"You are {converted} pounds")