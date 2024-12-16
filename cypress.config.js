const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bstackdemo.com',
    defaultCommandTimeout: 10000, // tempo de espera em milissegundos
    screenshotOnRunFailure: true, // tira screenshots em caso de falha
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});


