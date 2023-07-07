use('budget')

// db.year_2023.insertOne({
//   month: 'july',
//   accounts: {
//     wallet: [],
//     banks: [
//       {
//         name: 'Axis Bank',
//         currency: 'INR',
//         accountType: 'savings',
//         currentBalance: 1021221,
//         previousBalance: {
//           total: 12000,
//           on: '28/09/2022',
//         },
//         transactions: [
//           {
//             from: 'infosys',
//             as: 'salary',
//             currency: 'INR',
//             type: 'credit',
//             totalAmount: 197614,
//             date: '30/08/2022',
//           },
//           {
//             from: 'infosys',
//             as: 'bonus',
//             currency: 'INR',
//             type: 'credit',
//             totalAmount: 89120,
//             date: '01/09/2022',
//           },
//           {
//             from: 'infosys',
//             as: 'arrears',
//             currency: 'INR',
//             type: 'credit',
//             totalAmount: 50000,
//             date: '02/09/2022',
//           },
//         ],
//       },
//     ],
//     upi: [
//       {
//         name: 'PayTM',
//         currency: 'INR',
//         currentBalance: 120,
//         previousBalance: {
//           balance: 120,
//           date: '28/09/2022',
//         },
//         transactions: [],
//       },
//     ],
//     mutualFunds: [
//       {
//         name: 'ABSL',
//         currency: 'INR',
//         accountType: 'mutual fund',
//         currentBalance: 355000,
//         previousBalance: {
//           total: 352000,
//           on: '28/09/2022',
//         },
//         investedOn: '',
//         brokerage: {
//           name: 'Mohan Kumar',
//         },
//         sip: {
//           amount: 2000,
//           frequency: 'monthly',
//           status: 'active',
//           debitOn: '10th of every month',
//         },
//         transactions: [
//           {
//             for: 'personal',
//             as: 'redemption',
//             currency: 'INR',
//             type: 'debit',
//             totalAmount: 100000,
//             date: '30/08/2022',
//           },
//         ],
//       },
//     ],
//     stocks: [],
//     crypto: [],
//   },
// })

const getCurrentMonth = () => {
  const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ]
  return months[new Date().getMonth()]
}

// console.log({ res })

/**
 * step 1:
 * creating the empty document
 * for budget - database
 */
// db.year_2023.insertOne({
//   month: 'jul',
// })

/**
 * what are our data basically?
 *
 * data types / objects
 *
 * - string => ""
 * - number => 0-9
 * - boolean => true/false
 * - date => { year: new Date() }
 *
 * - array => [], [[]...], [{}, {}...]
 * - object => { x, y...}, {a: [], b: '' ...}
 */

/**
 * step 2:
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

// prob 1: adding simple data
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

// prob 2: updating the existing value
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

// prob 3: add a property into the existing object
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

// prop 4: add a single item in the existing array
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

// prob 5: add a multiple item in the existing array
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

// prob 6: if there is no document for update
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

// prob 7: avoiding duplicate on array insert
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

// prob 8: expecting an item to be inserted at specific place
// note: $position is only for $push not for $addToSet
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

// prob 9: sorting & updating an array
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

// prob 10: adding a property of to all items in an array
