import { PrivateEndpoint } from './PrivateEndpoint';
import { PrivateLinkServiceConnectionState } from './PrivateLinkServiceConnectionState';
import { PrivateEndpointConnectionProvisioningState } from '../enums/PrivateEndpointConnectionProvisioningState';
/**
 * @description Properties of the private endpoint connection resource.
 * @since 2019-09-01
 */
export interface PrivateEndpointConnectionProperties {
    /**
     * @description Properties of the private endpoint object.
     * @since 2019-09-01
     */
    privateEndpoint?: PrivateEndpoint;
    /**
     * @description Approval state of the private link connection.
     * @since 2019-09-01
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
    /**
     * @description Provisioning state of the private endpoint connection.
     * @since 2019-09-01
     */
    provisioningState?: PrivateEndpointConnectionProvisioningState;
}
