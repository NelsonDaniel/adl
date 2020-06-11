import { ApiVersionSetContractProperties } from './ApiVersionSetContractProperties';
import { Resource } from './Resource';
/**
 * @description Api Version Set Contract details.
 * @since 2019-12-01
 */
export interface ApiVersionSetContract extends Resource {
    /**
     * @description Api VersionSet contract properties.
     * @since 2019-12-01
     */
    properties?: ApiVersionSetContractProperties;
}
