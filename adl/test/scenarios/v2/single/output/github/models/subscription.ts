
/**
 *
 * @since v3
 */
export interface subscription {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    ignored?: boolean;
    /**
     *
     * @since v3
     */
    reason?: string;
    /**
     *
     * @since v3
     */
    repository_url?: string;
    /**
     *
     * @since v3
     */
    subscribed?: boolean;
    /**
     *
     * @since v3
     */
    thread_url?: string;
    /**
     *
     * @since v3
     */
    url?: string;
}
