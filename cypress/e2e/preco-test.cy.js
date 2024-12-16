/// <reference types="cypress" />

describe('Verificar dos produtos na página do eccomerce', () => {
    
    it('Deve verificar se todas os valores dos produtos estão visíveis', () => {
        cy.get('.val').each(($el, index) => {
        cy.wrap($el).should('be.visible'); // Verifica se valar formatado de cada produto está visível
        cy.screenshot(`produto_imagem_${index + 1}`); // Captura de tela do valor formatado de cada produto
      })
    })
})