import { ApiVersionSetContract } from './ApiVersionSetContract';
/**
 * @description Paged Api Version Set list representation.
 * @since 2019-12-01
 */
export interface ApiVersionSetCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<ApiVersionSetContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
