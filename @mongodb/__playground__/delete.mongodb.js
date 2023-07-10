use('budget')

//!!!prob 1: remove a property from an object
// db.year_2023.updateOne(
//   {
//     month: 'jan',
//   },
//   {
//     $unset: {
//       targetAchieved: '',
//     },
//   }
// )

//!!!prob 2: remove an array
// db.year_2023.updateOne(
//   {
//     month: 'jan',
//   },
//   {
//     $unset: {
//       bankNames: [],
//     },
//   }
// )

//!!!prob 3: remove an item from an array either from first/last
// db.year_2023.updateOne(
//   {
//     month: 'feb',
//   },
//   {
//     $pop: {
//       //   bankNames: 1, // last
//       //   bankNames: -1, // front
//     },
//   }
// )

//!!! prob 4: remove an item by referring value
// db.year_2023.updateOne(
//   {
//     month: 'mar',
//   },
//   {
//     $pull: {
//       //   bankNames: 'axis', // single
//       //   bankNames: {
//       //     $in: ['sbi'], // multiple
//       //   },
//     },
//   }
// )

//!!! prob 5: remove list of items without query
// db.year_2023.updateOne(
//   {
//     month: 'apr',
//   },
//   {
//     $pullAll: {
//       bankNames: ['axis', 'sbi'],
//     },
//   }
// )

//!!! prob 6: remove a collection
// db.year_2023.drop()

//!!! prob 7: remove a database
// db.dropDatabase('budget')
