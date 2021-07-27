export class AttributeController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    list(searchCriteria: any): any;
    create(categoryAttributes: any): any;
    update(attributeId: any, categoryAttributes: any): any;
    delete(attributeId: any): any;
}
import { RestClient } from "../rest_client";
