export class ProductController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    list(searchCriteria: any): any;
    renderList(searchCriteria: any, currencyCode?: string, storeId?: number): any;
    create(productAttributes: any): any;
    update(productSku: any, productAttributes: any): any;
    delete(productSku: any): any;
}
import { RestClient } from "../rest_client";
