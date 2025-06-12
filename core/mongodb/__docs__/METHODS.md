## Create

- db.<collection_name>.insertOne({ %JSON_DATA% }, options)
- db.<collection_name>.insertMany([{ %JSON_DATAT% }], options)

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



