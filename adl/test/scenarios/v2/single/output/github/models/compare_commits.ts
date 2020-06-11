import { user } from './user';
/**
 *
 * @since v3
 */
export interface compare_commits {
    /**
     *
     * @since v3
     */
    ahead_by?: int64;
    /**
     *
     * @since v3
     */
    base_commit?: {
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
                 *
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
                 *
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
        url?: string;
    };
    /**
     *
     * @since v3
     */
    behind_by?: int64;
    /**
     *
     * @since v3
     */
    commits?: Array<{
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
                 *
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
                 *
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
        url?: string;
    }>;
    /**
     *
     * @since v3
     */
    diff_url?: string;
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
        contents_url?: string;
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
        sha?: string;
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
    html_url?: string;
    /**
     *
     * @since v3
     */
    patch_url?: string;
    /**
     *
     * @since v3
     */
    permalink_url?: string;
    /**
     *
     * @since v3
     */
    status?: string;
    /**
     *
     * @since v3
     */
    total_commits?: int64;
    /**
     *
     * @since v3
     */
    url?: string;
}
