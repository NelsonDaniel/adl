export type hook = Array<{
    /**
     *
     * @since v3
     */
    active?: boolean;
    /**
     *
     * @since v3
     */
    config?: {
        /**
         *
         * @since v3
         */
        content_type?: string;
        /**
         *
         * @since v3
         */
        url?: string;
    };
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    events?: Array<"push" | "issues" | "issue_comment" | "commit_comment" | "pull_request" | "pull_request_review_comment" | "gollum" | "watch" | "download" | "fork" | "fork_apply" | "member" | "public" | "team_add" | "status">;
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     *
     * @since v3
     */
    name?: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    updated_at?: string;
    /**
     *
     * @since v3
     */
    url?: string;
}>;
