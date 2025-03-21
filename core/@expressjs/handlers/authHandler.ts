const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

export const users = []

export async function signUpInHandler(req, res) {
  const userCredentials = req.body

  if (!userCredentials.password) {
    res.status(400).json({
      message: 'Error: password should not be empty!',
    })
    return
  }

  // password to be encrypted properly before storing it
  const hashedPassword = await bcrypt?.hash(userCredentials.password, 10)

  users.push({
    username: userCredentials.username,
    password: hashedPassword,
  })

  res.status(200).json({
    message: 'user registration successfully done!',
  })
}

export async function signInHandler(req, res) {
  const userCredentials = req.body
  const userInfo = users.find(x => x.username === userCredentials.username)

  if (!userInfo || !userCredentials.password) {
    res.status(400).json({
      message: 'Invalid Credentials',
    })
    return
  }

  const isPasswordMatching = await bcrypt.compare(
    userCredentials.password,
    userInfo.password
  )

  if (!isPasswordMatching) {
    res.status(401).json({
      message: 'Invalid Credentials',
    })
    return
  }

  // jwt token generation
  const jwtToken = jwt.sign(
    { username: userInfo.username },
    process.env.AUTH_SECRET_KEY,
    { expiresIn: '1h' }
  )

  res.status(200).json({
    message: 'sign in successfully done!',
    token: jwtToken,
  })
}

export async function getProfileHandler(req, res) {
  res.status(200).json({
    user: req.user,
  })
}

export async function authMiddleware(req, res, next) {
  const jwtTokenFromHeaders = req.headers['x-auth-key']

  if (!jwtTokenFromHeaders) {
    res.status(403).json({
      message: 'Access Denied!',
    })
    return
  }

  jwt.verify(jwtTokenFromHeaders, process.env.AUTH_SECRET_KEY, (err, user) => {
    if (err) {
      res.status(403).json({
        message: 'Invalid Token!',
      })
      return
    }
    req.user = user
    next()
  })
}
