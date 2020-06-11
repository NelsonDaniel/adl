
/**
 *
 * @since v3
 */
export interface search_issues_by_keyword {
    /**
     *
     * @since v3
     */
    issues?: Array<{
        /**
         *
         * @since v3
         */
        body?: string;
        /**
         *
         * @since v3
         */
        comments?: int64;
        /**
         *
         * @since v3
         */
        created_at?: string;
        /**
         *
         * @since v3
         */
        gravatar_id?: string;
        /**
         *
         * @since v3
         */
        html_url?: string;
        /**
         *
         * @since v3
         */
        labels?: Array<string>;
        /**
         *
         * @since v3
         */
        number?: int64;
        /**
         *
         * @since v3
         */
        position?: int64;
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
        user?: string;
        /**
         *
         * @since v3
         */
        votes?: int64;
    }>;
}
