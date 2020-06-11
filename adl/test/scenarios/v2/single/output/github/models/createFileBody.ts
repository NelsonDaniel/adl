
/**
 *
 * @since v3
 */
export interface createFileBody {
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
    content?: string;
    /**
     *
     * @since v3
     */
    message?: string;
}
