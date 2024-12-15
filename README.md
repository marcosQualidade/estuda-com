# Projeto de Automação com Cypress

Este projeto contém testes automatizados usando Cypress para verificar a funcionalidade de um site de e-commerce.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
- [Cypress](https://www.cypress.io/)

## Instalação
Siga os passos abaixo para clonar o repositório, instalar as dependências e rodar os testes:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/marcosQualidade/estuda-com

2. **Navegue até o diretório do projeto:**
    cd estuda-com/automacao

3. **Instale as dependências:**
    npm install

#  Estrutura do Projeto
Automacao/
│
├── cypress/
│   ├── e2e/
│   │   ├── add.product.cy.js
│   │   ├── btn-test.cy.js
│   │   ├── img-test.cy.js
│   │   ├── installment-tes.cy.js
│   │   ├── name-test.cy.js
│   │   ├── online.cy.js
│   │   ├── price-test.cy.js
│   ├── fixture/
│   │   └── example.json
│   ├── screenshots/
│   │   └── imagens.png
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
├── node_modules/
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md

# Configuração do Cypress
    O arquivo cypress.config.js contém a configuração do Cypress. Aqui está um exemplo de configuração:

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bstackdemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure: true, // Captura de tela em caso de falha
    supportFile: 'cypress/support/commands.js', // Inclui o arquivo de suporte
    defaultCommandTimeout: 10000 // Tempo de espera padrão em milissegundos (10 segundos)
  },
});

# Executando os Testes
    Para executar os testes, siga os passos abaixo:

1. **Abra o Cypress:**
    npx cypress open

2. **Execute os Testes:**
    Na interface do Cypress, clique no arquivo de teste que deseja executar.

    



