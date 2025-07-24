## Create

- db.<collection_name>.insertOne({ %JSON_DATA% }, options)
- db.<collection_name>.insertMany([{ %JSON_DATAT% }], options)
- db.<collection_name>.insertOne({ %JSON_DATA% }, { ordered: true/false })

- db.<collection_name>.insertOne({ %JSON_DATA% }, { writeConcern: { w: 1, j: true, wtimeout:200 } })
  - w: write
  - j: journal
  - wtimeout: timeout

<!-- not recommended -->
- db.<collection_name>.insert({ %JSON_DATA% }, options)
- db.<collection_name>.insert([{ %JSON_DATA% }], options)

```js
db.companies.insertOne({ _id: "google", name: 'Google', stock: 2000 })
db.companies.insertMany([{ _id: "infosys", name: 'Infosys', stock: 1500 }, { name: 'Apple', stock: 2100 }])

db.companies.insertOne({ _id: "google", name: 'Google', stock: 2000 }, { ordered: false })
db.companies.insertOne({ name: 'Wipro', stock: 1200 }, { writeConcern: { w:1, j: true, wtimeout: 200 }})
db.companies.insertOne({ name: 'Cisco', stock: 1800 }, { writeConcern: { w:1, j: false, } })
```

## Read

- db.<collection_name>.find()
- db.<collection_name>.find().pretty()
- db.<collection_name>.find(filter, options)
- db.<collection_name>.findOne(filter, options)

- cursor functions:
  - db.<collection_name>.find().toArray()
  - db.<collection_name>.find().forEach((data) => { printjson(data) })


- boolean flag based searching - like ensuring the prop is exist
- db.<collection_name>.find({ propertyName: true })

## Update

- db.<collection_name>.update(filter, data, options)
- db.<collection_name>.updateOne(filter, data, options)
- db.<collection_name>.updateMany(filter, data, options)
- db.<collection_name>.replaceOne(filter, data, options)

## Delete

- db.<collection_name>.deleteOne(filter, options)
- db.<collection_name>.deleteMany(filter, options)

## Import

- importing local json files into mongo db

```s
monogimport <%file_name.json%> -d <%db_name%> -c <%coll_name> --jsonArray --drop
```


## Useful Links

- [insertOne()](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne)
- [insertMany()](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany)
- [Atomicity](https://docs.mongodb.com/manual/core/write-operations-atomicity/#atomicity)
- [Write Concern](https://docs.mongodb.com/manual/reference/write-concern/)
- [Using mongoimport](https://docs.mongodb.com/manual/reference/program/mongoimport/index.html)


## Update

>> update only one value (primitive)
db.<collection_name>.updateOne({ name: "test" }, { $set: { age: 10 } })

>> update array value (overwritten)
db.<collection_name>.updateOne({ name: "test" }, { $set: { hobbies: ["cooking", "sports", "musics"]} })

>> update many 
db.<collection_name>.updateMany({ isSporty: true }, { $set: { isSporty: false} })

>> increment value (age = age + 1)
db.<collection_name>.udpateOne({ name: "test" }, { $inc: { age: 1 }})

>> increment value (age = age - 1)
db.<collection_name>.udpateOne({ name: "test" }, { $inc: { age: -1 }})

>> error will be received (cant update same property with different operation)
db.<collection_name>.updateMany({ isSporty: true}, { $set: { age: 32}, $inc: { age: 1 }})