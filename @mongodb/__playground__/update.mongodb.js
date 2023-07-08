use('budget')

/**
 * what are we basically try to add/modify/remove?
 * Is Nothing But "data"
 *
 * SINGLE:
 * - string => ""
 * - number => 0-9
 * - boolean => true/false
 * - date => { year: new Date() }
 *
 * GROUP:
 * - array => [], [[]...], [{}, {}...]
 * - object => { x, y...}, {a: [], b: '' ...}
 */

/**
 * inserting the prop(s) on the created doc
 *
 * what mongodb says:
 * db.collectionName.updateOne(filter, update, options)
 *
 * what I am saying:
 * db.<collection_name>.updateOne(
 *    filter => whomINeedToFind? (or) helpMeToFindThatBeggar?,
 *    update => whatShouldISet? (or) whatYouAreExpectingToAdd?,
 *    options => whatCanIdoForYou? (or) anyAdditionalHelpRequired?
 * )
 */

// !!! prob 1: adding simple data
// db.year_2023.updateOne(
//   {
//     month: 'jul',
//   },
//   {
//     $set: {
//       budgetType: 'house',
//       accountBalance: 5000,
//       haveLoans: true,
//       salaryCreditDate: new Date(),
//       account: {},
//       loans: [],
//     },
//   }
// )

// !!! prob 2: updating the existing value
// db.year_2023.updateOne(
//   {
//     month: 'jul',
//   },
//   {
//     $set: {
//       budgetType: 'company',
//     },
//   }
// )

// !!! prob 3: add a property into the existing object
// db.year_2023.updateOne(
//   {
//     month: 'jul',
//   },
//   {
//     $set: {
//       account: {
//         bank: 'hdfc',
//         balance: 10,
//       },
//     },
//   }
// )

// !!! prop 4: add a single item in the existing array
// db.year_2023.updateOne(
//   {
//     month: 'jul',
//   },
//   {
//     $push: {
//       // loans: 100000,
//       // loans: {
//       //   loanType: 'personal',
//       //   credit: 100000,
//       // },
//     },
//   }
// )

// !!! prob 5: add a multiple item in the existing array
// db.year_2023.updateOne(
//   {
//     month: 'jul',
//   },
//   {
//     $push: {
//       loans: {
//         $each: [
//           {
//             loanType: 'personal',
//             credit: 100000,
//           },
//           {
//             loanType: 'housing',
//             credit: 5000000,
//           },
//         ],
//       },
//     },
//   }
// )

// !!! prob 6: if there is no document for update
// db.year_2023.updateOne(
//   {
//     month: 'aug',
//   },
//   {
//     $set: {
//       budgetType: 'company',
//     },
//   },
//   {
//     upsert: true,
//   }
// )

// !!! prob 7: avoiding duplicate on array insert
// db.year_2023.updateOne(
//   { month: 'jul' },
//   {
//     $addToSet: {
//       loans: {
//         loanType: 'housing',
//         credit: 5000000,
//       },
//     },
//   }
// )

// !!! prob 8: expecting an item to be inserted at specific place
// !!! note: $position is only for $push not for $addToSet
// db.year_2023.updateOne(
//   {
//     month: 'jul',
//   },
//   {
//     $push: {
//       loans: {
//         $each: [{ loanType: 'gold', value: 100000 }],
//         $position: 0,
//       },
//     },
//   }
// )

// !!! prob 9: sorting & updating an array
// db.year_2023.updateOne(
//   {
//     month: 'jul',
//   },
//   {
//     $push: {
//       loans: {
//         $each: [],
//         $sort: {
//           credit: -1,
//         },
//       },
//     },
//   }
// )

// !!! prob 10: adding a property of to all items in an array
// db.year_2023.updateOne(
//   {
//     month: 'jul',
//   },
//   {
//     $set: {
//       // !!! beware - which will replace existing
//       // 'loans.$[]': {
//       //   status: 'open',
//       // },
//       // !!! good to go
//       'loans.$[].status': 'open',
//     },
//   }
// )

// !!! prob 11: replacing an item value in the specified index of an array
// db.year_2023.updateOne(
//   { month: 'jul' },
//   {
//     $set: {
//       //   'loans.$[element].loanType': 'gold',
//       'loans.$[element]': {
//         loanType: 'gold',
//         credit: 50000,
//         status: 'closed',
//       },
//     },
//   },
//   {
//     arrayFilters: [
//       {
//         // !!! condition
//         'element.loanType': 'personal',
//       },
//     ],
//     upsert: true,
//   }
// )

// !!! prob 12: renaming the property
// db.year_2023.updateOne(
//   { month: 'jul' },
//   {
//     $rename: {
//       accountBalance: 'total',
//       // !!! watch the prop on both side
//       'account.bank': 'account.bankName',
//     },
//   }
// )
