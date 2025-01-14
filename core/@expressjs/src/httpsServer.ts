/**
 * @readme
 * https://devopscube.com/create-self-signed-certificates-openssl/
 */
import * as express from 'express'
import * as https from 'https'
import * as fs from 'fs'
import * as path from 'path'

const app = express()

const PORT = process.env.NODE_HTTPS_PORT || 443

const key = fs.readFileSync(path.resolve(__dirname, '../ssl/server.key'))
const cert = fs.readFileSync(path.resolve(__dirname, '../ssl/server.crt'))

const server = https.createServer(
  {
    key,
    cert,
  },
  app
)

server.listen(PORT, () => {
  console.log('server is listening to https://localhost:443')
})
