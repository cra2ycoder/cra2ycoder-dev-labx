import * as express from 'express'
import {
  taskList,
  readAllTask,
  createTask,
  deleteTask,
  updateTask,
  updateTaskItem,
} from '../handlers/todoHandler'

const server = express()
const API_PORT = 4000

// enabling the json parsing
server.use(express.json())

/**
 * CRUD
 */
// read
server.get('/todo', readAllTask)

// create
server.post('/todo', createTask)

// delete
server.delete('/todo/:id', deleteTask)

// update (entire object update)
server.put('/todo/:id', updateTask)

// update (only specific property in the object)
server.patch('/todo/:id', updateTaskItem)

// global error handler
server.use((error, req, res, next) => {
  console.error(error.stack)
  res.status(500).send('something went wrong!')
})

server.listen(API_PORT, () => {
  console.info(`API server is running at http://localhost:${API_PORT}`)
})
