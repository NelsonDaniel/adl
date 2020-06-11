import { ProvisioningState } from '../enums/ProvisioningState';
import { Resource } from './Resource';
/**
 * @description Association entity details.
 * @since 2019-12-01
 */
export interface AssociationContract extends Resource {
    /**
     * @description Association entity contract properties.
     * @since 2019-12-01
     */
    properties?: {
        /**
         * @description Provisioning state.
         * @since 2019-12-01
         */
        provisioningState?: ProvisioningState;
    };
}
