export class TaxRateController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    list(rateId: any): any;
    create(rateAttributes: any): any;
    update(rateId: any, rateAttributes: any): any;
    delete(rateId: any): any;
}
import { RestClient } from "../rest_client";
