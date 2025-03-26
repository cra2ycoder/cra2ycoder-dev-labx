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

/**
 * operators:
 * $regex
 * $eq
 * $exists
 * $gt, $gte, $lt, $lte, $ne
 * $in, $nin
 */

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

//!!! prob 8: get a document based on the equality - direct match (val === 'mar')
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

//!!! prob 11: get a document(s) based on the property exists
// db.year_2023.find(
//   {
//     targetAchieved: {
//       $exists: true,
//     },
//   },
//   {
//     _id: 0,
//   }
// )

//!!! prob 12: get a document(s) based on the value comparison
/**
 * value > 10000
 * value >= 10000
 * value < 10000
 * value <= 10000
 * value != 10000
 * value != 'apr'
 */
// db.year_2023.find(
//   {
//     // savings: {
//     //   //   $gt: 10000, // greater than >
//     //   //   $gte: 20000, // greater than or equal to >=
//     //   //   $lt: 1000, // less than <
//     //   //   $lte: 10000, // less than or equal to <=
//     //   //   $ne: 500, // not equal to !=
//     // },
//     // month: {
//     //   $ne: 'apr',
//     // },
//   },
//   {
//     _id: 0,
//   }
// )

//!!! prob 13: get a document(s) based on the value which is not in or in
/**
 * ['jan', 'jun', 'feb'].indexOf(value) >= 0
 * ['jan', 'jun', 'feb'].indexOf(value) === -1
 */
// db.year_2023.find({
//   month: {
//     // $nin: ['jan', 'jun', 'feb'],
//     // $in: ['jan', 'jun', 'feb'],
//   },
// })

//!!! prob 14: get a document(s) based on the value which is not in ot in => array
// db.year_2023.find({
//   bankNames: {
//     // $in: ['canara']
//     // $nin: ['canara'],
//   },
// })

//!!! prob 15: prop && prop == value
//!!! prob 16: prop && prop != value
// db.year_2023.find(
//   {
//     $and: [
//       {
//         targetAchieved: {
//           $exists: false,
//         },
//       },
//       {
//         targetAchieved: {
//           $ne: false,
//           // $eq: false,
//         },
//       },
//     ],
//   },
//   {
//     _id: 0,
//   }
// )

//!!! prob 17: prob.indexOf('canara') || prop > 10000
// db.year_2023.find(
//   {
//     $or: [
//       {
//         savings: {
//           $gt: 10000,
//         },
//       },
//       {
//         savings: {
//           $in: ['canara'],
//         },
//       },
//     ],
//   },
//   {
//     _id: false,
//   }
// )

//!!! prob 18: !(prop === 10000)
//!!! prob 19: !(prop !== 10000)
// db.year_2023.find({
//   savings: {
//     $not: {
//       // $eq: 10000,
//       // $ne: 10000
//     },
//   },
// })

//!!! prob 20: !(value.test(regex))
// db.year_2023.find(
//   {
//     month: {
//       $not: {
//         $regex: /j/,
//       },
//     },
//   },
//   {
//     _id: 0,
//   }
// )

//!!! prob 21: !(value === 10000) || !(value)
// db.year_2023.find({
//   $nor: [
//     {
//       month: {
//         $eq: 'feb',
//       },
//     },
//     {
//       targetAchieved: {
//         $eq: false,
//       },
//     },
//   ],
// })

//!!! prob 22: typeof value === 'string'
// http://www.mongodb.com/docs/manual/reference/operator/query/type/
// db.year_2023.find({
//   targetAchieved: {
//     // $type: 'string',
//     // $type: 'bool',
//   },
// })

//!!! prob 23: (value % 100) === 0
// $mod: [divisor, remainder]
// db.year_2023.find(
//   {
//     savings: {
//       $mod: [1000, 0],
//     },
//   },
//   {
//     _id: 0,
//   }
// )

//!!! prob 24: array.filter(x => [a, b, c...].includes(x))
//or x === 'axis' || x === 'canara' || x...
// db.year_2023.find(
//   {
//     bankNames: {
//       $all: ['axis', 'canara'],
//     },
//   },
//   {
//     _id: 0,
//   }
// )

// if its two dimensional array then
// $all: [
//   ['val1', 'val2']
// ]

//!!! prob 24: array.length === value
// db.year_2023.find(
//   {
//     bankNames: {
//       $size: 3,
//     },
//   },
//   {
//     _id: 0,
//   }
// )

//!!! prob 25: slicing array
// db.year_2023.find(
//   {},
//   {
//     bankNames: {
//       // $slice: 2,
//       // $slice: -2
//       // $slice: [1, 2],
//     },
//     _id: 0,
//   }
// )
