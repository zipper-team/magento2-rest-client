const {RestClient} = require('./lib/rest_client');
const {CategoryController} = require('./lib/controllers/categories');
const {AttributeController} = require('./lib/controllers/attributes');
const {ProductController} = require('./lib/controllers/products');
const {ProductMediaController} = require('./lib/controllers/product_media');
const {CategoryProductController} = require('./lib/controllers/category_products');
const {ConfigurableChildrenController} = require('./lib/controllers/configurable_children');
const {ConfigurableOptionsController} = require('./lib/controllers/configurable_options');
const {TaxRateController} = require('./lib/controllers/tax_rates');
const {TaxRuleController} = require('./lib/controllers/tax_rules');
const {StockItemController} = require('./lib/controllers/stock_items');
const {CustomerController} = require('./lib/controllers/customers');
const {DirectoryController} = require('./lib/controllers/directory');
const {CartController} = require('./lib/controllers/cart');
const {OrderController} = require('./lib/controllers/orders');
const {ReviewController} = require('./lib/controllers/reviews');
const {StoreController} = require('./lib/controllers/store');

const MAGENTO_API_VERSION = 'V1';

module.exports.Magento2Client = class Magento2Client {
  constructor(
      options = {
        url,
        consumerKey,
        consumerSecret,
        accessToken,
        accessTokenSecret,
      },
  ) {
    this.options = options;
    this.options.version = MAGENTO_API_VERSION;

    const client = new RestClient(options);

    this.attributes = new AttributeController(client);
    this.categories = new CategoryController(client);
    this.products = new ProductController(client);
    this.productMedia = new ProductMediaController(client);
    this.categoryProducts = new CategoryProductController(client);
    this.configurableChildren = new ConfigurableChildrenController(client);
    this.configurableOptions = new ConfigurableOptionsController(client);
    this.stockItems = new StockItemController(client);
    this.taxRates = new TaxRateController(client);
    this.taxRules = new TaxRuleController(client);
    this.customers = new CustomerController(client);
    this.carts = new CartController(client);
    this.orders = new OrderController(client);
    this.directories = new DirectoryController(client);
    this.reviews = new ReviewController(client);
    this.stores = new StoreController(client)
  }

  addMethods(key, module) {
    const client = RestClient(options);
    if (module) {
      if (this[key]) this[key] = Object.assign(this[key], module(client));
      else this[key] = module(client);
    }
  }
};