import { GatewayHostnameConfigurationContractProperties } from './GatewayHostnameConfigurationContractProperties';
import { Resource } from './Resource';
/**
 * @description Gateway hostname configuration details.
 * @since 2019-12-01
 */
export interface GatewayHostnameConfigurationContract extends Resource {
    /**
     * @description Gateway hostname configuration details.
     * @since 2019-12-01
     */
    properties?: GatewayHostnameConfigurationContractProperties;
}
