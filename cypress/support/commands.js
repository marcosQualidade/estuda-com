/// <reference types="cypress" />

Cypress.Commands.add('visitPage', (url) => { 
  cy.visit(`${Cypress.config('baseUrl')}${url}`)
})




