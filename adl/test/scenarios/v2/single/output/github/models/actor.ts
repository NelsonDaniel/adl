
/**
 * @description A user or organization
 * @since v3
 */
export interface actor {
    /**
     *
     * @since v3
     */
    avatar_url?: string;
    /**
     *
     * @since v3
     */
    bio?: string;
    /**
     * @description The website URL from the profile page
     * @since v3
     */
    blog?: string;
    /**
     *
     * @since v3
     */
    collaborators?: int64;
    /**
     *
     * @since v3
     */
    company?: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    disk_usage?: int64;
    /**
     * @description Note: The returned email is the user’s publicly visible email address (or null if the user has not specified a public email address in their profile).
     * @since v3
     */
    email?: string;
    /**
     *
     * @since v3
     */
    followers?: int64;
    /**
     *
     * @since v3
     */
    followers_url?: string;
    /**
     *
     * @since v3
     */
    following?: int64;
    /**
     *
     * @since v3
     */
    following_url?: string;
    /**
     *
     * @since v3
     */
    gists_url?: string;
    /**
     *
     * @since v3
     */
    gravatar_id?: string;
    /**
     *
     * @since v3
     */
    hireable?: boolean;
    /**
     *
     * @since v3
     */
    html_url?: string;
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     *
     * @since v3
     */
    location?: string;
    /**
     * @description The account username
     * @since v3
     */
    login?: string;
    /**
     * @description The full account name
     * @since v3
     */
    name?: string;
    /**
     *
     * @since v3
     */
    organizations_url?: string;
    /**
     *
     * @since v3
     */
    owned_private_repos?: int64;
    /**
     *
     * @since v3
     */
    plan?: {
        /**
         *
         * @since v3
         */
        collaborators?: int64;
        /**
         *
         * @since v3
         */
        name?: string;
        /**
         *
         * @since v3
         */
        private_repos?: int64;
        /**
         *
         * @since v3
         */
        space?: int64;
    };
    /**
     *
     * @since v3
     */
    private_gists?: int64;
    /**
     *
     * @since v3
     */
    public_gists?: int64;
    /**
     *
     * @since v3
     */
    public_repos?: int64;
    /**
     *
     * @since v3
     */
    starred_url?: string;
    /**
     *
     * @since v3
     */
    subscriptions_url?: string;
    /**
     *
     * @since v3
     */
    total_private_repos?: int64;
    /**
     *
     * @since v3
     */
    type?: "User" | "Organization";
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
}
