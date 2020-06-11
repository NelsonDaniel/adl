
/**
 *
 * @since v3
 */
export interface tree {
    /**
     *
     * @since v3
     */
    sha?: string;
    /**
     *
     * @since v3
     */
    tree?: Array<{
        /**
         * @description One of 100644 for file (blob), 100755 for executable (blob), 040000 for subdirectory (tree), 160000 for submodule (commit) or 120000 for a blob that specifies the path of a symlink.
         * @since v3
         */
        mode?: "100644" | "100755" | "040000" | "160000" | "120000";
        /**
         *
         * @since v3
         */
        path?: string;
        /**
         * @description SHA1 checksum ID of the object in the tree.
         * @since v3
         */
        sha?: string;
        /**
         *
         * @since v3
         */
        size?: int64;
        /**
         *
         * @since v3
         */
        type?: "blob" | "tree" | "commit";
        /**
         *
         * @since v3
         */
        url?: string;
    }>;
    /**
     *
     * @since v3
     */
    url?: string;
}
