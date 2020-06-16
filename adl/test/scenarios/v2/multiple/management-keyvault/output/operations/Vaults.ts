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
     * @return 200|application/json - Retrieved vault
     */
    Get(resourceGroupName: string, vaultName: string, api_version: Query<string, 'api-version'>, subscriptionId: string, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: Vault;
    }];
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
     * @return 200|application/json - Created or updated vault
     * @return 201|application/json - Created or updated vault
     */
    CreateOrUpdate(resourceGroupName: string, vaultName: string & RegularExpression<'^[a-zA-Z0-9-]{3,24}$'>, api_version: Query<string, 'api-version'>, subscriptionId: string, parameters: Body<VaultCreateOrUpdateParameters, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: Vault;
    }, (code: 201, mediaType: "application/json") => {
        body: Vault;
    }];
    /**
     * @description Deletes the specified Azure key vault.
     * @since 2019-09-01
     * @http DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param vaultName - The name of the vault to delete
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200|application/json - OK Response.
     * @return 204|application/json - No Content.
     */
    Delete(resourceGroupName: string, vaultName: string, api_version: Query<string, 'api-version'>, subscriptionId: string, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {}, (code: 204, mediaType: "application/json") => {}];
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
     * @return 200|application/json - Patched vault
     * @return 201|application/json - Patched vault
     */
    Update(resourceGroupName: string, vaultName: string & RegularExpression<'^[a-zA-Z0-9-]{3,24}$'>, api_version: Query<string, 'api-version'>, subscriptionId: string, parameters: Body<VaultPatchParameters, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: Vault;
    }, (code: 201, mediaType: "application/json") => {
        body: Vault;
    }];
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
     * @return 200|application/json - The updated access policies
     * @return 201|application/json - The updated access policies
     */
    UpdateAccessPolicy(resourceGroupName: string, vaultName: string & RegularExpression<'^[a-zA-Z0-9-]{3,24}$'>, operationKind: AccessPolicyUpdateKind, api_version: Query<string, 'api-version'>, subscriptionId: string, parameters: Body<VaultAccessPolicyParameters, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: VaultAccessPolicyParameters;
    }, (code: 201, mediaType: "application/json") => {
        body: VaultAccessPolicyParameters;
    }];
    /**
     * @description The List operation gets information about the vaults associated with the subscription and within the specified resource group.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param __top - Maximum number of results to return.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200|application/json - Get information about all key vaults in the specified resource group.
     */
    ListByResourceGroup(resourceGroupName: string, __top?: Query<int32, '$top'>, api_version: Query<string, 'api-version'>, subscriptionId: string, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: VaultListResult;
    }];
    /**
     * @description The List operation gets information about the vaults associated with the subscription.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/vaults
     * @tag Vaults
     * @param __top - Maximum number of results to return.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200|application/json - Get information about all key vaults in the specified subscription.
     */
    ListBySubscription(__top?: Query<int32, '$top'>, api_version: Query<string, 'api-version'>, subscriptionId: string, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: VaultListResult;
    }];
    /**
     * @description Gets information about the deleted vaults in a subscription.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedVaults
     * @tag Vaults
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200|application/json - Retrieved information about all deleted key vaults in a subscription.
     */
    ListDeleted(api_version: Query<string, 'api-version'>, subscriptionId: string, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DeletedVaultListResult;
    }];
    /**
     * @description Gets the deleted Azure key vault.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}
     * @tag Vaults
     * @param vaultName - The name of the vault.
     * @param location - The location of the deleted vault.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200|application/json - Retrieved information about the deleted vault.
     */
    GetDeleted(vaultName: string, location: string, api_version: Query<string, 'api-version'>, subscriptionId: string, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DeletedVault;
    }];
    /**
     * @description Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     * @since 2019-09-01
     * @http POST /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}/purge
     * @tag Vaults
     * @param vaultName - The name of the soft-deleted vault.
     * @param location - The location of the soft-deleted vault.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200|application/json - The vault is purged.
     * @return 202|application/json - Vault is being purged.
     */
    PurgeDeleted(vaultName: string, location: string, api_version: Query<string, 'api-version'>, subscriptionId: string, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {}, (code: 202, mediaType: "application/json") => {}];
    /**
     * @description The List operation gets information about the vaults associated with the subscription.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/resources
     * @tag Vaults
     * @param __filter - The filter to apply on the operation.
     * @param __top - Maximum number of results to return.
     * @param api_version - Azure Resource Manager Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200|application/json - Get information about all key vaults in the subscription.
     */
    List(__filter: Query<"resourceType eq 'Microsoft.KeyVault/vaults'", '$filter'>, __top?: Query<int32, '$top'>, api_version: Query<"2015-11-01", 'api-version'>, subscriptionId: string): [(code: 200, mediaType: "application/json") => {
        body: ResourceListResult;
    }];
    /**
     * @description Checks that the vault name is valid and is not already in use.
     * @since 2019-09-01
     * @http POST /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/checkNameAvailability
     * @tag Vaults
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param vaultName - The name of the vault.
     * @return 200|application/json - OK -- Operation to check the vault name availability was successful.
     */
    CheckNameAvailability(api_version: Query<string, 'api-version'>, subscriptionId: string, vaultName: Body<VaultCheckNameAvailabilityParameters, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: CheckNameAvailabilityResult;
    }];
}
