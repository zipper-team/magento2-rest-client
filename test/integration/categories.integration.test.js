const chai = require('chai');
const credentials = require('../config');
const assert = chai.assert;

const Magento2Client = require('../../index').Magento2Client;

suite('categories tests', function () {
  /**
   * @type {Magento2Client}
   */
  let client;

  before(function () {
    client = Magento2Client(credentials);
  });

  test('list categories test', function (done) {
    client.categories
      .list()
      .then(function (categories) {
        assert.equal(categories.parentId, 1);
      })
      .then(done, done);
  });

  test('create category test', function (done) {
    const newCategory = {
      category: {
        parentId: 3,
        name: 'Category from integration test',
        isActive: true,
        includeInMenu: true,
      },
    };
    client.categories
      .create(newCategory)
      .then(function (result) {
        assert.equal(result.parentId, 3);
      })
      .then(done, done);
  });

  test('update category test', function (done) {
    const categoryUpdate = {
      category: {
        parentId: 3,
        name: 'Podkategorija 1 updated',
        isActive: true,
        includeInMenu: true,
      },
    };
    client.categories
      .update(4, categoryUpdate)
      .then(function (result) {
        assert.equal(result.parentId, 3);
      })
      .then(done, done);
  });

  test('delete category test', function (done) {
    client.categories
      .delete(23)
      .then(function (result) {
        assert.isTrue(result);
      })
      .then(done, done);
  });
});
