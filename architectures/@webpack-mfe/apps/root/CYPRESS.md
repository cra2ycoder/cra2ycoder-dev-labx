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

```js
// removing the particular attr from a dom element
cy.get("selector").invoke('removeAttr','target').click();
 
 // when we have to load different site url then `cy.origin()`
cy.origin("https://www.abc.com",() =>
{
    cy.get("selector a[href*='about']").click();
})
```