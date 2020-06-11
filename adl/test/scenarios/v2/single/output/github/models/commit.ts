import { user } from './user';
/**
 *
 * @since v3
 */
export interface commit {
    /**
     *
     * @since v3
     */
    author?: user;
    /**
     *
     * @since v3
     */
    commit?: {
        /**
         *
         * @since v3
         */
        author?: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             * @since v3
             */
            date?: string;
            /**
             *
             * @since v3
             */
            email?: string;
            /**
             *
             * @since v3
             */
            name?: string;
        };
        /**
         *
         * @since v3
         */
        committer?: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             * @since v3
             */
            date?: string;
            /**
             *
             * @since v3
             */
            email?: string;
            /**
             *
             * @since v3
             */
            name?: string;
        };
        /**
         *
         * @since v3
         */
        message?: string;
        /**
         *
         * @since v3
         */
        tree?: {
            /**
             *
             * @since v3
             */
            sha?: string;
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
        url?: string;
    };
    /**
     *
     * @since v3
     */
    committer?: user;
    /**
     *
     * @since v3
     */
    files?: Array<{
        /**
         *
         * @since v3
         */
        additions?: int64;
        /**
         *
         * @since v3
         */
        blob_url?: string;
        /**
         *
         * @since v3
         */
        changes?: int64;
        /**
         *
         * @since v3
         */
        deletions?: int64;
        /**
         *
         * @since v3
         */
        filename?: string;
        /**
         *
         * @since v3
         */
        patch?: string;
        /**
         *
         * @since v3
         */
        raw_url?: string;
        /**
         *
         * @since v3
         */
        status?: string;
    }>;
    /**
     *
     * @since v3
     */
    parents?: Array<{
        /**
         *
         * @since v3
         */
        sha?: string;
        /**
         *
         * @since v3
         */
        url?: string;
    }>;
    /**
     *
     * @since v3
     */
    sha?: string;
    /**
     *
     * @since v3
     */
    stats?: {
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
     *
     * @since v3
     */
    url?: string;
}
