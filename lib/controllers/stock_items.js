const util = require('util');

// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class StockItemController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  list(sku) {
    const endpointUrl = util.format('/stockItems/%s', encodeURIComponent(sku));
    return this.restClient.get(endpointUrl);
  }

  // MSI
  getSalableQty(sku, stockId) {
    const endpointUrl = util.format(
      '/inventory/get-product-salable-quantity/%s/%d',
      encodeURIComponent(sku),
      encodeURIComponent(stockId)
    );
    return this.restClient.get(endpointUrl);
  }

  // MSI
  isSalable(sku, stockId) {
    const endpointUrl = util.format(
      '/inventory/is-product-salable/%s/%d',
      encodeURIComponent(sku),
      encodeURIComponent(stockId)
    );
    return this.restClient.get(endpointUrl);
  }
}

exports.StockItemController = StockItemController;
