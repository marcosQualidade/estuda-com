/// <reference types="cypress" />

describe('Verificar dos produtos na página do eccomerce', () => {
    
    it('Deve verificar se todas sd psrcelsa dos produtos estão visíveis', () => {
        cy.get('.installment').each(($el, index) => {
        cy.wrap($el).should('be.visible'); // Verifica se valar formatado de cada parcela dos produtos está visível
        cy.screenshot(`produto_imagem_${index + 1}`); // Captura de tela do valor formatado das parcelas de cada produto
      })
    })
})