use('budget')

// db.year_2023.insertMany([
//   {
//     month: 'jan',
//     savings: 10000,
//     expenses: 60000,
//     bankNames: ['axis', 'hdfc', 'sbi'],
//   },
//   {
//     month: 'feb',
//     savings: 3000,
//     expenses: 64000,
//     bankNames: ['axis', 'hdfc', 'sbi', 'canara'],
//   },
//   {
//     month: 'mar',
//     savings: 300,
//     expenses: 78000,
//     bankNames: ['axis', 'hdfc', 'sbi', 'canara'],
//   },
//   {
//     month: 'apr',
//     savings: 2000,
//     expenses: 82000,
//     bankNames: ['axis', 'sbi', 'canara'],
//   },
//   {
//     month: 'may',
//     savings: 100,
//     expenses: 90000,
//     bankNames: ['axis', 'hdfc', 'sbi', 'canara'],
//   },
//   {
//     month: 'jun',
//     savings: 25000,
//     expenses: 45000,
//     bankNames: ['axis', 'hdfc', 'sbi', 'canara'],
//   },
// ])

//!!! prob 1: get a collection details from current database
// db.getCollectionInfos()

//!!! prob 2: get collection names
// db.getCollectionNames()

//!!! prob 3: get all data from a collection
// db.year_2023.find()
// db.year_2023.find({})

//!!! prob 4: get all data from a collection but with limited props
// db.year_2023.find({}, { _id: 0 })

//!!! prob 5: get a specific document from a collection
// db.year_2023.find({ month: 'jun' })

//!!! prob 6: get only specific node response
// db.year_2023.find({ month: 'jun' }, { bankNames: 1, _id: 0 })

//!!! prob 7: get a document(s) based on the regex matchings
// db.year_2023.find({ month: { $regex: /j/ } })

//!!! prob 8: get a document based on the equality - direct match
// db.year_2023.find({ month: { $eq: 'mar' } })

//!!! prob 9: get a document(s) by referring array exact match [] === []
// db.year_2023.find(
//   {
//     bankNames: {
//       $eq: ['axis', 'hdfc', 'sbi'],
//     },
//   },
//   {
//     _id: 0,
//   }
// )

//!!! prob 10: get a document(s) by referring array of element match inside array [n] === [n]
// db.year_2023.find(
//   {
//     bankNames: {
//       $elemMatch: {
//         $eq: 'canara',
//       },
//     },
//   },
//   {
//     _id: 0,
//   }
// )

//!!! prob 11: get a document(s) based on the value comparison
db.year_2023.find(
  {
    savings: {
      //   $gt: 10000, // greater than >
      //   $gte: 20000, // greater than or equal to >=
      //   $lt: 1000, // less than <
      //   $lte: 10000, // less than or equal to <=
      //   $ne: 500, // not equal to !=
    },
  },
  {
    _id: 0,
  }
)
