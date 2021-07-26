const util = require('util');

// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class TaxRuleController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  list(searchCriteria) {
    const query = 'searchCriteria=' + searchCriteria;
    const endpointUrl = util.format('/taxRules/search?%s', query);
    return this.restClient.get(endpointUrl);
  }

  create(ruleAttributes) {
    return this.restClient.post('/taxRules', ruleAttributes);
  }

  update(ruleId, ruleAttributes) {
    const endpointUrl = util.format('/taxRules/%d', ruleId);
    return this.restClient.put(endpointUrl, ruleAttributes);
  }

  delete(ruleId) {
    const endpointUrl = util.format('/taxRules/%d', ruleId);
    return this.restClient.delete(endpointUrl);
  }
}

exports.TaxRuleController = TaxRuleController;
