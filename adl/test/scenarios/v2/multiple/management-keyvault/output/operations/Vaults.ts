import { schema } from '../aliases/schema';
export interface Vaults {
    /**
     * @description Gets the specified Azure key vault.
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @since 2019-09-01
     */
    Get(body?: Http.Body<file, 'application/json'>, resourceGroupName: Http.Path<string>, vaultName: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description Create or update a key vault in the specified subscription.
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @since 2019-09-01
     */
    CreateOrUpdate(resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<"^[a-zA-Z0-9-]{3,24}$">>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, parameters: Http.Body<schema, 'application/json'>): Http.Response<'201', schema, 'application/json'>;
    /**
     * @description Deletes the specified Azure key vault.
     * @http DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @since 2019-09-01
     */
    Delete(body?: Http.Body<file, 'application/json'>, resourceGroupName: Http.Path<string>, vaultName: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'204', any, 'application/json'>;
    /**
     * @description Update a key vault in the specified subscription.
     * @http PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @since 2019-09-01
     */
    Update(resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<"^[a-zA-Z0-9-]{3,24}$">>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, parameters: Http.Body<schema, 'application/json'>): Http.Response<'201', schema, 'application/json'>;
    /**
     * @description Update access policies in a key vault in the specified subscription.
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/accessPolicies/{operationKind}
     * @tag Vaults
     * @since 2019-09-01
     */
    UpdateAccessPolicy(resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<"^[a-zA-Z0-9-]{3,24}$">>, operationKind: Http.Path<AccessPolicyUpdateKind>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, parameters: Http.Body<schema, 'application/json'>): Http.Response<'201', schema, 'application/json'>;
    /**
     * @description The List operation gets information about the vaults associated with the subscription and within the specified resource group.
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults
     * @tag Vaults
     * @since 2019-09-01
     */
    ListByResourceGroup(body?: Http.Body<file, 'application/json'>, resourceGroupName: Http.Path<string>, __top?: Http.Query<int32, '$top'>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description The List operation gets information about the vaults associated with the subscription.
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/vaults
     * @tag Vaults
     * @since 2019-09-01
     */
    ListBySubscription(body?: Http.Body<file, 'application/json'>, __top?: Http.Query<int32, '$top'>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description Gets information about the deleted vaults in a subscription.
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedVaults
     * @tag Vaults
     * @since 2019-09-01
     */
    ListDeleted(body?: Http.Body<file, 'application/json'>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description Gets the deleted Azure key vault.
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}
     * @tag Vaults
     * @since 2019-09-01
     */
    GetDeleted(body?: Http.Body<file, 'application/json'>, vaultName: Http.Path<string>, location: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     * @http POST /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}/purge
     * @tag Vaults
     * @since 2019-09-01
     */
    PurgeDeleted(body?: Http.Body<file, 'application/json'>, vaultName: Http.Path<string>, location: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'202', any, 'application/json'>;
    /**
     * @description The List operation gets information about the vaults associated with the subscription.
     * @http GET /subscriptions/{subscriptionId}/resources
     * @tag Vaults
     * @since 2019-09-01
     */
    List(__filter: Http.Query<"resourceType eq 'Microsoft.KeyVault/vaults'", '$filter'>, __top?: Http.Query<int32, '$top'>, api_version: Http.Query<"2015-11-01", 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description Checks that the vault name is valid and is not already in use.
     * @http POST /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/checkNameAvailability
     * @tag Vaults
     * @since 2019-09-01
     */
    CheckNameAvailability(api_version: Http.Query<string, 'api-version'>, vaultName: Http.Body<schema, 'application/json'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
}
