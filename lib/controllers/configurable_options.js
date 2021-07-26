const util = require('util');
// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class ConfigurableOptionsController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  list(sku) {
    const endpointUrl = util.format(
      '/configurable-products/%s/options/all',
      encodeURIComponent(sku)
    );
    return this.restClient.get(endpointUrl);
  }
}

exports.ConfigurableOptionsController = ConfigurableOptionsController;
