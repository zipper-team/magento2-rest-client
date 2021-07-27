export class TaxRuleController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    list(searchCriteria: any): any;
    create(ruleAttributes: any): any;
    update(ruleId: any, ruleAttributes: any): any;
    delete(ruleId: any): any;
}
import { RestClient } from "../rest_client";
