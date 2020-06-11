import { NamedValueContract } from './NamedValueContract';
/**
 * @description Paged NamedValue list representation.
 * @since 2019-12-01
 */
export interface NamedValueCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<NamedValueContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
