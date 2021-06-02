var RestClient = require("./lib/rest_client").RestClient;
var categories = require("./lib/categories");
var attributes = require("./lib/attributes");
var products = require("./lib/products");
var productMedia = require("./lib/product_media");
var categoryProducts = require("./lib/category_products");
var configurableChildren = require("./lib/configurable_children");
var configurableOptions = require("./lib/configurable_options");
var taxRates = require("./lib/tax_rates");
var taxRules = require("./lib/tax_rules");
var stockItems = require("./lib/stock_items");
var customers = require("./lib/customers");
var directory = require("./lib/directory");
var cart = require("./lib/cart");
var orders = require("./lib/orders");
var reviews = require("./lib/reviews");

const MAGENTO_API_VERSION = "V1";

module.exports.Magento2Client = class Magento2Client {
  constructor(
    options = {
      url,
      consumerKey,
      consumerSecret,
      accessToken,
      accessTokenSecret,
    }
  ) {
    this.options = options;
    this.options.version = MAGENTO_API_VERSION;
    
    const client = RestClient(options);

    this.attributes = attributes(client);
    this.categories = categories(client);
    this.products = products(client);
    this.productMedia = productMedia(client);
    this.categoryProducts = categoryProducts(client);
    this.configurableChildren = configurableChildren(client);
    this.configurableOptions = configurableOptions(client);
    this.stockItems = stockItems(client);
    this.taxRates = taxRates(client);
    this.taxRules = taxRules(client);
    this.customers = customers(client);
    this.cart = cart(client);
    this.orders = orders(client);
    this.directory = directory(client);
    this.reviews = reviews(client);
  }

  addMethods(key, module) {
    var client = RestClient(options);
    if (module) {
      if (this[key]) this[key] = Object.assign(this[key], module(client));
      else this[key] = module(client);
    }
  }
};
