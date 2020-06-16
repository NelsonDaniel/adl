export interface Secrets {
    /**
     * @description Gets the specified secret.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}
     * @tag Secrets
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param vaultName - The name of the vault.
     * @param secretName - The name of the secret.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200|application/json - Retrieved secret
     */
    Get(resourceGroupName: string, vaultName: string, secretName: string, api_version: Query<string, 'api-version'>, subscriptionId: string, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: Secret;
    }];
    /**
     * @description Create or update a secret in a key vault in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
     * @since 2019-09-01
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}
     * @tag Secrets
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param vaultName - Name of the vault
     * @param secretName - Name of the secret
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param parameters - Parameters to create or update the secret
     * @return 200|application/json - Created or updated secret
     * @return 201|application/json - Created or updated vault
     */
    CreateOrUpdate(resourceGroupName: string, vaultName: string & RegularExpression<'^[a-zA-Z0-9-]{3,24}$'>, secretName: string & RegularExpression<'^[a-zA-Z0-9-]{1,127}$'>, api_version: Query<string, 'api-version'>, subscriptionId: string, parameters: Body<SecretCreateOrUpdateParameters, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: Secret;
    }, (code: 201, mediaType: "application/json") => {
        body: Secret;
    }];
    /**
     * @description Update a secret in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments.  Users should use the data-plane REST service for interaction with vault secrets.
     * @since 2019-09-01
     * @http PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}
     * @tag Secrets
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param vaultName - Name of the vault
     * @param secretName - Name of the secret
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param parameters - Parameters to patch the secret
     * @return 200|application/json - Patched secret
     * @return 201|application/json - Patched secret
     */
    Update(resourceGroupName: string, vaultName: string & RegularExpression<'^[a-zA-Z0-9-]{3,24}$'>, secretName: string & RegularExpression<'^[a-zA-Z0-9-]{1,127}$'>, api_version: Query<string, 'api-version'>, subscriptionId: string, parameters: Body<SecretPatchParameters, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: Secret;
    }, (code: 201, mediaType: "application/json") => {
        body: Secret;
    }];
    /**
     * @description The List operation gets information about the secrets in a vault.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets
     * @tag Secrets
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param vaultName - The name of the vault.
     * @param __top - Maximum number of results to return.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200|application/json - Get information about secrets in the specified vault.
     */
    List(resourceGroupName: string, vaultName: string, __top?: Query<int32, '$top'>, api_version: Query<string, 'api-version'>, subscriptionId: string, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: SecretListResult;
    }];
}
