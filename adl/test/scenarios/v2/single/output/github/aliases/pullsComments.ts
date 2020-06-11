export type pullsComments = Array<{
    /**
     *
     * @since v3
     */
    _links?: {
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
        pull_request?: {
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
    body?: string;
    /**
     *
     * @since v3
     */
    commit_id?: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     *
     * @since v3
     */
    path?: string;
    /**
     *
     * @since v3
     */
    position?: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
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
}>;
