import * as express from 'express'

const server = express()
const PORT = 3000

server.use(express.static('./exercises'))
server.get('/*', (req, res) => {
  res.send('hello, world')
})

server.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})
