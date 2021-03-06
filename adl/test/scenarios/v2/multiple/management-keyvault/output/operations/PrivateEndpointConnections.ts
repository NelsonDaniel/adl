import { SubscriptionIdParameter } from "../aliases/SubscriptionIdParameter";
import { ResourceGroupName } from "../aliases/ResourceGroupName";
import { VaultName } from "../aliases/VaultName";
import { PrivateEndpointConnectionName } from "../aliases/PrivateEndpointConnectionName";
import { ApiVersionParameter } from "../aliases/ApiVersionParameter";
import { PrivateEndpointConnection } from "../models/PrivateEndpointConnection";
import { CloudError } from "../models/CloudError";
export interface PrivateEndpointConnections {
    /**
     * @description Gets the specified private endpoint connection associated with the key vault.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}
     * @tag PrivateEndpointConnections
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param resourceGroupName - Name of the resource group that contains the key vault.
     * @param vaultName - The name of the key vault.
     * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the key vault.
     * @param api_version - Client Api Version.
     * @return 200 - Private endpoint connection successfully returned.
     * @return default - Error response describing why the operation failed.
     */
    Get(subscriptionId: SubscriptionIdParameter, resourceGroupName: ResourceGroupName, vaultName: VaultName, privateEndpointConnectionName: PrivateEndpointConnectionName, api_version: ApiVersionParameter): [(code: 200, mediaType: "application/json") => {
        body: PrivateEndpointConnection;
    }, (mediaType: "application/json") => {
        body: CloudError;
        isException: true;
    }];
    /**
     * @description Updates the specified private endpoint connection associated with the key vault.
     * @since 2019-09-01
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}
     * @tag PrivateEndpointConnections
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param resourceGroupName - Name of the resource group that contains the key vault.
     * @param vaultName - The name of the key vault.
     * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the key vault.
     * @param api_version - Client Api Version.
     * @param properties - The intended state of private endpoint connection.
     * @return 200 - The state of private endpoint connection was updated successfully.
     * @return default - Error response describing why the operation failed.
     */
    Put(subscriptionId: SubscriptionIdParameter, resourceGroupName: ResourceGroupName, vaultName: VaultName, privateEndpointConnectionName: PrivateEndpointConnectionName, api_version: ApiVersionParameter, properties: Body<PrivateEndpointConnection, "application/json">): [(code: 200, mediaType: "application/json") => {
        body: PrivateEndpointConnection;
        headers: [Header<int64, "Retry-After">, Header<string, "Azure-AsyncOperation">];
    }, (mediaType: "application/json") => {
        body: CloudError;
        isException: true;
    }];
    /**
     * @description Deletes the specified private endpoint connection associated with the key vault.
     * @since 2019-09-01
     * @http DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}
     * @tag PrivateEndpointConnections
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param resourceGroupName - Name of the resource group that contains the key vault.
     * @param vaultName - The name of the key vault.
     * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the key vault.
     * @param api_version - Client Api Version.
     * @return 200 - The private endpoint connection was successfully deleted.
     * @return 202 - The private endpoint connection is being deleted.
     * @return 204 - The private endpoint connection does not exist.
     * @return default - Error response describing why the operation failed.
     */
    Delete(subscriptionId: SubscriptionIdParameter, resourceGroupName: ResourceGroupName, vaultName: VaultName, privateEndpointConnectionName: PrivateEndpointConnectionName, api_version: ApiVersionParameter): [(code: 200, mediaType: "application/json") => {
        body: PrivateEndpointConnection;
    }, (code: 202, mediaType: "application/json") => {
        headers: [Header<int64, "Retry-After">, Header<string, "Location">];
    }, (code: 204, mediaType: "application/json") => {}, (mediaType: "application/json") => {
        body: CloudError;
        isException: true;
    }];
}
