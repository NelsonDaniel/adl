export interface PrivateLinkResources {
    /**
     * @description Gets the private link resources supported for the key vault.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateLinkResources
     * @tag PrivateLinkResources
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param resourceGroupName - Name of the resource group that contains the key vault.
     * @param vaultName - The name of the key vault.
     * @param api_version - Client Api Version.
     * @return 200 - Successfully retrieved private link resources.
     * @return default - Error response describing why the operation failed.
     */
    ListByVault(subscriptionId: Http.Path<string>, resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<'^[a-zA-Z0-9-]{3,24}$'>>, api_version: Http.Query<string, 'api-version'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<Http.Default, [object, Object], 'application/json'>;
}
