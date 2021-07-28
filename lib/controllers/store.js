// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class StoreController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  /**
   * @return {Promise<Array>} 
   * @memberof StoreController
   */
  list() {
    return this.restClient.get('/store/websites');
  }
}

exports.StoreController = StoreController;
