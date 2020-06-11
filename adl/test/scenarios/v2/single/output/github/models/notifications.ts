import { actor } from './actor';
/**
 *
 * @since v3
 */
export interface notifications {
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     *
     * @since v3
     */
    last_read_at?: string;
    /**
     *
     * @since v3
     */
    reason?: string;
    /**
     *
     * @since v3
     */
    repository?: {
        /**
         *
         * @since v3
         */
        description?: string;
        /**
         *
         * @since v3
         */
        fork?: boolean;
        /**
         *
         * @since v3
         */
        full_name?: string;
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
        name?: string;
        /**
         *
         * @since v3
         */
        owner?: actor;
        /**
         *
         * @since v3
         */
        private?: boolean;
        /**
         *
         * @since v3
         */
        url?: string;
    };
    /**
     *
     * @since v3
     */
    subject?: {
        /**
         *
         * @since v3
         */
        latest_comment_url?: string;
        /**
         *
         * @since v3
         */
        title?: string;
        /**
         *
         * @since v3
         */
        type?: string;
        /**
         *
         * @since v3
         */
        url?: string;
    };
    /**
     *
     * @since v3
     */
    unread?: boolean;
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
