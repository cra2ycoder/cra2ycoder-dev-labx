import * as express from 'express'
import path from 'path'
import * as fs from 'fs'

const server = express()

server.use(express.static('./examples'))

server.get('*', (req, res) => {
  const listOfHTMLFiles = fs.readdirSync('./examples')

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
            <ul>
            ${listOfHTMLFiles
              .map(
                x => `<li><a href="http://localhost:3000/${x}">${x}</a></li>`
              )
              .join('\n')}
            </ul>
        </body>
    </html>
  `
  res.status(200).send(htmlString)
})
server.listen(3000, () => {
  console.log(`server is listening >>> http://localhost:3000`)
})
