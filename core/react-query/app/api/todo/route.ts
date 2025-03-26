import { NextResponse } from 'next/server'

const todoList: any = []

export async function GET(request: Request, response: Response) {
  return NextResponse.json(todoList)
}

export async function POST(request: Request, response: Response) {
  try {
    const userNewData = await request.json()
    todoList.push(userNewData)
  } catch (err) {
    console.log(err)
  }

  return NextResponse.json(todoList)
}
