import * as express from 'express'

const server = express()

server.use(express.static('./exercises'))
server.get('/*', (req, res) => {
  res.send('hello, world')
})

server.listen(3000, () => {
  console.log('server listening >>>>')
})
