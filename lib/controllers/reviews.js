const util = require('util');
// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class ReviewController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }
  getByProductSku(sku) {
    const endpointUrl = util.format('/products/%s/reviews', encodeURIComponent(sku));
    return this.restClient.get(endpointUrl);
  }

  list(searchCriteria) {
    const query = 'searchCriteria=' + searchCriteria;
    const endpointUrl = util.format('/reviews/?%s', query);
    return this.restClient.get(endpointUrl);
  }

  create(reviewData) {
    return this.restClient.post('/reviews', { review: reviewData });
  }

  delete(reviewId) {
    const endpointUrl = util.format('/reviews/%d', reviewId);
    return this.restClient.delete(endpointUrl);
  }
}

exports.ReviewController = ReviewController;
