// Select the database to use.
use('infosys')

// Insert a few documents into the sales collection.
db.getCollection('employees').insertMany([
  {
    name: 'a',
  },
  {
    name: 'b',
  },
])

db.employees.find()

db.employees.drop()
