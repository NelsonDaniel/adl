
/**
 *
 * @since v3
 */
export interface deleteFileBody {
    /**
     *
     * @since v3
     */
    committer?: {
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
    sha?: string;
}
