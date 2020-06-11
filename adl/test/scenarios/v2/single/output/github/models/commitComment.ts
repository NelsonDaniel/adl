import { user } from './user';
/**
 *
 * @since v3
 */
export interface commitComment {
    /**
     *
     * @since v3
     */
    body?: string;
    /**
     *
     * @since v3
     */
    commit_id?: string;
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
     *
     * @since v3
     */
    line?: int64;
    /**
     *
     * @since v3
     */
    path?: string;
    /**
     *
     * @since v3
     */
    position?: int64;
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
