const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "qc1uy6",
    experimentalStudio: true,
    defaultCommandTimeout: 15000,
    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    pageLoadTimeout: 100000,
    screenshotOnRunFailure: false,
    // video: true,
    //videoCompression: true,
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});

// npx cypress run --record --key b71f4410-15c1-4a28-81cf-23ee458a4e2c