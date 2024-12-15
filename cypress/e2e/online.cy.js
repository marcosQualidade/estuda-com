/// <reference types="cypress" />
describe('Verificar se o site está no ar', () => {

    it.only('Deve carregar a página inicial com sucesso', () => {   
        cy.get('body')
            .should('be.visible'); // Verifica se o corpo da página está visível

        cy.get('.products-found > span')
            .should('have.text', '25 Product(s) found.') // verifica se há produtos cadastrados disponíveis para compra
    })
  });
  