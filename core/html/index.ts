import * as express from 'express'

const server = express()
const PORT = 3000

server.use(express.json())

server.use(express.static('./exercises'))
server.post('/api/comments', async (req, res) => {
  res.status(200).send({
    data: req.body,
  })
})

server.get('/*', (req, res) => {
  res.send('hello, world')
})

server.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})
