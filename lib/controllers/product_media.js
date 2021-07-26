const util = require('util');
// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class ProductMediaController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  list(productSku) {
    const endpointUrl = util.format('/products/%s/media', productSku);
    return this.restClient.get(endpointUrl);
  }

  get(productSku, mediaId) {
    const endpointUrl = util.format(
      '/products/%s/media/%d',
      encodeURIComponent(productSku),
      mediaId
    );
    return this.restClient.get(endpointUrl);
  }

  create(productSku, productMediaAttributes) {
    const endpointUrl = util.format('/products/%s/media', encodeURIComponent(productSku));
    return this.restClient.post(endpointUrl, productMediaAttributes);
  }

  update(productSku, mediaId, productMediaAttributes) {
    const endpointUrl = util.format(
      '/products/%s/media/%d',
      encodeURIComponent(productSku),
      mediaId
    );
    return this.restClient.put(endpointUrl, productMediaAttributes);
  }

  delete(productSku, mediaId) {
    const endpointUrl = util.format(
      '/products/%s/media/%d',
      encodeURIComponent(productSku),
      mediaId
    );
    return this.restClient.delete(endpointUrl);
  }
}

exports.ProductMediaController = ProductMediaController;
