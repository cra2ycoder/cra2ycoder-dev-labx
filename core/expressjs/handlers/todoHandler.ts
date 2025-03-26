export const taskList = []

export async function readAllTask(req, res) {
  res.status(200).json({
    message: taskList.length === 0 ? 'no tasks found.' : '',
    list: taskList,
  })
}

export async function createTask(req, res) {
  const userInput = req.body

  if (!userInput.task) {
    res.status(400).json({
      message: 'Error: task property is must.',
    })
  }

  const isAlreadyFound = taskList.find(x => x.task === userInput.task)

  if (isAlreadyFound) {
    res.status(400).json({
      message: `Error: "${userInput.task}" is already found. Please try with new task.`,
    })
  }

  userInput.id = taskList.length
  taskList.push(userInput)
  res.status(201).json(userInput)
}

export async function deleteTask(req, res) {
  const taskId = req.params.id
  const taskIndexAtList = taskList.findIndex(x => x.id?.toString() === taskId)

  if (taskIndexAtList === -1) {
    res.status(400).json({
      message: `Requested task "${taskId}" is not found in the list`,
    })
  }

  taskList.splice(taskIndexAtList, 1)

  res.status(200).json({
    message: `${taskId} task deleted successfully!`,
  })
}

export async function updateTask(req, res) {
  const taskId = req.params.id
  const taskIndexAtList = taskList.findIndex(x => x.id.toString() === taskId)

  if (taskIndexAtList === -1) {
    res.status(400).json({
      message: `requested task id: "${taskId}" is not exist in the list for an update.`,
    })
  }

  const userInput = req.body

  if (!userInput.task) {
    res.status(400).json({
      message: 'Error: task property is must.',
    })
  }

  const isAlreadyFound = taskList.find(x => x.task === userInput.task)

  if (isAlreadyFound) {
    res.status(400).json({
      message: `Duplicate entry: "${userInput.task}" is already found.`,
    })
  }

  taskList[taskIndexAtList] = userInput
  res.status(200).json({
    message: `${taskId} successfully updated.`,
  })
}

export async function updateTaskItem(req, res) {
  const taskId = req.params.id
  const taskIndexAtList = taskList.findIndex(x => x.id.toString() === taskId)

  if (taskIndexAtList === -1) {
    res.status(400).json({
      message: `requested task id: "${taskId}" is not exist in the list for an update.`,
    })
  }

  const userInput = req.body
  const isAlreadyFound = taskList.find(x => x.task === userInput.task)

  if (isAlreadyFound) {
    res.status(400).json({
      message: `Duplicate entry: "${userInput.task}" is already found.`,
    })
  }

  taskList[taskIndexAtList] = {
    ...taskList[taskIndexAtList],
    ...userInput,
  }

  res.status(200).json({
    message: `${taskId} successfully updated.`,
  })
}
