import { PrivateEndpointServiceConnectionStatus } from '../enums/PrivateEndpointServiceConnectionStatus';
/**
 * @description An object that represents the approval state of the private link connection.
 * @since 2019-09-01
 */
export interface PrivateLinkServiceConnectionState {
    /**
     * @description Indicates whether the connection has been approved, rejected or removed by the key vault owner.
     * @since 2019-09-01
     */
    status?: PrivateEndpointServiceConnectionStatus;
    /**
     * @description The reason for approval or rejection.
     * @since 2019-09-01
     */
    description?: string;
    /**
     * @description A message indicating if changes on the service provider require any updates on the consumer.
     * @since 2019-09-01
     */
    actionRequired?: string;
}
