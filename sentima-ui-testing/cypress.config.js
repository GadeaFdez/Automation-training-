const { defineConfig } = require("cypress");

module.exports = defineConfig({
  resolution: "1920x1080",
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  responseTimeout: 1000,
  taskTimeout: 1000,
  scrollBehavior: "center",
  fixtures: true,
  experimentalWebKitSupport: true,
  retries: {
    runMode: 3,
    openMode: 0,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://sentimaco.com",
  },
});
