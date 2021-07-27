export class StockItemController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    list(sku: any): any;
    getSalableQty(sku: any, stockId: any): any;
    isSalable(sku: any, stockId: any): any;
}
import { RestClient } from "../rest_client";
