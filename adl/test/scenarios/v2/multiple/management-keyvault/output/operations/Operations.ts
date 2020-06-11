export interface Operations {
    /**
     * @description Lists all of the available Key Vault Rest API operations.
     * @since 2019-09-01
     * @http GET /providers/Microsoft.KeyVault/operations
     * @tag Operations
     * @param api_version - Client Api Version.
     * @return 200 - OK. The request has succeeded.
     */
    List(api_version: Http.Query<string, 'api-version'>, body?: Http.Body<file, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'>;
}
