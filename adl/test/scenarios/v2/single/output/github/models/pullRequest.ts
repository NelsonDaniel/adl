import { repo } from './repo';
/**
 *
 * @since v3
 */
export interface pullRequest {
    /**
     *
     * @since v3
     */
    _links?: {
        /**
         *
         * @since v3
         */
        comments?: {
            /**
             *
             * @since v3
             */
            href?: string;
        };
        /**
         *
         * @since v3
         */
        html?: {
            /**
             *
             * @since v3
             */
            href?: string;
        };
        /**
         *
         * @since v3
         */
        review_comments?: {
            /**
             *
             * @since v3
             */
            href?: string;
        };
        /**
         *
         * @since v3
         */
        self?: {
            /**
             *
             * @since v3
             */
            href?: string;
        };
    };
    /**
     *
     * @since v3
     */
    additions?: int64;
    /**
     *
     * @since v3
     */
    base?: {
        /**
         *
         * @since v3
         */
        label?: string;
        /**
         *
         * @since v3
         */
        ref?: string;
        /**
         *
         * @since v3
         */
        repo?: repo;
        /**
         *
         * @since v3
         */
        sha?: string;
        /**
         *
         * @since v3
         */
        user?: {
            /**
             *
             * @since v3
             */
            avatar_url?: string;
            /**
             *
             * @since v3
             */
            gravatar_id?: string;
            /**
             *
             * @since v3
             */
            id?: int64;
            /**
             *
             * @since v3
             */
            login?: string;
            /**
             *
             * @since v3
             */
            url?: string;
        };
    };
    /**
     *
     * @since v3
     */
    body?: string;
    /**
     *
     * @since v3
     */
    changed_files?: int64;
    /**
     *
     * @since v3
     */
    closed_at?: string;
    /**
     *
     * @since v3
     */
    comments?: int64;
    /**
     *
     * @since v3
     */
    commits?: int64;
    /**
     *
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    deletions?: int64;
    /**
     *
     * @since v3
     */
    diff_url?: string;
    /**
     *
     * @since v3
     */
    head?: {
        /**
         *
         * @since v3
         */
        label?: string;
        /**
         *
         * @since v3
         */
        ref?: string;
        /**
         *
         * @since v3
         */
        repo?: repo;
        /**
         *
         * @since v3
         */
        sha?: string;
        /**
         *
         * @since v3
         */
        user?: {
            /**
             *
             * @since v3
             */
            avatar_url?: string;
            /**
             *
             * @since v3
             */
            gravatar_id?: string;
            /**
             *
             * @since v3
             */
            id?: int64;
            /**
             *
             * @since v3
             */
            login?: string;
            /**
             *
             * @since v3
             */
            url?: string;
        };
    };
    /**
     *
     * @since v3
     */
    html_url?: string;
    /**
     *
     * @since v3
     */
    issue_url?: string;
    /**
     *
     * @since v3
     */
    merge_commit_sha?: string;
    /**
     *
     * @since v3
     */
    mergeable?: boolean;
    /**
     *
     * @since v3
     */
    merged?: boolean;
    /**
     *
     * @since v3
     */
    merged_at?: string;
    /**
     *
     * @since v3
     */
    merged_by?: {
        /**
         *
         * @since v3
         */
        avatar_url?: string;
        /**
         *
         * @since v3
         */
        gravatar_id?: string;
        /**
         *
         * @since v3
         */
        id?: int64;
        /**
         *
         * @since v3
         */
        login?: string;
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
    number?: int64;
    /**
     *
     * @since v3
     */
    patch_url?: string;
    /**
     *
     * @since v3
     */
    state?: string;
    /**
     *
     * @since v3
     */
    title?: string;
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
    /**
     *
     * @since v3
     */
    user?: {
        /**
         *
         * @since v3
         */
        avatar_url?: string;
        /**
         *
         * @since v3
         */
        gravatar_id?: string;
        /**
         *
         * @since v3
         */
        id?: int64;
        /**
         *
         * @since v3
         */
        login?: string;
        /**
         *
         * @since v3
         */
        url?: string;
    };
}
