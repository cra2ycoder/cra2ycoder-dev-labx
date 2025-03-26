# MongoDB Setup

- use the following cli command to install mongodb globally at mac machines

```sh
brew install mongodb
```

- ensure mongodb installed?
  
```sh
mongod --version
```

---

## Additional tools 

- **Atlas Compass GUI**

  - Its a installable software for all machines
  - connect/disconnect, CRUD operations can be done through User Interfaces (UI)
  - [Download](https://www.mongodb.com/products/compass)
  
- MongoDB Extension for VS Code Editor

  - Its a additonal extendsion for VS Code
  - Once its installed it will be added additional icon on the left side mega menu list
  - By clicking on that icon, we will be able to see MongoDB options/settings
  - connect/disconnect, CRUD operations can be done through extensions settings by writting javascripts and by clicking the play icon on the top of the vs code header bar
  - Playground will be created
  - [Download](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode)
  - Note: `You have to have proper cluster account` if not, [Create a Free Account](https://www.mongodb.com/atlas/database)


- Azure Databases Extension for VS Code Editor

  - Its a alternate option for MongoDB VS Code Extension
  - Once its installed it will be added additional icon on the left side mega menu list
  - By clicking on that icon, we will be able to see MongoDB options/settings
  - connect/disconnect, CRUD operations can be done through extensions settings by writting javascripts
  - simple `Execute` link will be created on top of every db related scripts that we write, by clicking on it, it will be executed and the result will be displayed in the next tab
  - [Download](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb)
  - Note: `You have to have proper Azure account` if not, [Create a Free Account](https://azure.microsoft.com/en-us/free/?utm_source=campaign&utm_campaign=vscode-azure-account&mktingSource=vscode-azure-account)


