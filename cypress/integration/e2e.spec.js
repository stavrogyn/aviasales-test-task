/// <reference types="cypress" />

describe("Start page", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it("should contain stub component for empty results", () => {
    cy.get(".results").find(".results-stub").should("exist");
  });

  it("should contain filter component and transfers filter without particular values", () => {
    cy.get(".filters").should("exist");
    cy.get(".filters-transfers_amout").should("exist");
    cy.get(".filters-transfers_amout")
      .find(".filters-transfers_amout-cell")
      .its("length")
      .should("equal", 1);
    cy.get(".filters-transfers_amout")
      .find(".filters-transfers_amout-cell")
      .eq(0)
      .should("contain", "Все");
  });
});

describe("Ticket search", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it("should start due click", () => {
    cy.get(".app-logo").click();
    cy.intercept("**/tickets**").as(`results`);
    cy.wait("@results")
      .get(".ticket")
      .then((tickets) => expect(tickets.length).to.equal(5));
  });
});
