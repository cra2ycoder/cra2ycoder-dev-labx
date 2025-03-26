import * as express from 'express'
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
import {
  signUpInHandler,
  signInHandler,
  profileHandler,
  authMiddleware,
  logoutHandler,
} from '../handlers/authHandler'

require('dotenv').config()

const apiServer = express()
const API_PORT = 4000

// allowing json middleware
apiServer.use(bodyParser.json())
apiServer.use(cookieParser())

// session based enablement
apiServer.use(
  session({
    secret: process.env.AUTH_SESSION_KEY,
    resave: false,
    saveUninitialized: true,

    // @todo required to be set `true` when in production with HTTPS
    cookie: { secure: false },
  })
)

apiServer.post('/signup', signUpInHandler)
apiServer.post('/signin', signInHandler)
apiServer.get('/profile', authMiddleware, profileHandler)
apiServer.post('/logout', logoutHandler)

// global error handler
apiServer.use((error, req, res, next) => {
  console.error(error.stack)
  res.status(500).send('something went wrong!')
})

apiServer.listen(4001, () => {
  console.log(`API Server is listening to ${API_PORT} >>>>`)
})
