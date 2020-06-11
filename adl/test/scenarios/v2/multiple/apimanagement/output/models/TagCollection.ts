import { TagContract } from './TagContract';
/**
 * @description Paged Tag list representation.
 * @since 2019-12-01
 */
export interface TagCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<TagContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
