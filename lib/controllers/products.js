const util = require('util');
// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class ProductController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  list(searchCriteria) {
    const query = 'searchCriteria=' + searchCriteria;
    const endpointUrl = util.format('/products?%s', query);
    return this.restClient.get(endpointUrl);
  }

  renderList(searchCriteria, currencyCode = 'USD', storeId = 1) {
    const query = 'searchCriteria=' + searchCriteria;
    const endpointUrl = util.format(
      '/products-render-info?%s&storeId=%d&currencyCode=' + encodeURIComponent(currencyCode),
      query,
      storeId
    );
    return this.restClient.get(endpointUrl);
  }

  create(productAttributes) {
    return this.restClient.post('/products', productAttributes);
  }

  update(productSku, productAttributes) {
    const endpointUrl = util.format('/products/%s', encodeURIComponent(productSku));
    return this.restClient.put(endpointUrl, productAttributes);
  }

  delete(productSku) {
    const endpointUrl = util.format('/products/%s', encodeURIComponent(productSku));
    return this.restClient.delete(endpointUrl);
  }
}

exports.ProductController = ProductController;
