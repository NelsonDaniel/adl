import { Resource } from './Resource';
/**
 * @description List of vault resources.
 * @since 2019-09-01
 */
export interface ResourceListResult {
    /**
     * @description The list of vault resources.
     * @since 2019-09-01
     */
    value?: Array<Resource>;
    /**
     * @description The URL to get the next set of vault resources.
     * @since 2019-09-01
     */
    nextLink?: string;
}
