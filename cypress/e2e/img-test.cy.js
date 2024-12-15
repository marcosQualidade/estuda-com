/// <reference types="cypress" />

describe('Verificar dos produtos na página do eccomerce', () => {

    it('Deve verificar se todas as imagens dos produtos estão visíveis', () => {
        cy.get('.shelf-item__thumb').each(($el, index) => {
        cy.wrap($el).should('be.visible'); // Verifica se cada imagem está visível 
        cy.screenshot(`produto_imagem_${index + 1}`); //  // Captura de tela de cada imagem });
      })
    })

})