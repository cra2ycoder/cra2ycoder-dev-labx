class Mammal:
    def walk(self):
        print('walk')

# inheriting Mammal
class Dog(Mammal):
   # simply telling this is nothing just a empty class so pass it
   pass

class Cat(Mammal):
    def be_annoying(self):
        print('meowwww')
    pass

dog = Dog()
dog.walk()

cat = Cat()
cat.walk()
cat.be_annoying()