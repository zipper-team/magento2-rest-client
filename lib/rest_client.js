/* eslint-disable prefer-promise-reject-errors */
'use strict';

const OAuth = require('oauth-1.0a');
const request = require('request');
// const humps = require('humps');
// const sprintf = require('util').format;

const {logger} = require('./helpers/log');

class RestClient {
  constructor(options) {
    this.instance = {};

    this.servelrUrl = options.url;
    this.apiVersion = options.version;
    // eslint-disable-next-line new-cap
    this.oauth = OAuth({
      consumer: {
        public: options.consumerKey,
        secret: options.consumerSecret,
      },
      signature_method: 'HMAC-SHA1',
    });
    this.token = {
      public: options.accessToken,
      secret: options.accessTokenSecret,
    };
  }

  apiCall(request_data, request_token = '', customHeaders = {}) {
    /* eslint no-undef: off*/
    return new Promise(function (resolve, reject) {
      request(
        {
          url: request_data.url,
          method: request_data.method,
          headers: {
            ...(request_token
              ? { Authorization: 'Bearer ' + request_token }
              : oauth.toHeader(oauth.authorize(request_data, token))),
            ...customHeaders,
          },
          json: true,
          body: request_data.body,
        },
        function (error, response, body) {
          if (error) {
            logger.error('Error occured: ' + error);
            reject(error);
            return;
          } else if (!httpCallSucceeded(response)) {
            const errorMessage = 'HTTP ERROR ' + response.code;
            if (body && body.hasOwnProperty('message')) {
              errorMessage = errorString(
                body.message,
                body.hasOwnProperty('parameters') ? body.parameters : {}
              );
            }

            logger.error('API call failed: ' + errorMessage);
            reject({
              errorMessage,
              code: response.statusCode,
              toString: () => {
                // eslint-disable-next-line no-invalid-this
                return this.errorMessage;
              },
            });
          }
          //                const bodyCamelized = humps.camelizeKeys(body);
          //                resolve(bodyCamelized);
          resolve(body);
        }
      );
    });
  }

  consumerToken(login_data) {
    return this.apiCall({
      url: createUrl('/integration/customer/token'),
      method: 'POST',
      body: login_data,
    });
  }

  httpCallSucceeded(response) {
    return response.statusCode >= 200 && response.statusCode < 300;
  }

  errorString(message, parameters) {
    if (parameters === null) {
      return message;
    }
    if (parameters instanceof Array) {
      for (const i = 0; i < parameters.length; i++) {
        const parameterPlaceholder = '%' + (i + 1).toString();
        message = message.replace(parameterPlaceholder, parameters[i]);
      }
    } else if (parameters instanceof Object) {
      // eslint-disable-next-line guard-for-in
      for (const key in parameters) {
        const parameterPlaceholder = '%' + key;
        message = message.replace(parameterPlaceholder, parameters[key]);
      }
    }

    return message;
  }

  get(resourceUrl, request_token = '') {
    const request_data = {
      url: createUrl(resourceUrl),
      method: 'GET',
    };
    return apiCall(request_data, request_token);
  }

  createUrl(resourceUrl) {
    return servelrUrl + '/' + apiVersion + resourceUrl;
  }

  post(resourceUrl, data, request_token = '', customHeaders = {}) {
    const request_data = {
      url: createUrl(resourceUrl),
      method: 'POST',
      body: data,
    };
    return apiCall(request_data, request_token, customHeaders);
  }

  put(resourceUrl, data, request_token = '') {
    const request_data = {
      url: createUrl(resourceUrl),
      method: 'PUT',
      body: data,
    };
    return apiCall(request_data, request_token);
  }

  delete(resourceUrl, request_token = '') {
    const request_data = {
      url: createUrl(resourceUrl),
      method: 'DELETE',
    };
    return apiCall(request_data, request_token);
  }
}

exports.RestClient = RestClient;
