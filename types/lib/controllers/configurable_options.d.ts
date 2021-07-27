export class ConfigurableOptionsController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    list(sku: any): any;
}
import { RestClient } from "../rest_client";
