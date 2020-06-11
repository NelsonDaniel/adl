import { ProductContractProperties } from './ProductContractProperties';
import { Resource } from './Resource';
/**
 * @description Product details.
 * @since 2019-12-01
 */
export interface ProductContract extends Resource {
    /**
     * @description Product entity contract properties.
     * @since 2019-12-01
     */
    properties?: ProductContractProperties;
}
