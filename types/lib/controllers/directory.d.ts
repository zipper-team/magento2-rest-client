export class DirectoryController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    countries(): any;
    currency(): any;
}
import { RestClient } from "../rest_client";
