const util = require('util');

// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class DirectoryController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  countries() {
    const endpointUrl = util.format('/directory/countries');
    return this.restClient.get(endpointUrl);
  }

  currency() {
    const endpointUrl = util.format('/directory/currency');
    return this.restClient.get(endpointUrl);
  }
}

exports.DirectoryController = DirectoryController;
