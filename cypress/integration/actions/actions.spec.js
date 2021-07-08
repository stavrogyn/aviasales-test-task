/// <reference types="cypress" />

describe('Ticket search', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  })

  it('should start due store.dispatch and tickets should appear', () => {
    cy.intercept('**/tickets**').as(`results`);
    cy.window().its('model').invoke('startSearch')
    cy.wait('@results')
      .get('.ticket')
      .then(tickets => expect(tickets.length).to.equal(5))
  })

})