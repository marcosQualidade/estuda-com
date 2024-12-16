/// <reference types="cypress" />

describe('Verificar dos produtos na página do eccomerce', () => {
    
    it('Deve verificar se todos os botões de adicionar produtos estão visíveis e clicáveis', () => {
        cy.get('.buy-btn').each(($el) => { // Verifica se o botão está visível
        cy.wrap($el).should('be.visible'); // Verifica se o botão está habilitado (clicável)
        cy.wrap($el).should('not.be.disabled')
       })
    })
})