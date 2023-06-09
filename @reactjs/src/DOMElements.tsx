/**
 * @description
 * attributes
 */
export function Attributes() {
  return <div className="class-name" tabIndex={-1} />
}

/**
 * @description
 * style
 */
export function InlineStyle() {
  return (
    <div
      style={{
        color: 'red',
        textTransform: 'uppercase',
        textAlign: 'center',
        textDecoration: 'underline',
      }}
    >
      React: Inline Styles
    </div>
  )
}

/***
 * @description
 * dangerouslySetInnterHTML
 */
const htmlString = `
  <div>a tag from html string</div>
  <a href="#">link</a>
`

export function XSSSupport() {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />
}
