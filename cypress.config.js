// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
    },
    supportFile: "cypress/support/e2e.js", // Point to your support file
  },
});
