import { TagResourceContract } from './TagResourceContract';
/**
 * @description Paged Tag list representation.
 * @since 2019-12-01
 */
export interface TagResourceCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<TagResourceContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
