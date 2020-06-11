
/**
 *
 * @since v3
 */
export interface feeds {
    /**
     *
     * @since v3
     */
    _links?: {
        /**
         *
         * @since v3
         */
        current_user?: {
            /**
             *
             * @since v3
             */
            href?: string;
            /**
             *
             * @since v3
             */
            type?: string;
        };
        /**
         *
         * @since v3
         */
        current_user_actor?: {
            /**
             *
             * @since v3
             */
            href?: string;
            /**
             *
             * @since v3
             */
            type?: string;
        };
        /**
         *
         * @since v3
         */
        current_user_organization?: {
            /**
             *
             * @since v3
             */
            href?: string;
            /**
             *
             * @since v3
             */
            type?: string;
        };
        /**
         *
         * @since v3
         */
        current_user_public?: {
            /**
             *
             * @since v3
             */
            href?: string;
            /**
             *
             * @since v3
             */
            type?: string;
        };
        /**
         *
         * @since v3
         */
        timeline?: {
            /**
             *
             * @since v3
             */
            href?: string;
            /**
             *
             * @since v3
             */
            type?: string;
        };
        /**
         *
         * @since v3
         */
        user?: {
            /**
             *
             * @since v3
             */
            href?: string;
            /**
             *
             * @since v3
             */
            type?: string;
        };
    };
    /**
     *
     * @since v3
     */
    current_user_actor_url?: string;
    /**
     *
     * @since v3
     */
    current_user_organization_url?: string;
    /**
     *
     * @since v3
     */
    current_user_public?: string;
    /**
     *
     * @since v3
     */
    current_user_url?: string;
    /**
     *
     * @since v3
     */
    timeline_url?: string;
    /**
     *
     * @since v3
     */
    user_url?: string;
}
