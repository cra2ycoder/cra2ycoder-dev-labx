# Various ways to connect to MongoDB

- using `MongoClient` from `mongodb` npm package by writting javascripts

```js
/**
 * @api 
 * https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
 */
import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = "mongodb+srv://<USER_NAME>:<PASSWORD>@<CLUSTER_DOMAIN>/?retryWrites=true&w=majority"

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

    // employees.insertOne(dataObj)
   
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } catch (e) {
    console.log(e)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}

run().catch(console.dir)

```
---

- using `mongoose` npm package by writting javascripts

---

- using `Atlas Compass`

  - prerequisties:
    - mongodb pacakge installed globally, to test that `mongodb --version`
    - Atlas Compass Tool installation
  
  - once everything is ready:
    - run the following command at CLI
  
    ```s
    # this will execute the mongodb and running in the local port, which is `mongodb://127.0.0.1:27017`
    mongod
    ```
  - if the above command not working and you are facing the following issue then `mkdir: /data: Read-only file system` try the following
  
    ```s
    # create db location for mongodb to handle the data
    sudo mkdir -p <YOUR_PREFERRED_LOCATION>

    # now it will start the mongodb server in localhost  
    sudo mongod --dppath=<YOUR_PREFERRED_LOCATION>
    ```

  - Now, open the `Atlas Compass` tool
  - Click on the `new connection +` button
  - Enter URI as `mongodb://127.0.0.1:27017/` and click on the `connect`  button
  - Now, this will be connected to local mongodb and you will be able to see list of db collections

---

- using `MongoDB VS Code Extension`

  - prerequisties:
    - mongodb extension

  - click on the mongodb icon on the left side menu list
  - click on the `+` on the connections list
  - enter the uri on the prompt panel, as `mongodb://127.0.0.1:27017/`
  - Now, this will be connected to local mongodb and you will be able to see list of db collections

---

- using `Azure Databases` VS Code Extension 

---