export const taskList = []

export function readAllTask(req, res) {
  res.status(200).json({
    message: taskList.length === 0 ? 'no tasks found.' : '',
    list: taskList,
  })
}

export function createTask(req, res) {
  const userInput = req.body

  if (!userInput.task) {
    res
      .status(400)
      .json({
        message: 'Error: task property is must.',
      })
      .end()
  }

  const isAlreadyFound = taskList.find(x => x.task === userInput.task)

  if (isAlreadyFound) {
    res
      .status(400)
      .json({
        message: `Error: "${userInput.task}" is already found. Please try with new task.`,
      })
      .end()
  }

  userInput.id = taskList.length
  taskList.push(userInput)
  res.status(201).json(userInput)
}

export function deleteTask(req, res) {
  const taskId = req.params.id
  const taskIndexAtList = taskList.findIndex(x => x.id?.toString() === taskId)

  if (taskIndexAtList === -1) {
    res
      .status(400)
      .json({
        message: `Requested task "${taskId}" is not found in the list`,
      })
      .end()
  }

  taskList.splice(taskIndexAtList, 1)

  res.status(200).json({
    message: `${taskId} task deleted successfully!`,
  })
}

export function updateTask(req, res) {
  const taskId = req.params.id
  const taskIndexAtList = taskList.findIndex(x => x.id.toString() === taskId)

  if (taskIndexAtList === -1) {
    res
      .status(400)
      .json({
        message: `requested task id: "${taskId}" is not exist in the list for an update.`,
      })
      .end()
  }

  const userInput = req.body

  if (!userInput.task) {
    res
      .status(400)
      .json({
        message: 'Error: task property is must.',
      })
      .end()
  }

  const isAlreadyFound = taskList.find(x => x.task === userInput.task)

  if (isAlreadyFound) {
    res
      .status(400)
      .json({
        message: `Duplicate entry: "${userInput.task}" is already found.`,
      })
      .end()
  }

  taskList[taskIndexAtList] = userInput
  res.status(200).json({
    message: `${taskId} successfully updated.`,
  })
}

export function updateTaskItem(req, res) {
  const taskId = req.params.id
  const taskIndexAtList = taskList.findIndex(x => x.id.toString() === taskId)

  if (taskIndexAtList === -1) {
    res
      .status(400)
      .json({
        message: `requested task id: "${taskId}" is not exist in the list for an update.`,
      })
      .end()
  }

  const userInput = req.body
  const isAlreadyFound = taskList.find(x => x.task === userInput.task)

  if (isAlreadyFound) {
    res
      .status(400)
      .json({
        message: `Duplicate entry: "${userInput.task}" is already found.`,
      })
      .end()
  }

  taskList[taskIndexAtList] = {
    ...taskList[taskIndexAtList],
    ...userInput,
  }

  res.status(200).json({
    message: `${taskId} successfully updated.`,
  })
}
