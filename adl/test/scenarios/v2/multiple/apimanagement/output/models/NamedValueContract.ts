import { NamedValueContractProperties } from './NamedValueContractProperties';
import { Resource } from './Resource';
/**
 * @description NamedValue details.
 * @since 2019-12-01
 */
export interface NamedValueContract extends Resource {
    /**
     * @description NamedValue entity contract properties.
     * @since 2019-12-01
     */
    properties?: NamedValueContractProperties;
}
