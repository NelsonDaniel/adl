export interface Vaults {
    /**
     * @description Gets the specified Azure key vault.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param vaultName - The name of the vault.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Retrieved vault
     */
    Get(resourceGroupName: Http.Path<string>, vaultName: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, body?: Http.Body<file, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'>;
    /**
     * @description Create or update a key vault in the specified subscription.
     * @since 2019-09-01
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the server belongs.
     * @param vaultName - Name of the vault
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param parameters - Parameters to create or update the vault
     * @return 200 - Created or updated vault
     * @return 201 - Created or updated vault
     */
    CreateOrUpdate(resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<'^[a-zA-Z0-9-]{3,24}$'>>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, parameters: Http.Body<VaultCreateOrUpdateParameters, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'201', [object, Object], 'application/json'>;
    /**
     * @description Deletes the specified Azure key vault.
     * @since 2019-09-01
     * @http DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param vaultName - The name of the vault to delete
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - OK Response.
     * @return 204 - No Content.
     */
    Delete(resourceGroupName: Http.Path<string>, vaultName: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, body?: Http.Body<file, 'application/json'>): Http.Response<'200', none, 'application/json'> | Http.Response<'204', none, 'application/json'>;
    /**
     * @description Update a key vault in the specified subscription.
     * @since 2019-09-01
     * @http PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the server belongs.
     * @param vaultName - Name of the vault
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param parameters - Parameters to patch the vault
     * @return 200 - Patched vault
     * @return 201 - Patched vault
     */
    Update(resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<'^[a-zA-Z0-9-]{3,24}$'>>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, parameters: Http.Body<VaultPatchParameters, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'201', [object, Object], 'application/json'>;
    /**
     * @description Update access policies in a key vault in the specified subscription.
     * @since 2019-09-01
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/accessPolicies/{operationKind}
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param vaultName - Name of the vault
     * @param operationKind - Name of the operation
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param parameters - Access policy to merge into the vault
     * @return 200 - The updated access policies
     * @return 201 - The updated access policies
     */
    UpdateAccessPolicy(resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<'^[a-zA-Z0-9-]{3,24}$'>>, operationKind: Http.Path<AccessPolicyUpdateKind>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, parameters: Http.Body<VaultAccessPolicyParameters, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'201', [object, Object], 'application/json'>;
    /**
     * @description The List operation gets information about the vaults associated with the subscription and within the specified resource group.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param __top - Maximum number of results to return.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Get information about all key vaults in the specified resource group.
     */
    ListByResourceGroup(resourceGroupName: Http.Path<string>, __top?: Http.Query<int32, '$top'>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, body?: Http.Body<file, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'>;
    /**
     * @description The List operation gets information about the vaults associated with the subscription.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/vaults
     * @tag Vaults
     * @param __top - Maximum number of results to return.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Get information about all key vaults in the specified subscription.
     */
    ListBySubscription(__top?: Http.Query<int32, '$top'>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, body?: Http.Body<file, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'>;
    /**
     * @description Gets information about the deleted vaults in a subscription.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedVaults
     * @tag Vaults
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Retrieved information about all deleted key vaults in a subscription.
     */
    ListDeleted(api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, body?: Http.Body<file, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'>;
    /**
     * @description Gets the deleted Azure key vault.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}
     * @tag Vaults
     * @param vaultName - The name of the vault.
     * @param location - The location of the deleted vault.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Retrieved information about the deleted vault.
     */
    GetDeleted(vaultName: Http.Path<string>, location: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, body?: Http.Body<file, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'>;
    /**
     * @description Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     * @since 2019-09-01
     * @http POST /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}/purge
     * @tag Vaults
     * @param vaultName - The name of the soft-deleted vault.
     * @param location - The location of the soft-deleted vault.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - The vault is purged.
     * @return 202 - Vault is being purged.
     */
    PurgeDeleted(vaultName: Http.Path<string>, location: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, body?: Http.Body<file, 'application/json'>): Http.Response<'200', none, 'application/json'> | Http.Response<'202', none, 'application/json'>;
    /**
     * @description The List operation gets information about the vaults associated with the subscription.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/resources
     * @tag Vaults
     * @param __filter - The filter to apply on the operation.
     * @param __top - Maximum number of results to return.
     * @param api_version - Azure Resource Manager Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Get information about all key vaults in the subscription.
     */
    List(__filter: Http.Query<"resourceType eq 'Microsoft.KeyVault/vaults'", '$filter'>, __top?: Http.Query<int32, '$top'>, api_version: Http.Query<"2015-11-01", 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', [object, Object], 'application/json'>;
    /**
     * @description Checks that the vault name is valid and is not already in use.
     * @since 2019-09-01
     * @http POST /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/checkNameAvailability
     * @tag Vaults
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param vaultName - The name of the vault.
     * @return 200 - OK -- Operation to check the vault name availability was successful.
     */
    CheckNameAvailability(api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, vaultName: Http.Body<VaultCheckNameAvailabilityParameters, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'>;
}
