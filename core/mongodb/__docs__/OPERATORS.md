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