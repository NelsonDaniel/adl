
/**
 *
 * @since v3
 */
export interface patchGist {
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
        'delete_this_file.txt'?: string;
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
        /**
         *
         * @since v3
         */
        'new_file.txt'?: {
            /**
             *
             * @since v3
             */
            content?: string;
        };
        /**
         *
         * @since v3
         */
        'old_name.txt'?: {
            /**
             *
             * @since v3
             */
            content?: string;
            /**
             *
             * @since v3
             */
            filename?: string;
        };
    };
}
