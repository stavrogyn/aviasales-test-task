/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  })

  it('displays two todo items by default', () => {
    cy.get('.results').should('exist')
    cy.get('.results-stub').should('exist')
  })
})
