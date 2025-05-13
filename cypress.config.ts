import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: 'http://localhost:5173',
    defaultCommandTimeout: 20000,
        requestTimeout: 30000,
        responseTimeout: 30000,
        taskTimeout: 60000,
        execTimeout: 30000,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
