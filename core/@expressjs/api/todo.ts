import * as express from 'express'

const server = express()
const API_PORT = 4000

// enabling the json parsing
server.use(express.json())

const taskList = []

/**
 * CRUD
 */
// read
server.get('/todo', (req, res) => {
  res.status(200).send({
    message: taskList.length === 0 ? 'no tasks found.' : '',
    list: taskList,
  })
})

// create
server.post('/todo', (req, res) => {
  const userInput = req.body

  if (!userInput.task) {
    res
      .status(400)
      .send({
        message: 'Error: task property is must.',
      })
      .end()
  }

  const isAlreadyFound = taskList.find(x => x.task === userInput.task)

  if (isAlreadyFound) {
    res
      .status(400)
      .send({
        message: `Error: ${userInput.task} is already found. Please try with new task.`,
      })
      .end()
  }

  userInput.id = taskList.length
  taskList.push(userInput)
  res.status(201).send(userInput)
})

// delete
server.delete('/todo/:id', (req, res) => {
  const taskId = req.params.id
  const taskIndexAtList = taskList.findIndex(x => x.id.toString() === taskId)

  if (taskIndexAtList === -1) {
    res
      .status(400)
      .send({
        message: `Requested task ${taskId} is not found in the list`,
      })
      .end()
  }

  taskList.splice(taskIndexAtList, 1)

  res.status(200).send({
    message: `${taskId} task deleted successfully!`,
  })
})

// update (entire object update)
server.put('/todo/:id', (req, res) => {
  const taskId = req.params.id
  const taskIndexAtList = taskList.findIndex(x => x.id.toString() === taskId)

  if (taskIndexAtList === -1) {
    res
      .status(400)
      .send({
        message: `request ${taskId} is not exist in the list for update.`,
      })
      .end()
  }

  const userInput = req.body

  if (!userInput.task) {
    res
      .status(400)
      .send({
        message: 'Error: task property is must.',
      })
      .end()
  }

  const isAlreadyFound = taskList.find(x => x.task === userInput.task)

  if (isAlreadyFound) {
    res
      .status(400)
      .send({
        message: `Duplicate entry: ${userInput.task} is already found.`,
      })
      .end()
  }
})

// update (only specific property in the object)
server.patch('/todo/:id', (req, res) => {})

server.listen(API_PORT, () => {
  console.info(`API server is running at http://localhost:${API_PORT}`)
})
