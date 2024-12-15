/// <reference types="cypress" />

describe('Verificar se o site está no ar', () => {
    const elements = {
        imagem: '.shelf-item__thumb',
        nomeProduto: '.shelf-item__title',
        valor: '.val',
        parcela: '.installment',
        botao: '.shelf-item__buy-btn',
        itenCarrinho: '.bag__quantity',
        carrinho: 'float-cart__content',
        detalhesProduto: '.float-cart__shelf-container > .shelf-item'
    }
    it('Deve verificar se a imagem do primeiro produto está visível', () => { 
        cy.get(elements.imagem)
            .first()
            .should('be.visible'); // Verifica se a imagem está visível
    })
    it('Deve verificar se o nome do primeiro produto está visível', () => { 
        cy.get(elements.nomeProduto)
            .first()
            .should('be.visible') // Verifica se o nome está visível
    })
    it('Deve verificar se o valor do primeiro produto está visível', () => { 
        cy.get(elements.valor)
            .first()
            .should('be.visible') // Verifica se o valor está visível
    })
    it('Deve verificar se as opções de parcela do primeiro produto estão visíveis', () => { 
        cy.get(elements.parcela)
            .first()
            .should('be.visible') // Verifica se as opções de parcela estão visíveis
    })
    it('Deve verificar se o botão de adicionar ao carrinho do primeiro produto está visível e clicável', () => { 
        cy.get(elements.botao)
            .first()
            .should('be.visible') // Verifica se o botão está visível 
        cy.get(elements.botao)
            .first()
            .should('not.be.disabled') // Verifica se o botão está habilitado (clicável)
    });
    it('Deve adicionar o primeiro produto ao carrinho', () => { 
        cy.get(elements.botao)
            .first()
            .click(); // Clica no botão de adicionar ao carrinho 
        cy.get(elements.itenCarrinho)
            .should('have.length', 1) // Verifica se o carrinho tem 1 item         
    })
    it('Deve verificar se os detalhes do produto estào visiveis no carrinho', () => {
        cy.get(elements.botao)
            .first()
            .click(); // Clica no botão de adicionar ao carrinho
        
        cy.get(elements.detalhesProduto)
            .should('be.visible') // verifica se o produto foi adicionado corretamente    
    }) 
    
})