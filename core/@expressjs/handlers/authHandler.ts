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
  /**
   * @description
   * 1. user password must be hash (encrypted)
   * 2. then to be stored
   */
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

  /**
   * @description
   * 1. password to be compared via bcrypt.compare()
   */
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

  /**
   * @description
   * 1. user token will be generated with jwt only with username (not with password)
   * 2. must need expires time
   *
   */
  // jwt token generation
  const jwtToken = jwt.sign(
    { username: userInfo.username },
    process.env.AUTH_SECRET_KEY,
    { expiresIn: '1h' }
  )

  // storing the tokens at request headers
  req.session.token = jwtToken

  // setting the same token at browser cookie
  res.cookie('x-auth-key', jwtToken, { maxAge: 3600000, httpOnly: true })

  res.status(200).json({
    message: 'sign in successfully done!',
    token: jwtToken,
  })
}

export async function profileHandler(req, res) {
  res.status(200).json({
    user: req.user,
  })
}

export async function logoutHandler(req, res) {
  // clearing the token
  req.session.destroy()

  //clearing at browser as well
  res.clearCookie('x-auth-key')

  res.status(200).json({ message: 'user logout successfully!' })
}

/**
 * @description
 * auth middleware is more important to track the jwt token session
 * @param req
 * @param res
 * @param next
 * @returns
 */
export async function authMiddleware(req, res, next) {
  // @note reading the token from session or cookies
  const jwtTokenFromHeaders = req.session.token || req.cookies['x-auth-key']

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
