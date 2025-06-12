# MongoDB

- What is MongoDB?

  - Document Database 
  - data is stored as BSON format (BSON is nothing but Binary Version for JSON)
  - NoSQL/NotSQL => NotOnlySQL 
  - MangoDB can use SQL (Structured Query Language)
  - Non-Relational: 
    - We can store Relational data

  - Data stored in a Table (like row and column, eg: spreadsheet)
    - Row called `RECORD`
    - Column called `RECORD FIELD`
  
  - Data accessed together, gets stored together
  - input as JSON => Store as BSON
  - Flexible Data
  - Scale: Horizontal & Vertical

---

## Installation

- MongoDB Installation:
  https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/

- MongoDB Shell Installation
  https://www.mongodb.com/try/download/shell

  - download the zip file based on your OS (ex: `mongosh-2.5.2-darwin-arm64.zip`)
  - extract and move it to your preferred location
  - open the terminal
    - run: `cd ./your/preferred/location/to/mongosh/zip/file`
    - run: `cd ./bin`
    - run: `./mongosh`
  - or, add into env to access from anywhere
    - run: `cd ./your/preferred/location/to/mongosh/zip/file/bin`
    - run: `sudo cp ./mongosh /usr/local/bin/`
    - run: `mongosh`
  - connecting to db:
    - login to official MongoDB website with your credentials (ex: Google Account)
    - Goto your `Data Services`
    - Click on the `Connect` button
    - Choose `Shell`
    - Choose `I have the MongoDB Shell installed`
    - Copy the command string
    - Open your terminal and paste it
    - It will prompt for password which should be mongodb database password
  

- MongoDB for VSCode
  https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode

- MongoDB Compass GUI
  https://www.mongodb.com/try/download/compass

---

## Video Reference

https://youtu.be/2QQGWYe7IDU?list=RDCMUC29ju8bIPH5as8OGnQzwJyA

---

## Best NPM Packages

```sh
mongodb, moongoose
```

---


