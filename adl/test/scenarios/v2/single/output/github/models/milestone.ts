import { user } from './user';
/**
 *
 * @since v3
 */
export interface milestone {
    /**
     *
     * @since v3
     */
    closed_issues?: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
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
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    due_on?: string;
    /**
     *
     * @since v3
     */
    number?: int64;
    /**
     *
     * @since v3
     */
    open_issues?: int64;
    /**
     *
     * @since v3
     */
    state?: "open" | "closed";
    /**
     *
     * @since v3
     */
    title?: string;
    /**
     *
     * @since v3
     */
    url?: string;
}
