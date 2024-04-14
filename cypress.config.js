const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://social-media-client-msiksnis.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // You can include environment-specific configurations here if needed
    },
    env: {
      // Define your environment variables here
      USER_EMAIL: "testerlogan@noroff.no",
      USER_PASSWORD: "123456789",
    },
  },
});
