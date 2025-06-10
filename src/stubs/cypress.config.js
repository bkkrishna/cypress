import { defineConfig } from 'cypress';
import setupPlugins from './%cypressPath%/plugins/index.js';

export default defineConfig({
    chromeWebSecurity: false,
    retries: 2,
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    videosFolder: '%cypressPath%/videos',
    screenshotsFolder: '%cypressPath%/screenshots',
    fixturesFolder: '%cypressPath%/fixture',
    e2e: {
        setupNodeEvents(on, config) {
            return setupPlugins(on, config);
        },
        baseUrl: '%baseUrl%',
        specPattern: '%cypressPath%/integration/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: '%cypressPath%/support/index.js',
    },
});
