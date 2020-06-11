import { ApiReleaseContractProperties } from './ApiReleaseContractProperties';
import { Resource } from './Resource';
/**
 * @description ApiRelease details.
 * @since 2019-12-01
 */
export interface ApiReleaseContract extends Resource {
    /**
     * @description ApiRelease entity contract properties.
     * @since 2019-12-01
     */
    properties?: ApiReleaseContractProperties;
}
