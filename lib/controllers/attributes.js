const util = require('util');
// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class AttributeController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  list(searchCriteria) {
    const query = 'searchCriteria=' + searchCriteria;
    const endpointUrl = util.format('/products/attributes?%s', query);
    return restClient.get(endpointUrl);
  }

  create(categoryAttributes) {
    return restClient.post('/products/attributes', categoryAttributes);
  }

  update(attributeId, categoryAttributes) {
    const endpointUrl = util.format('/products/attributes/%d', attributeId);
    return restClient.put(endpointUrl, categoryAttributes);
  }

  delete(attributeId) {
    const endpointUrl = util.format('/products/attributes/%d', attributeId);
    return restClient.delete(endpointUrl);
  }
}

exports.AttributeController = AttributeController;
