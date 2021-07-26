// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class OrderController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  /**
   * @see https://devdocs.magento.com/guides/v2.3/rest/retrieve-filtered-responses.html
   * @see salesOrderRepositoryV1: GET /V1/orders/{id}
   *
   * @param {String} orderId
   * @return {Promise<{increment_id: String}>}
   */
  incrementIdById(orderId) {
    return this.restClient.get('/orders/' + orderId + '?fields=increment_id');
  }

  pending() {
    return this.restClient.get('/orders/pending');
  }
  searchOrderByOrderId(orderId) {
    return this.restClient.get(
      '/orders/?searchCriteria[filter_groups][0][filters][0][field]=entity_id&' +
        'searchCriteria[filter_groups][0][filters][0][value]=' +
        orderId +
        '&' +
        'searchCriteria[filter_groups][0][filters][0][condition_type]=eq'
    );
  }
  searchOrderByIncrementId(increment_id) {
    return this.restClient.get(
      '/orders/?searchCriteria[filter_groups][0][filters][0][field]=increment_id&' +
        'searchCriteria[filter_groups][0][filters][0][value]=' +
        increment_id +
        '&' +
        'searchCriteria[filter_groups][0][filters][0][condition_type]=eq'
    );
  }
}

exports.OrderController = OrderController;
