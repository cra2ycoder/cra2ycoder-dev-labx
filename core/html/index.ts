import * as express from 'express'
import * as fs from 'fs'

const server = express()

server.use(express.static('./advanced'))
server.use(express.static('./forms'))
server.use(express.static('./hyperlinks'))
server.use(express.static('./images'))
server.use(express.static('./tables'))
server.use(express.static('./web-components'))

server.get('*', (req, res) => {
  const listOfExamples = fs.readdirSync('./advanced')
  const listOfForms = fs.readdirSync('./forms')
  const listOfHyperlinks = fs.readdirSync('./hyperlinks')
  const listOfImages = fs.readdirSync('./images')
  const listOfTables = fs.readdirSync('./tables')
  const listOfWebComponents = fs.readdirSync('./web-components')

  const getHTMLLinks = (fileOrFolderName: string[]) => {
    return fileOrFolderName
      .map(x => `<li><a href="http://localhost:3000/${x}">${x}</a></li>`)
      .join('\n')
  }

  const htmlString = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>HTML Examples</title>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-width=1.0" />
        </head>
        <body>
            <h1>HTML Examples</h1>
            <p>Interesting Things:</p>
            <ul>
            ${getHTMLLinks(listOfExamples)}
            </ul>
            <p>Forms</p>
            <ul>
            ${getHTMLLinks(listOfForms)}
            </ul>
            <p>Hyper Links</p>
            <ul>
            ${getHTMLLinks(listOfHyperlinks)}
            </ul>
            <p>Images</p>
            <ul>
            ${getHTMLLinks(listOfImages)}
            </ul>
            <p>Tables</p>
            <ul>
            ${getHTMLLinks(listOfTables)}
            </ul>
            <p>Web Components</p>
            <ul>
            ${getHTMLLinks(listOfWebComponents)}
            </ul>
        </body>
    </html>
  `

  console.log(htmlString)
  res.status(200).send(htmlString)
})

server.listen(3000, () => {
  console.log(`server is listening >>> http://localhost:3000`)
})
