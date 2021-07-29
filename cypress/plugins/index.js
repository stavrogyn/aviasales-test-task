/// <reference types="cypress" />

const injectDevServer = require("@cypress/react/plugins/react-scripts");

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  injectDevServer(on, config);
  return config;
};
