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
  cy.fixture('filename').then(data => {
    // assigning the data to global access
    this.data = data
  })
})
```

```js
Cypress.config('defaultCommandTimout', 10000) // default value is 4000
```

```js
Cyprees.env('apiDomain')
```

```s
# running the test cases with the chrome browser through terminal commands
npm cypress run --spec cypress/integration/examples/filename.js --headed --browser chrome --env apiDomain="https://xyz.com"
```

```js
// cypress.config.ts
export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})

// cypress/support/e2e.ts
import 'cypress-mochawesome-reporter/register'
```

```js
{
  retries: {
    runMode: 1,
  }
}
```

```js
const { defineConfig } = require('cypress')
const browserify = require('@cypress/browserify-preprocessor')
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor')
const {
  preprendTransformerToOptions,
} = require('@badeball/cypress-cucumber-preprocessor/browserify')

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions))
  )

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {
    url: 'https://rahulshettyacademy.com',
  },
  reporter: 'cypress-mochawesome-reporter',

  retries: {
    runMode: 1,
  },
  projectId: 'nodpcq',

  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js',
  },
})
```

## jenkins installation

- reference: `https://www.jenkins.io/download/lts/macos/`

```sh
#install
brew install jenkins-lts

#start
brew services start jenkins-lts

#restart 
brew services restart jenkins-lts

#update
brew upgrade jenkins-lts
```

## install plugins at jenkins

```
Node.js
```