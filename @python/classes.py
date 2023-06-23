
# simple class
class Point:
    def move(self):
        print('move')

    def draw(self):
        print('draw')

p1 = Point()
p1.draw()

p2 = Point()
p2.x = 10
p2.y = 20
print(p2.x)


# constructors
# self => this
class Pointer:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def draw(self):
        print(self.x + self.y)


pointer = Pointer(10, 20)
pointer.draw()


# person
class Person:
    def __init__(self, name):
        self.name = name
    
    def talk(self):
        print(f"Hi, I am {self.name}!")

john = Person('john')
john.talk()

bob = Person('bob')
bob.talk()