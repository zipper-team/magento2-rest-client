export class StoreController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    /**
     * @return {Array}
     * @memberof StoreController
     */
    list(): any[];
}
import { RestClient } from "../rest_client";
