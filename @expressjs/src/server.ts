import express from 'express'
// const express = require('express')

const server = express()

const PORT = process.env.NODE_PORT || 3000

server.listen(PORT, () => {
  console.log(`server is listening ${PORT}`)
})

// export { server }
