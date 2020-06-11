import { CacheContract } from './CacheContract';
/**
 * @description Paged Caches list representation.
 * @since 2019-12-01
 */
export interface CacheCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<CacheContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
