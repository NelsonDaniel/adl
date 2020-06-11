import { user } from './user';
/**
 *
 * @since v3
 */
export interface issuesComment {
    /**
     *
     * @since v3
     */
    body?: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    html_url?: string;
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    updated_at?: string;
    /**
     *
     * @since v3
     */
    url?: string;
    /**
     *
     * @since v3
     */
    user?: user;
}
