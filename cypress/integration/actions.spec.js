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

describe('Result page', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  })

  it('should contain one ticket with appropriate values', () => {
    cy.fixture('tickets').then(tickets => {
      const { price, segments } = tickets[0];
      const [firstSegment, secondSegment] = segments;
      const { origin: firstOrigin, destination: firstDestination, stops: firstStops } = firstSegment;
      const { origin: secindOrigin, destination: secondDestination }  = secondSegment
      cy.window().its('model').invoke('showTickets', tickets)
      cy.get('.ticket').then(tickets => {
        expect(tickets.length).to.equal(1);
        cy.wrap(tickets)
          .then(ticket => {
            cy.wrap(ticket).find('.ticket-header__price').invoke('text').should('equal', `${parseInt(price / 1000)} ${price % 1000} P`)
            cy.wrap(ticket).find('.ticket-segment__destination-iatas').eq(0).invoke('text').should('equal', `${firstOrigin} - ${firstDestination}`);
            cy.wrap(ticket).find('.ticket-segment__destination-iatas').eq(1).invoke('text').should('equal', `${secindOrigin} - ${secondDestination}`);
            cy.wrap(ticket).find('.ticket-segment__transfers-iatas').eq(0).invoke('text').should('equal', `${firstStops.join(', ')}`);
            cy.wrap(ticket).find('.ticket-segment__transfers-iatas').eq(1).invoke('text').should('equal', '');
          })
      })
    })
  })

})