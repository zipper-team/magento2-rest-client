export class OrderController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    /**
     * @see https://devdocs.magento.com/guides/v2.3/rest/retrieve-filtered-responses.html
     * @see salesOrderRepositoryV1: GET /V1/orders/{id}
     *
     * @param {String} orderId
     * @return {Promise<{increment_id: String}>}
     */
    incrementIdById(orderId: string): Promise<{
        increment_id: string;
    }>;
    pending(): any;
    searchOrderByOrderId(orderId: any): any;
    searchOrderByIncrementId(increment_id: any): any;
}
import { RestClient } from "../rest_client";
