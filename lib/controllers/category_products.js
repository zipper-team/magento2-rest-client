const util = require('util');
// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class CategoryProductController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  list(categoryId) {
    const endpointUrl = util.format('/categories/%d/products', categoryId);
    return this.restClient.get(endpointUrl);
  }
}

exports.CategoryProductController = CategoryProductController;
