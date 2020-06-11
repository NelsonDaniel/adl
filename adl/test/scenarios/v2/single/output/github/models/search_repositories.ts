import { repo } from './repo';
/**
 *
 * @since v3
 */
export interface search_repositories {
    /**
     *
     * @since v3
     */
    items?: Array<repo>;
    /**
     *
     * @since v3
     */
    total_count?: int64;
}
