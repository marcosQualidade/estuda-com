/// <reference types="cypress" />

describe('Verificar dos produtos na página do eccomerce', () => {
    
    it('Deve verificar se todos os nomes dos produtos estão visíveis', () => {
        cy.get('.shelf-item__title').each(($el, index) => {
        cy.wrap($el).should('be.visible'); // Verifica se o nome de cada produto está visível
        cy.screenshot(`produto_imagem_${index + 1}`); // Captura de tela do nome de cada produto
      })
    })

})