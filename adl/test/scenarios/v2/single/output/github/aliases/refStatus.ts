export type refStatus = Array<{
    /**
     *
     * @since v3
     */
    commit_url?: string;
    /**
     *
     * @since v3
     */
    name?: string;
    /**
     *
     * @since v3
     */
    repository_url?: string;
    /**
     *
     * @since v3
     */
    sha?: string;
    /**
     *
     * @since v3
     */
    state?: string;
    /**
     *
     * @since v3
     */
    statuses?: Array<{
        /**
         *
         * @since v3
         */
        context?: string;
        /**
         *
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
        id?: double;
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
}>;
