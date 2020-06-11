import { user } from '../models/user';
export type deployment_statuses = Array<{
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
    state?: string;
    /**
     *
     * @since v3
     */
    target_url?: string;
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
}>;
