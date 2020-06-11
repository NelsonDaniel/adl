
/**
 *
 * @since v3
 */
export interface rate_limit {
    /**
     *
     * @since v3
     */
    rate?: {
        /**
         *
         * @since v3
         */
        limit?: int64;
        /**
         *
         * @since v3
         */
        remaining?: int64;
        /**
         *
         * @since v3
         */
        reset?: int64;
    };
}
