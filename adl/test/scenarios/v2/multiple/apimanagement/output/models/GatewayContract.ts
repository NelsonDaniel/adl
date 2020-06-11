import { GatewayContractProperties } from './GatewayContractProperties';
import { Resource } from './Resource';
/**
 * @description Gateway details.
 * @since 2019-12-01
 */
export interface GatewayContract extends Resource {
    /**
     * @description Gateway details.
     * @since 2019-12-01
     */
    properties?: GatewayContractProperties;
}
