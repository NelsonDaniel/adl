import { user } from '../models/user';
export type comments = Array<{
    /**
     *
     * @since v3
     */
    body?: string;
    /**
     * @description ISO 8601.
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    id?: int64;
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
}>;
