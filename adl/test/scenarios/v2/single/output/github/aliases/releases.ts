import { user } from '../models/user';
export type releases = Array<{
    /**
     *
     * @since v3
     */
    assets?: Array<{
        /**
         *
         * @since v3
         */
        content_type?: string;
        /**
         *
         * @since v3
         */
        created_at?: string;
        /**
         *
         * @since v3
         */
        download_count?: int64;
        /**
         *
         * @since v3
         */
        id?: int64;
        /**
         *
         * @since v3
         */
        label?: string;
        /**
         *
         * @since v3
         */
        name?: string;
        /**
         *
         * @since v3
         */
        size?: int64;
        /**
         *
         * @since v3
         */
        state?: string;
        /**
         *
         * @since v3
         */
        updated_at?: string;
        /**
         *
         * @since v3
         */
        uploader?: user;
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
    assets_url?: string;
    /**
     *
     * @since v3
     */
    author?: user;
    /**
     *
     * @since v3
     */
    body?: string;
    /**
     *
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    draft?: boolean;
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
    name?: string;
    /**
     *
     * @since v3
     */
    prerelease?: boolean;
    /**
     *
     * @since v3
     */
    published_at?: string;
    /**
     *
     * @since v3
     */
    tag_name?: string;
    /**
     *
     * @since v3
     */
    tarball_url?: string;
    /**
     *
     * @since v3
     */
    target_commitish?: string;
    /**
     *
     * @since v3
     */
    upload_url?: string;
    /**
     *
     * @since v3
     */
    url?: string;
    /**
     *
     * @since v3
     */
    zipball_url?: string;
}>;
