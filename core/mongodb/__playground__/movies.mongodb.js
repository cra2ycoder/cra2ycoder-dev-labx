use('kitchen')

db.movies.find({}).pretty()

db.movies
  .find({ meta: { $gt: { rating: 9.5 }, $lt: { runtime: 100 } } })
  .pretty()

db.movies.find({ $or: [{ genre: 'drama' }, { genre: 'action' }] }).pretty()

db.movies.find({ $expr: { $gt: ['$visitors', '$expectedVisitors'] } }).pretty()

// db.movies.find({ genre: ['thriller', 'action'] }).pretty()

db.movies.find({ genre: { $size: 2 } }).pretty()

db.movies.find({ 'meta.aired': 2018 })

db.movies.find({ 'meta.rating': { $gt: 8, $lt: 10 } }).pretty()

//ascending sort
db.movies.find().sort({ 'meta.rating': 1 })

//descending sort
db.movies.find().sort({ 'meta.rating': -1 })

// multiple sort
db.movies.find().sort({ 'meta.rating': -1, 'meta.visitors': 1 })

// skip
db.movies.find().sort({ 'meta.rating': -1 }).skip(10).limit(100)

// shaping the results with projection
// 1 - required
// 0 - not required
db.movies.find({}, { 'meta.rating': 1, 'meta.visitors': 1, _id: 0 })

// using projection in arrays
db.movies
  .find({ genres: 'Drama' }, { genres: { $elemMatch: { $eq: 'horror' } } })
  .pretty()

// slice with array
db.movies.find({}, { genres: { $slice: 2 } }).pretty()

// skipping 1st element and taking 2 results except 1st element
db.movies.find({}, { genres: { $slice: [1, 2] } }).pretty()
