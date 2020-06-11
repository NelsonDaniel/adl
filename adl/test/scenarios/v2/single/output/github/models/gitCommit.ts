
/**
 *
 * @since v3
 */
export interface gitCommit {
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
    message?: string;
    /**
     *
     * @since v3
     */
    parents?: string;
    /**
     *
     * @since v3
     */
    tree?: string;
}
