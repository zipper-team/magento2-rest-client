export class CustomerController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    create(customerData: any): any;
    token(loginData: any): Promise<any>;
    me(requestToken: any): any;
    orderHistory(requestToken: any, pageSize?: number, currentPage?: number): any;
    resetPassword(emailData: any): any;
    resetPasswordUsingResetToken(resetPasswordData: any): any;
    update(userData: any): any;
    changePassword(passwordData: any): any;
}
import { RestClient } from "../rest_client";
