## Cypress APIs

- `.visit()`
- `.get()`
- `.click()`
- `.type()`
- `.as()`
- `.each()`
- `.contains()`
- `.reload()`
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

```javascript
// alert window
cy.on('window:alert', (str) => {
    expect(str).to.equal('string to be placed')
})

// confirm window
cy.on('window:confirm', (str) => {
    expect(str).to.equal('string to be placed')
})
```