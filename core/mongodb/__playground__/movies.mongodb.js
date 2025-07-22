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
