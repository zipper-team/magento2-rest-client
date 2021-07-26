const util = require('util');
// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class CategoryController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  list() {
    return this.restClient.get('/categories');
  }

  create(categoryAttributes) {
    return this.restClient.post('/categories', categoryAttributes);
  }

  update(categoryId, categoryAttributes) {
    const endpointUrl = util.format('/categories/%d', categoryId);
    return this.restClient.put(endpointUrl, categoryAttributes);
  }

  delete(categoryId) {
    const endpointUrl = util.format('/categories/%d', categoryId);
    return this.restClient.delete(endpointUrl);
  }
}

exports.CategoryController = CategoryController;
