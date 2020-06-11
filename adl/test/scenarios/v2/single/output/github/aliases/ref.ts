export type ref = Array<{
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    creator?: {
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
    description?: string;
    /**
     *
     * @since v3
     */
    id?: int64;
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
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    updated_at?: string;
    /**
     *
     * @since v3
     */
    url?: string;
}>;
