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
     * @return 200|application/json - Successfully retrieved private link resources.
     * @return default|application/json - Error response describing why the operation failed.
     */
    ListByVault(subscriptionId: string, resourceGroupName: string, vaultName: string & RegularExpression<'^[a-zA-Z0-9-]{3,24}$'>, api_version: Query<string, 'api-version'>): [(code: 200, mediaType: "application/json") => {
        body: PrivateLinkResourceListResult;
    }, (mediaType: "application/json") => {
        body: CloudError;
        isException: true;
    }];
}
