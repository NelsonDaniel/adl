import { ProductEntityBaseParameters } from './ProductEntityBaseParameters';
/**
 * @description Product profile.
 * @since 2019-12-01
 */
export interface ProductTagResourceContractProperties extends ProductEntityBaseParameters {
    /**
     * @description Identifier of the product in the form of /products/{productId}
     * @since 2019-12-01
     */
    id?: string;
    /**
     * @description Product name.
     * @since 2019-12-01
     */
    name: string & MaxLength<300> & MinLength<1>;
}
