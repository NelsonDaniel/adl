
/**
 *
 * @since v3
 */
export interface commitCommentBody {
    /**
     *
     * @since v3
     */
    body: string;
    /**
     * @description Deprecated - Use position parameter instead.
     * @since v3
     */
    line?: string;
    /**
     * @description Line number in the file to comment on. Defaults to null.
     * @since v3
     */
    number?: string;
    /**
     * @description Relative path of the file to comment on.
     * @since v3
     */
    path?: string;
    /**
     * @description Line index in the diff to comment on.
     * @since v3
     */
    position?: int64;
    /**
     * @description SHA of the commit to comment on.
     * @since v3
     */
    sha: string;
}
