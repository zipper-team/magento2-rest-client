export class CategoryProductController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    list(categoryId: any): any;
}
import { RestClient } from "../rest_client";
