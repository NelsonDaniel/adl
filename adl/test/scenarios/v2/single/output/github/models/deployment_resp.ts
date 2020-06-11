import { user } from './user';
/**
 *
 * @since v3
 */
export interface deployment_resp {
    /**
     *
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    creator?: user;
    /**
     *
     * @since v3
     */
    description?: string;
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     *
     * @since v3
     */
    payload?: string;
    /**
     *
     * @since v3
     */
    sha?: string;
    /**
     *
     * @since v3
     */
    statuses_url?: string;
    /**
     *
     * @since v3
     */
    updated_at?: string;
    /**
     *
     * @since v3
     */
    url?: string;
}
