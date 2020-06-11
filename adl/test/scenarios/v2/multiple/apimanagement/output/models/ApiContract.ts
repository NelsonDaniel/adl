import { ApiContractProperties } from './ApiContractProperties';
import { Resource } from './Resource';
/**
 * @description Api details.
 * @since 2019-12-01
 */
export interface ApiContract extends Resource {
    /**
     * @description Api entity contract properties.
     * @since 2019-12-01
     */
    properties?: ApiContractProperties;
}
