# Queries

There are 4 main distinct levels:

1. CRUD Operations
   - Create: Used to create a document(s) one or many
   - Read: Used to read a document(s) one or many
   - Update: Used to update a document(s) one or many
   - Delete: Used to delete a document(s) one or many
2. Aggregations: Group of CRUD Operations at one time in a sequential/or step by step/or one after another ways
3. Bulk Writing: Same as Aggregations along with Bulk operations - meaning for multiple documents one time
4. Indexing: Its perf technique to execute queries in a efficient ways

---

## Prerequisties

- here, `db` is an javascript open instance/object, we will get this after successful installation of mongodb
- here, `collection` word is nothing but our data root directory name in the mongodb. Example:

    ```js
    // assume below is the structure of mongodb internally
        + admin
        + employees
            - Documents/Data/JSON
        + products
        + catalog
    ```
    ^ in above, admin, employees, products, catalog are nothing but collections
    and Douments inside the employees is nothing but json data where all the data will be handled here when we running the mongodb queries

- here, `query` word is one complete statement where we using for CRUD operation via `db` object

    ```js
    //syntax
    db.<COLLECTION_NAME>.<OPERATION_FUNC>(<QUERIES_AS_OBJECT_FORMAT>)

    //example
    db.employees.insertOne({...})
    ```

- here, `field` word is nothing but a `propertyName` of a object

---

## CRUD: Create

- insertOne(data): insert only one
- insertMany(data[]): insert many 
- insert(data | data[]): shorthand method for insertOne() & insertMany()

Note: Here, data/document is nothing but just a JSON/JS Object

```js
{
    "employeeName": 'Joe',
    "employeeId": 131213,
    ...
    ...
}
```

- examples:

```js
// used to insert a documents/data in the specified db collection
db.<COLLECTION_NAME>.insertOne({...})

// used to insert multiple documents/data in the specified db collection
db.<COLLECTION_NAME>.insertMany([{...}, {...}, {...}, ...}])


// shorthand method for insertOne & insertMany
// behave like insertOne()
db.<COLLECTION_NAME>.insert({...})

// behave like insertMany()
db.<COLLECTION_NAME>.insert([{...}, {...}, {...}, ...}])
```
---

## CRUD: Read

- findOne(condition, projection): find only one
- find(condition, projection): find multiple based on the condition
- find({}, projection): find all when there is no condition

Notes:
- find function does `===` comparison to find/filter the values
- `condition` is a mandatory param to be passed, when there is no condition required simply pass as `{}` which means to be applied for all documents in a collection
      
```js
    // syntax
    {
        "<doc_property_name>": "<doc_property_value>"
    }
    // example
    {
        "employeeName": "Joe"
    }
```
- `projection` param is an optional one, we can use this when we wanted only specific properties from the document. Example, if the data has 100 properties and you wanted only 2 of them then, we need to take that 2 properties and pass them into the projection by passing the value as 1 or 0. `1: true/show, 0: false/hide`

```js
// asking to get only the employeeName and employeeId, and hiding the age and role from the response
{
    "employeeName": 1,
    "employeeId": 1,
    "age": 0,
    "role": 0
}
```

- examples:

```js
// used to find only one document from the specified db collection
db.<COLLECTION_NAME>.findOne(condition, projection<optional>)

// find only specified document/data which matches the employeeId of 12121
db.employees.findOne({ employeeId: 12121 })

// find only specified document/data which matches the employeeId of 12121 but only with employeeName in the response not other properties
// _id, is unique which generated and added by the mongodb
db.employees.findOne({ employeeId: 12121 }, { employeeName: 1, _id: 0})

// find all documents
db.<COLLECTION_NAME>.find({})

// find all the documents and response only with employeeName
db.<COLLECTION_NAME>.find({}, { employeeName: 1, _id: 0})
```