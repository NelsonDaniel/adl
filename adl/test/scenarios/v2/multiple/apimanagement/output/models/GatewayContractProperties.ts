import { ResourceLocationDataContract } from './ResourceLocationDataContract';
/**
 * @description Properties of the Gateway contract.
 * @since 2019-12-01
 */
export interface GatewayContractProperties {
    /**
     * @description Gateway location.
     * @since 2019-12-01
     */
    locationData?: ResourceLocationDataContract;
    /**
     * @description Gateway description
     * @since 2019-12-01
     */
    description?: string & MaxLength<1000>;
}
