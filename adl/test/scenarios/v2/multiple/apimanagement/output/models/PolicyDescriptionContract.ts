import { PolicyDescriptionContractProperties } from './PolicyDescriptionContractProperties';
import { Resource } from './Resource';
/**
 * @description Policy description details.
 * @since 2019-12-01
 */
export interface PolicyDescriptionContract extends Resource {
    /**
     * @description Policy description contract properties.
     * @since 2019-12-01
     */
    properties?: PolicyDescriptionContractProperties;
}
