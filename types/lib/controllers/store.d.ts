export class StoreController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    /**
     * @return {Promise<Array>}
     * @memberof StoreController
     */
    list(): Promise<any[]>;
}
import { RestClient } from "../rest_client";
