import { NamedValueCreateContractProperties } from './NamedValueCreateContractProperties';
import { Resource } from './Resource';
/**
 * @description NamedValue details.
 * @since 2019-12-01
 */
export interface NamedValueCreateContract extends Resource {
    /**
     * @description NamedValue entity contract properties for PUT operation.
     * @since 2019-12-01
     */
    properties?: NamedValueCreateContractProperties;
}
