const util = require('util');
// eslint-disable-next-line no-unused-vars
const { RestClient } = require('../rest_client');

class CustomerController {
  /**
   * @param {RestClient} restClient
   */
  constructor(restClient) {
    this.restClient = restClient;
  }

  create(customerData) {
    return this.restClient.post('/customers', customerData);
  }

  token(loginData) {
    return this.restClient.consumerToken(loginData);
  }

  me(requestToken) {
    return this.restClient.get('/customers/me', requestToken);
  }
  orderHistory(requestToken, pageSize = 20, currentPage = 1) {
    return this.restClient.get('/customers/me', requestToken).then((result) => {
      const query =
        'searchCriteria=&searchCriteria[filterGroups][0][filters][0][field]=customer_id&' +
        'searchCriteria[filterGroups][0][filters][0][value]=' +
        result.id +
        '&' +
        'searchCriteria[filterGroups][0][filters][0][condition_type]=eq&' +
        'searchCriteria[pageSize]=' +
        pageSize +
        '&searchCriteria[currentPage]=' +
        currentPage +
        '&' +
        'searchCriteria[sortOrders][0][field]=entity_id&searchCriteria[sortOrders][0][direction]=desc';
      const endpointUrl = util.format('/orders?%s', query);
      return this.restClient.get(endpointUrl);
    });
  }
  resetPassword(emailData) {
    return this.restClient.put('/customers/password', emailData);
  }

  resetPasswordUsingResetToken(resetPasswordData) {
    return this.restClient.post('/customers/resetPassword', resetPasswordData);
  }

  update(userData) {
    return this.restClient.put('/customers/me', userData.body, userData.token);
  }

  changePassword(passwordData) {
    return this.restClient.put('/customers/me/password', passwordData.body, passwordData.token);
  }
}

exports.CustomerController = CustomerController;
