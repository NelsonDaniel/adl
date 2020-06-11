import { ProductContract } from './ProductContract';
/**
 * @description Paged Products list representation.
 * @since 2019-12-01
 */
export interface ProductCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<ProductContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
