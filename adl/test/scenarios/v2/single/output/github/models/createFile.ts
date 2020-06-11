
/**
 *
 * @since v3
 */
export interface createFile {
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
        html_url?: string;
        /**
         *
         * @since v3
         */
        message?: string;
        /**
         *
         * @since v3
         */
        parents?: Array<{
            /**
             *
             * @since v3
             */
            html_url?: string;
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
    content?: {
        /**
         *
         * @since v3
         */
        _links?: {
            /**
             *
             * @since v3
             */
            git?: string;
            /**
             *
             * @since v3
             */
            html?: string;
            /**
             *
             * @since v3
             */
            self?: string;
        };
        /**
         *
         * @since v3
         */
        git_url?: string;
        /**
         *
         * @since v3
         */
        html_url?: string;
        /**
         *
         * @since v3
         */
        name?: string;
        /**
         *
         * @since v3
         */
        path?: string;
        /**
         *
         * @since v3
         */
        sha?: string;
        /**
         *
         * @since v3
         */
        size?: int64;
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
}
