import { user } from './user';
/**
 *
 * @since v3
 */
export interface gist {
    /**
     *
     * @since v3
     */
    comments?: int64;
    /**
     *
     * @since v3
     */
    comments_url?: string;
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    description?: string;
    /**
     *
     * @since v3
     */
    files?: {
        /**
         *
         * @since v3
         */
        'ring.erl'?: {
            /**
             *
             * @since v3
             */
            filename?: string;
            /**
             *
             * @since v3
             */
            raw_url?: string;
            /**
             *
             * @since v3
             */
            size?: int64;
        };
    };
    /**
     *
     * @since v3
     */
    forks?: Array<{
        /**
         * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
         * @since v3
         */
        created_at?: string;
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
    /**
     *
     * @since v3
     */
    git_pull_url?: string;
    /**
     *
     * @since v3
     */
    git_push_url?: string;
    /**
     *
     * @since v3
     */
    history?: Array<{
        /**
         *
         * @since v3
         */
        change_status?: {
            /**
             *
             * @since v3
             */
            additions?: int64;
            /**
             *
             * @since v3
             */
            deletions?: int64;
            /**
             *
             * @since v3
             */
            total?: int64;
        };
        /**
         * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
         * @since v3
         */
        committed_at?: string;
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
        /**
         *
         * @since v3
         */
        version?: string;
    }>;
    /**
     *
     * @since v3
     */
    html_url?: string;
    /**
     *
     * @since v3
     */
    id?: string;
    /**
     *
     * @since v3
     */
    public?: boolean;
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
