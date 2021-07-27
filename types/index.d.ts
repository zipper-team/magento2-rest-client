export class Magento2Client {
    constructor(options?: {
        url: any;
        consumerKey: any;
        consumerSecret: any;
        accessToken: any;
        accessTokenSecret: any;
    });
    options: {
        url: any;
        consumerKey: any;
        consumerSecret: any;
        accessToken: any;
        accessTokenSecret: any;
    };
    attributes: AttributeController;
    categories: CategoryController;
    products: ProductController;
    productMedia: ProductMediaController;
    categoryProducts: CategoryProductController;
    configurableChildren: ConfigurableChildrenController;
    configurableOptions: ConfigurableOptionsController;
    stockItems: StockItemController;
    taxRates: TaxRateController;
    taxRules: TaxRuleController;
    customers: CustomerController;
    carts: CartController;
    orders: OrderController;
    directories: DirectoryController;
    reviews: ReviewController;
    addMethods(key: any, module: any): void;
}
import { AttributeController } from "./lib/controllers/attributes";
import { CategoryController } from "./lib/controllers/categories";
import { ProductController } from "./lib/controllers/products";
import { ProductMediaController } from "./lib/controllers/product_media";
import { CategoryProductController } from "./lib/controllers/category_products";
import { ConfigurableChildrenController } from "./lib/controllers/configurable_children";
import { ConfigurableOptionsController } from "./lib/controllers/configurable_options";
import { StockItemController } from "./lib/controllers/stock_items";
import { TaxRateController } from "./lib/controllers/tax_rates";
import { TaxRuleController } from "./lib/controllers/tax_rules";
import { CustomerController } from "./lib/controllers/customers";
import { CartController } from "./lib/controllers/cart";
import { OrderController } from "./lib/controllers/orders";
import { DirectoryController } from "./lib/controllers/directory";
import { ReviewController } from "./lib/controllers/reviews";
