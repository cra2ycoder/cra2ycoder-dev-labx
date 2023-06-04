/**
 * @description
 * simple http server creation with express.js
 */

/**
 * @note
 * import { express }
 * import express
 * ^ these will not work after transpiling
 * error received: var server = (0, express_1["default"])();
 */
import * as express from 'express'

const server = express()

const PORT = process.env.NODE_HTTP_PORT || 3000

server.listen(PORT, () => {
  console.log(`server is listening ${PORT}`)
})
