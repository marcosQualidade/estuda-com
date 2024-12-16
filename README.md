# Guia para Análise e Teste dos Cenários das Issues

## Como Analisar e Testar os Cenários

Para analisar e testar os cenários descritos nas issues, siga os passos abaixo:

### Acesse a Issue de Introdução

A documentação completa dos casos de testes manuais está disponível na [issue #15](https://github.com/marcosQualidade/estuda-com/issues/15). Esta issue contém a introdução da documentação do projeto e a estrutura dos testes.

### Entenda a Estrutura das Issues

Cada issue contém informações detalhadas sobre os casos de teste, incluindo:
- **ID do Caso de Teste**: Identificador único do caso de teste.
- **Objetivo**: Descrição do objetivo do teste.
- **Passos para Reprodução**: Passos detalhados para reproduzir o teste.
- **Resultado Esperado**: O que se espera que aconteça após a execução do teste.
- **Resultado Obtido**: O que realmente aconteceu após a execução do teste.
- **Evidências**: Screenshots ou outros arquivos que comprovem o resultado do teste.
- **Resultado do Teste**: Indicação se o teste passou ou falhou.

## Exemplos de Cenários de Teste

- **CT001**: Verificação da Disponibilidade da Página Principal e Acesso à Página de Login
- **CT002**: Login Válido
- **CT003**: Login sem Preencher os Campos de Login e Senha
- **CT004**: Login sem Username
- **CT005**: Login sem Senha
- **CT006**: Adicionar Produto ao Carrinho

### Preparação para os Testes

- Certifique-se de que você tem acesso ao site [bstackdemo.com](https://bstackdemo.com) e que está familiarizado com as funcionalidades que serão testadas.
- Tenha um ambiente de teste configurado, se necessário, para evitar interferências com dados de produção.

### Execução dos Testes

- Siga os passos para reprodução descritos em cada issue. Certifique-se de seguir cada passo cuidadosamente para garantir a precisão dos testes.
- Compare o resultado obtido com o resultado esperado descrito na issue.

### Documentação dos Resultados

- Registre os resultados obtidos durante a execução dos testes. Inclua evidências, como screenshots, para comprovar os resultados.
- Indique se o teste passou ou falhou com base na comparação entre o resultado obtido e o resultado esperado.

### Relatório de Defeitos

- Se encontrar defeitos durante a execução dos testes, registre-os em novas issues no repositório.

---

# Projeto de Automação com Cypress

## Introdução
Este projeto contém testes automatizados utilizando Cypress para validar funcionalidades do sistema. Siga os passos abaixo para configurar e rodar os testes em sua máquina local.

## Pré-requisitos
- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Git (para clonar o repositório)

## Passo a Passo

### 1. Clonar o Repositório
```bash
Clone o repositório para sua máquina local usando o comando:
git clone https://github.com/marcosQualidade/estuda-com.git
```
## 2. Navegar até o Diretório do Projeto
        Entre no diretório do projeto:
        cd estuda-com/automacao
        
### 3. Instalar Dependências        
        Instale todas as dependências necessárias usando o npm:
        npm install

## 4. Configurar o Cypress
        Certifique-se de que o Cypress está configurado corretamente no arquivo cypress.config.js. O arquivo deve conter:
```json
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bstackdemo.com',
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos'
});
```
## 5. Rodar os Testes
        Abra o Cypress e execute os testes:
        npx cypress open
        
        Na interface do Cypress, selecione o teste que você deseja executar.
        
## 6. Verificar Resultados
        Após a execução dos testes, verifique os resultados e as evidências (screenshots) nas pasta configurada cypress/screenshots
