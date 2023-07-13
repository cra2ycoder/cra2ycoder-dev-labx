import { compile, compileString } from 'sass'

function createStyleTag(cssString: string) {
  const styleTag = document.createElement('style')
  styleTag.textContent = cssString

  document.getElementsByTagName('head')[0].appendChild(styleTag)
}

/**
 * @experiment 1
 * - loading from external file and getting as style string
 * - creating a style tag at run time
 * - and appending to head tag
 */
const nestingStyles =
  compile('./stylesheets/nesting.scss', {
    style: 'compressed',
  }) || ''

createStyleTag(nestingStyles.css)

/**
 * @experiment 2
 * - css as terminal strings
 * - creating a style tag at run time
 * - and appending to head tag
 */
const cssString = `
h1 {
  font-size: 40px;
  code {
    font-face: Roboto Mono;
  }
}`

const inputStyles = compileString(cssString, { style: 'compressed' })

createStyleTag(inputStyles.css)
