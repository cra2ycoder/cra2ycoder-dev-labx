import { NextResponse } from 'next/server'
import tasks from '../data'

export async function DELETE(request: Request, response: Response) {
  //   const data: ITaskItem | ITaskItem[] = await request.json()

  //   console.log(response.params)
  const { id } = response.params
  const newTasks = tasks.filter(task => task.id !== id)
  //   console.log(tasks, data)
  //   console.log({ newTasks })
  return NextResponse.json(newTasks)
}
