
/**
 *
 * @since v3
 */
export interface repoCommitBody {
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
    message: string;
    /**
     *
     * @since v3
     */
    parents: Array<string>;
    /**
     *
     * @since v3
     */
    tree: string;
}
