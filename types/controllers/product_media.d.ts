export class ProductMediaController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    list(productSku: any): any;
    get(productSku: any, mediaId: any): any;
    create(productSku: any, productMediaAttributes: any): any;
    update(productSku: any, mediaId: any, productMediaAttributes: any): any;
    delete(productSku: any, mediaId: any): any;
}
import { RestClient } from "../rest_client";
