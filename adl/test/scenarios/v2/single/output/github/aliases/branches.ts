export type branches = Array<{
    /**
     *
     * @since v3
     */
    commit?: {
        /**
         *
         * @since v3
         */
        sha?: string;
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
    name?: string;
}>;
