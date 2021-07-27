export class CategoryController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    list(): any;
    create(categoryAttributes: any): any;
    update(categoryId: any, categoryAttributes: any): any;
    delete(categoryId: any): any;
}
import { RestClient } from "../rest_client";
