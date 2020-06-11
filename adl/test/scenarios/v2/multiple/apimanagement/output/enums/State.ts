
/**
 * @extensible
 * @description Status of the issue.
 * @since 2019-12-01
 */
export enum State {
    /**
     *
     * @description The issue is proposed.
     */
    proposed = 'proposed',
    /**
     *
     * @description The issue is opened.
     */
    open = 'open',
    /**
     *
     * @description The issue was removed.
     */
    removed = 'removed',
    /**
     *
     * @description The issue is now resolved.
     */
    resolved = 'resolved',
    /**
     *
     * @description The issue was closed.
     */
    closed = 'closed'
}
