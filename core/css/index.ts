import * as express from 'express'
import * as fs from 'fs'

const server = express()

server.use(express.static('./examples'))
server.use(express.static('./grids'))

server.get('*', (req, res) => {
  const listOfExamples = fs.readdirSync('./examples')
  const listOfGrids = fs.readdirSync('./grids')

  const getHTMLLinks = (fileOrFolderName: string[]) => {
    return fileOrFolderName
      .map(x => `<li><a href="http://localhost:3000/${x}">${x}</a></li>`)
      .join('\n')
  }

  const htmlString = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>List of CSS Examples</title>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-width=1.0" />
        </head>
        <body>
            <h1>List of CSS Examples</h1>
            <p>Interesting Things:</p>
            <ul>
            ${getHTMLLinks(listOfExamples)}
            </ul>
            <p>CSS Grids:</p>
            ${getHTMLLinks(listOfGrids)}
        </body>
    </html>
  `
  res.status(200).send(htmlString)
})
server.listen(3000, () => {
  console.log(`server is listening >>> http://localhost:3000`)
})
