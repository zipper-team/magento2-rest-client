export class ReviewController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    getByProductSku(sku: any): any;
    list(searchCriteria: any): any;
    create(reviewData: any): any;
    delete(reviewId: any): any;
}
import { RestClient } from "../rest_client";
