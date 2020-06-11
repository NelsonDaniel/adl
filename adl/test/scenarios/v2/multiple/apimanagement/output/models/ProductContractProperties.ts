import { ProductEntityBaseParameters } from './ProductEntityBaseParameters';
/**
 * @description Product profile.
 * @since 2019-12-01
 */
export interface ProductContractProperties extends ProductEntityBaseParameters {
    /**
     * @description Product name.
     * @since 2019-12-01
     */
    displayName: string & MaxLength<300> & MinLength<1>;
}
