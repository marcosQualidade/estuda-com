const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bstackdemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure: true, // Captura de tela em caso de falha
    supportFile: 'cypress/support/commands.js',
    defaultCommandTimeout: 10000
  },
});
