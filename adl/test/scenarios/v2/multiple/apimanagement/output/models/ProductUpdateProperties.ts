import { ProductEntityBaseParameters } from './ProductEntityBaseParameters';
/**
 * @description Parameters supplied to the Update Product operation.
 * @since 2019-12-01
 */
export interface ProductUpdateProperties extends ProductEntityBaseParameters {
    /**
     * @description Product name.
     * @since 2019-12-01
     */
    displayName?: string & MaxLength<300> & MinLength<1>;
}
