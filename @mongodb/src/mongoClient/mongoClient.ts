import * as dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb'

dotenv.config()

const uri = process.env.MONGODB_URI

console.log({ uri })

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect()

    // Send a ping to confirm a successful connection
    const db = await client.db('infosys')
    const employees = await db.collection('employees')

    // employees.insertOne({ name: 'mohan', empId: 1096449 })
    employees.insertMany([
      { name: 'michael', empId: 1096450 },
      { name: 'jo', empId: 1096550 },
    ])

    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } catch (e) {
    console.log(e)
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close()
  }
}

run().catch(console.dir)
