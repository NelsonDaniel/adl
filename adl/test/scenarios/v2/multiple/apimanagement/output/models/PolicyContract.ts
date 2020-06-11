import { PolicyContractProperties } from './PolicyContractProperties';
import { Resource } from './Resource';
/**
 * @description Policy Contract details.
 * @since 2019-12-01
 */
export interface PolicyContract extends Resource {
    /**
     * @description Properties of the Policy.
     * @since 2019-12-01
     */
    properties?: PolicyContractProperties;
}
