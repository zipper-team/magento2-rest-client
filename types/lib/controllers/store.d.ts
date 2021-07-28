export class StoreController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    list(): any;
}
import { RestClient } from "../rest_client";
