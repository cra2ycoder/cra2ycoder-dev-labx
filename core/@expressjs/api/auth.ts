import * as express from 'express'
import {
  signUpInHandler,
  signInHandler,
  getProfileHandler,
  authMiddleware,
} from '../handlers/authHandler'

require('dotenv').config()

const apiServer = express()
const API_PORT = 4000

// allowing json middleware
apiServer.use(express.json())

apiServer.post('/signup', signUpInHandler)
apiServer.post('/signin', signInHandler)
apiServer.get('/profile', authMiddleware, getProfileHandler)

apiServer.listen(4001, () => {
  console.log(`API Server is listening to ${API_PORT} >>>>`)
})
