export class RestClient {
    constructor(options: any);
    instance: {};
    servelrUrl: any;
    apiVersion: any;
    oauth: any;
    token: {
        public: any;
        secret: any;
    };
    apiCall(request_data: any, request_token?: string, customHeaders?: {}): Promise<any>;
    consumerToken(login_data: any): Promise<any>;
    httpCallSucceeded(response: any): boolean;
    errorString(message: any, parameters: any): any;
    get(resourceUrl: any, request_token?: string): any;
    createUrl(resourceUrl: any): string;
    post(resourceUrl: any, data: any, request_token?: string, customHeaders?: {}): any;
    put(resourceUrl: any, data: any, request_token?: string): any;
    delete(resourceUrl: any, request_token?: string): any;
}
