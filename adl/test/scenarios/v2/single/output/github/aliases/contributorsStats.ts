export type contributorsStats = Array<{
    /**
     *
     * @since v3
     */
    author?: {
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
     * @description The Total number of commits authored by the contributor.
     * @since v3
     */
    total?: int64;
    /**
     *
     * @since v3
     */
    weeks?: Array<{
        /**
         * @description Number of additions.
         * @since v3
         */
        a?: int64;
        /**
         * @description Number of commits.
         * @since v3
         */
        c?: int64;
        /**
         * @description Number of deletions.
         * @since v3
         */
        d?: int64;
        /**
         * @description Start of the week.
         * @since v3
         */
        w?: string;
    }>;
}>;
