const util = require('util');

// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class TaxRateController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  list(rateId) {
    const endpointUrl = util.format('/taxRates/%d', rateId);
    return this.restClient.get(endpointUrl);
  }

  create(rateAttributes) {
    return this.restClient.post('/taxRates', rateAttributes);
  }

  update(rateId, rateAttributes) {
    const endpointUrl = util.format('/taxRates/%d', rateId);
    return this.restClient.put(endpointUrl, rateAttributes);
  }

  delete(rateId) {
    const endpointUrl = util.format('/taxRates/%d', rateId);
    return this.restClient.delete(endpointUrl);
  }
}

exports.TaxRateController = TaxRateController;
