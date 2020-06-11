
/**
 *
 * @since v3
 */
export interface deployment {
    /**
     *
     * @since v3
     */
    description?: string;
    /**
     *
     * @since v3
     */
    payload?: {
        /**
         *
         * @since v3
         */
        deploy_user?: string;
        /**
         *
         * @since v3
         */
        environment?: string;
        /**
         *
         * @since v3
         */
        room_id?: double;
    };
    /**
     *
     * @since v3
     */
    ref?: string;
}
