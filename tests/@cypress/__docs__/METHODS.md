## Methods

- `visit()`
- `get()`
- `click()`
- `type()`
- `as()`
- `each()`
- `contains()`
- `reload()`
- `should()`
  - should('have.value')
  - should('have.text')
  - should('be.checked)
  - should('not.be.checked')
  - should('be.visible')
  - should('not.be.visible')
- `check() check([value1, value2])`
- `uncheck()`
- `and()`
- `select()`
- `find()`
- `eq`
- `click()` | `click({force: true})`
- `origin()`
- `on()`
- `invoke()`
- `prop()`
- `url()`
- `wrap()`
- `filter()`
- `fixture()`
- `before()`
- `wrap()`
- `pause()`
- `log()`

```javascript
// alert window
cy.on('window:alert', str => {
  expect(str).to.equal('string to be placed')
})

// confirm window
cy.on('window:confirm', str => {
  expect(str).to.equal('string to be placed')
})
```

```js
// removing the particular attr from a dom element
cy.get('selector').invoke('removeAttr', 'target').click()

// when we have to load different site url then `cy.origin()`
cy.origin('https://www.abc.com', () => {
  cy.get("selector a[href*='about']").click()
})
```

```js
// CORS based solution (cross domain)
cy.get('a.selector').then(function (el) {
  const href = el.prop('href')
  cy.visit(href)

  cy.origin(href, () => {
    cy.get('a.selector').click()
  })
})
```

## to support iframe

```s
npm install -D cypress-iframe
```

```js
import 'cypress-iframe'

cy.frameLoaded('selector')

// clicking a link inside the iframe
cy.iframe().finc('a.selector').click()
```

## Important Notes

- Cypress not support for child window (navigating page) and new window (new 3rd party page)
- Cross domain will not support by cypress
- Intellisense support

```js
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
```

```js
describe('Calendar test', () => {
  it('Verify date selection', () => {
    const monthNumber = '6'
    const date = '15'
    const year = '2027'
    const expectedList = [monthNumber, date, year]

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    cy.wait(5000)
    cy.get('.react-date-picker__inputGroup').click()

    cy.get('.react-calendar__navigation__label').click()
    cy.get('.react-calendar__navigation__label').click()
    cy.contains('button', year).click()
    cy.get('.react-calendar__year-view__months__month')
      .eq(Number(monthNumber) - 1)
      .click()
    cy.contains('abbr', date).click()

    //Assertion
    cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {
      cy.wrap($el).invoke('val').should('eq', expectedList[index])
    })
  })
})
```

```js
// before() used to do something before test starting
before(function () {
  cy.fixture('filename').then((data)=> {

    // assigning the data to global access
    this.data = data
  })
})
```

```js
Cypress.config('defaultCommandTimout', 10000); // default value is 4000
```