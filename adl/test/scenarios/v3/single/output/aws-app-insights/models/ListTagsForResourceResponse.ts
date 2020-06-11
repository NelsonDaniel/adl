import { TagList } from '../aliases/TagList';
/**
 *
 * @since 2018-11-25
 */
export interface ListTagsForResourceResponse {
    /**
     * @description An array that lists all the tags that are associated with the application. Each tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>).
     * @since 2018-11-25
     */
    Tags?: TagList;
}
