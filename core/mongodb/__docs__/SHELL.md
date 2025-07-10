```s
# used to print help commands
mongod --help
```

```s
# used to set custom db path and log path
sudo mongod --dbpath /Users/mohaa/mongodb/data/db --logpath /Users/mohaa/mongodb/data/log/log.log
```

```s
# this will start mongod as a child process and parent will be exiting
# meaning, mongod server still running in background
sudo mongod --fork --logpath /Users/mohaa/mongodb/data/log/log.log
```

```s
# list of dbs
show dbs
```

```s
# switch to main db
use admin

# shutdown the server (background services)
db.shutdownServer()
```

- we can create our own custom mongodb config file for default setups in our local machine
- filename `mongod.cfg`
- [config](https://www.mongodb.com/docs/manual/reference/configuration-options/)
  
```yml
storage:
    dbpath: "/Users/mohaa/mongodb/data/db"
systemLog:
    destination: file
    path: "/Users/mohaa/mongodb/data/log/log.log"
    logAppend: true
net:
    bindIp: 127.0.0.1
    port: 27017
```

```s
# start mongodb server using custom config file
sudo mongod --config /Users/mohaa/mongodb/mongod.cfg
```

## Helpful Articles/ Docs

- [Config Files](https://docs.mongodb.com/manual/reference/configuration-options/)
- [the Shell (mongo) Options](https://www.mongodb.com/docs/manual/reference/method/)
- [the Server (mongod) Options](https://docs.mongodb.com/manual/reference/program/mongod/)


## MongoDB Compass

- [MongoDB Compass](https://docs.mongodb.com/compass/master/install/)
- [Only available in the Enterprise Edition => Exploring Schemas in Compass](https://docs.mongodb.com/compass/master/schema/)