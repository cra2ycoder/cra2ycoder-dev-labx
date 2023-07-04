from pathlib import Path

path = Path()
# print(path.exists())

# path.mkdir()
# print(path.glob('*.py'))

for file in path.glob('*.py'):
    print(file)
