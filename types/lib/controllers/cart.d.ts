export class CartController {
    /**
     * @param {RestClient} restClient
     */
    constructor(restClient: RestClient);
    restClient: RestClient;
    create(customerToken: any, customerId?: any): any;
    update(customerToken: any, cartId: any, cartItem: any, adminRequest?: boolean): any;
    applyCoupon(customerToken: any, cartId: any, coupon: any, adminRequest?: boolean): any;
    deleteCoupon(customerToken: any, cartId: any, adminRequest?: boolean): any;
    getCoupon(customerToken: any, cartId: any, adminRequest?: boolean): any;
    delete(customerToken: any, cartId: any, cartItem: any, adminRequest?: boolean): any;
    pull(customerToken: any, cartId: any, params: any, adminRequest?: boolean): any;
    totals(customerToken: any, cartId: any, params: any, adminRequest?: boolean): any;
    billingAddress(customerToken: any, cartId: any, body: any, adminRequest?: boolean): any;
    shippingInformation(customerToken: any, cartId: any, body: any, adminRequest?: boolean): any;
    order(customerToken: any, cartId: any, body: any, adminRequest?: boolean): any;
    paymentInformationAndOrder(customerToken: any, cartId: any, body: any, adminRequest?: boolean, headers?: {}): any;
    assign(cartId: any, userId: any, storeId?: number): any;
    shippingMethods(customerToken: any, cartId: any, address: any): any;
    paymentMethods(customerToken: any, cartId: any): any;
    collectTotals(customerToken: any, cartId: any, shippingMethod: any): any;
}
import { RestClient } from "../rest_client";
