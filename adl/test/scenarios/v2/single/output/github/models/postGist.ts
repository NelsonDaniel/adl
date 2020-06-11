
/**
 *
 * @since v3
 */
export interface postGist {
    /**
     *
     * @since v3
     */
    description?: string;
    /**
     *
     * @since v3
     */
    files?: {
        /**
         *
         * @since v3
         */
        'file1.txt'?: {
            /**
             *
             * @since v3
             */
            content?: string;
        };
    };
    /**
     *
     * @since v3
     */
    public?: boolean;
}
