import { user } from './user';
/**
 *
 * @since v3
 */
export interface search_issues {
    /**
     *
     * @since v3
     */
    items?: Array<{
        /**
         *
         * @since v3
         */
        assignee?: any;
        /**
         *
         * @since v3
         */
        body?: string;
        /**
         *
         * @since v3
         */
        closed_at?: any;
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
        events_url?: string;
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
        labels?: Array<{
            /**
             *
             * @since v3
             */
            color?: string;
            /**
             *
             * @since v3
             */
            name?: string;
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
        labels_url?: string;
        /**
         *
         * @since v3
         */
        milestone?: any;
        /**
         *
         * @since v3
         */
        number?: int64;
        /**
         *
         * @since v3
         */
        pull_request?: {
            /**
             *
             * @since v3
             */
            diff_url?: any;
            /**
             *
             * @since v3
             */
            html_url?: any;
            /**
             *
             * @since v3
             */
            patch_url?: any;
        };
        /**
         *
         * @since v3
         */
        score?: double;
        /**
         *
         * @since v3
         */
        state?: string;
        /**
         *
         * @since v3
         */
        title?: string;
        /**
         *
         * @since v3
         */
        updated_at?: string;
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
    /**
     *
     * @since v3
     */
    total_count?: int64;
}
