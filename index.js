const RestClient = require("./lib/rest_client").RestClient;
const categories = require("./lib/categories");
const attributes = require("./lib/attributes");
const products = require("./lib/products");
const productMedia = require("./lib/product_media");
const categoryProducts = require("./lib/category_products");
const configurableChildren = require("./lib/configurable_children");
const configurableOptions = require("./lib/configurable_options");
const taxRates = require("./lib/tax_rates");
const taxRules = require("./lib/tax_rules");
const stockItems = require("./lib/stock_items");
const customers = require("./lib/customers");
const directory = require("./lib/directory");
const cart = require("./lib/cart");
const orders = require("./lib/orders");
const reviews = require("./lib/reviews");

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
    const client = RestClient(options);
    if (module) {
      if (this[key]) this[key] = Object.assign(this[key], module(client));
      else this[key] = module(client);
    }
  }
};
