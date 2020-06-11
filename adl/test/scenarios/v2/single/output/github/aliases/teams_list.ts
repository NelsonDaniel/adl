export type teams_list = Array<{
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     *
     * @since v3
     */
    members_count?: int64;
    /**
     *
     * @since v3
     */
    name?: string;
    /**
     *
     * @since v3
     */
    organization?: {
        /**
         *
         * @since v3
         */
        avatar_url?: string;
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
    permission?: string;
    /**
     *
     * @since v3
     */
    repos_count?: int64;
    /**
     *
     * @since v3
     */
    url?: string;
}>;
