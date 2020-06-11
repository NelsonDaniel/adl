import { user } from '../models/user';
export type gists = Array<{
    /**
     *
     * @since v3
     */
    comments?: int64;
    /**
     *
     * @since v3
     */
    comments_url?: string;
    /**
     *
     * @since v3
     */
    created_at?: string;
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
        'ring.erl'?: {
            /**
             *
             * @since v3
             */
            filename?: string;
            /**
             *
             * @since v3
             */
            raw_url?: string;
            /**
             *
             * @since v3
             */
            size?: int64;
        };
    };
    /**
     *
     * @since v3
     */
    git_pull_url?: string;
    /**
     *
     * @since v3
     */
    git_push_url?: string;
    /**
     *
     * @since v3
     */
    html_url?: string;
    /**
     *
     * @since v3
     */
    id?: string;
    /**
     *
     * @since v3
     */
    public?: boolean;
    /**
     *
     * @since v3
     */
    url?: string;
    /**
     *
     * @since v3
     */
    user?: user;
}>;
