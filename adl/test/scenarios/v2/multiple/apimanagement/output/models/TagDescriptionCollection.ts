import { TagDescriptionContract } from './TagDescriptionContract';
/**
 * @description Paged TagDescription list representation.
 * @since 2019-12-01
 */
export interface TagDescriptionCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<TagDescriptionContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
