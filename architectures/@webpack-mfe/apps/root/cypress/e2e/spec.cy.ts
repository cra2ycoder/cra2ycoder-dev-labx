describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('.css-5icxm2 > div').contains('Home Page from MFE')

    cy.wait(2000)
    cy.visit('http://localhost:3000/plp')

    cy.wait(4000)
    cy.get('.MuiInputBase-input').as('SearchInputBox').type(`men's clothing`)
  })
})
