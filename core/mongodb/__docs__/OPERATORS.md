## Update

- `$set`
  - db.<col_name>.updateMany({}, { $set: { %JSON_DATA % } })

## Read

- `$gt`
  - db.<col_name>.find({ propertyName: { $gt: 100 } })

## projection

// finding all the data with retrieving only the necessary properties
// 0 - not required
// 1 - required

- db.<col_name>.find({}, { prop1: 1, prop2: 0, prop2: 1 }).pretty()

## array

```js
{
    prop1: 'test',
    hobbies: [
        "cooking",
        "sports"
    ]
}
```

// syntax
- db.<col_name>.findOne({ prop1: 'key' }).<array_name>

// example
- db.<col_name>.findOne({ prop1: 'test' }).hobbies

// filter only the cookings
- db.<col_name>.find({ hobbies: 'cooking' })

## deep search (nested)

- db.<col_name>.find({ "status.desc.state": "value" }).pretty()

---

## Query Selectors

- reference doc: `https://www.mongodb.com/docs/v7.0/reference/operator/query/`

- Comparsion
- Evaluation
- Logical
- Array
- Element
- Comments
- Geospatial

## Projection Operators

- $
- $elemMatch
- $meta
- $slice


## Examples

- Exact Match ( name === 'test' ) => returns only matching exact item(s)
db.<collection_name>.find({ name: "test" })
db.<collection_name>.findOne({ name: "test" })

- Exact match ( list === ['test'] ) => returns only matching exact item(s)
db.<collection_name>.findOne({ list: ["test"] })

db.<collection_name>.findOne({ value: { $gt: 100 } })
db.<collection_name>.findOne({ value: { $lt: 100 } })
db.<collection_name>.findOne({ value: { $gte: 100 } })
db.<collection_name>.findOne({ value: { $lte: 100 } })
db.<collection_name>.findOne({ value: { $eq: 100 } })

db.<collection_name>.findOne({ list: { $in: ["test"] } })
db.<collection_name>.findOne({ list: { $nin: ["test"] } })

- nested object
db.<collection_name>.findOne({ "obj1.obj2": { $gt: 300 } })
db.<collection_name>.findOne({ "obj1.obj2": { $gt: 300 } }).count()


## type

db.<collection_name>.findOne({ name: { $type: "string" } })
db.<collection_name>.findOne({ name: { $type: "int" } })
db.<collection_name>.findOne({ name: { $type: "double" } })
db.<collection_name>.findOne({ name: { $type: "decimal" } })
db.<collection_name>.findOne({ name: { $type: "date" } })
db.<collection_name>.findOne({ name: { $type: "object" } })

## regex

db.<collection_name>.findOne({ name: /test/ })

## logical

db.<collection_name>.findOne({ $and: [{ value: { $gt: 100 } }, { value: { $lt: 200 } }] })
db.<collection_name>.findOne({ $or: [{ value: { $gt: 100 } }, { value: { $lt: 200 } }] })
db.<collection_name>.findOne({ $nor: [{ value: { $gt: 100 } }, { value: { $lt: 200 } }] })
db.<collection_name>.findOne({ $not: { value: { $gt: 100 } } })

## expression

db.<collection_name>.findOne({ $expr: { $eq: ["$name", "test"] } })
db.<collection_name>.findOne({ $expr: { $eq: { if: { $gt: ["$value", 100] }, then: "test", else: "test2" } } }).count()