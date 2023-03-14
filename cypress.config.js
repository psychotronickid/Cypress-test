const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c99noa',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
