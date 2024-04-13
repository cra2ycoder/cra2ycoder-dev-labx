import { NextResponse } from 'next/server'
import tasks from './data'

interface ITaskItem {
  id?: string | number
  task: string
  dueDate: string | number
}

export async function GET(request: Request) {
  return NextResponse.json(tasks)
}

export async function POST(request: Request) {
  const data: ITaskItem | ITaskItem[] = await request.json()

  const setDynamicId = async function () {
    await tasks.map((x: ITaskItem, id: number) => {
      x.id = id
      return x
    })
  }
  if (Array.isArray(data)) {
    tasks.push(...data)
  } else {
    tasks.push(data)
  }

  setDynamicId()

  return NextResponse.json(tasks)
}
