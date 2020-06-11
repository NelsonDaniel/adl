import { actor } from './actor';
/**
 *
 * @since v3
 */
export interface search_code {
    /**
     *
     * @since v3
     */
    items?: Array<{
        /**
         *
         * @since v3
         */
        git_url?: string;
        /**
         *
         * @since v3
         */
        html_url?: string;
        /**
         *
         * @since v3
         */
        name?: string;
        /**
         *
         * @since v3
         */
        path?: string;
        /**
         *
         * @since v3
         */
        repository?: {
            /**
             *
             * @since v3
             */
            archive_url?: string;
            /**
             *
             * @since v3
             */
            assignees_url?: string;
            /**
             *
             * @since v3
             */
            blobs_url?: string;
            /**
             *
             * @since v3
             */
            branches_url?: string;
            /**
             *
             * @since v3
             */
            collaborators_url?: string;
            /**
             *
             * @since v3
             */
            comments_url?: string;
            /**
             *
             * @since v3
             */
            commits_url?: string;
            /**
             *
             * @since v3
             */
            compare_url?: string;
            /**
             *
             * @since v3
             */
            contents_url?: string;
            /**
             *
             * @since v3
             */
            contributors_url?: string;
            /**
             *
             * @since v3
             */
            description?: string;
            /**
             *
             * @since v3
             */
            downloads_url?: string;
            /**
             *
             * @since v3
             */
            events_url?: string;
            /**
             *
             * @since v3
             */
            fork?: boolean;
            /**
             *
             * @since v3
             */
            forks_url?: string;
            /**
             *
             * @since v3
             */
            full_name?: string;
            /**
             *
             * @since v3
             */
            git_commits_url?: string;
            /**
             *
             * @since v3
             */
            git_refs_url?: string;
            /**
             *
             * @since v3
             */
            git_tags_url?: string;
            /**
             *
             * @since v3
             */
            hooks_url?: string;
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
            issue_comment_url?: string;
            /**
             *
             * @since v3
             */
            issue_events_url?: string;
            /**
             *
             * @since v3
             */
            issues_url?: string;
            /**
             *
             * @since v3
             */
            keys_url?: string;
            /**
             *
             * @since v3
             */
            labels_url?: string;
            /**
             *
             * @since v3
             */
            languages_url?: string;
            /**
             *
             * @since v3
             */
            merges_url?: string;
            /**
             *
             * @since v3
             */
            milestones_url?: string;
            /**
             *
             * @since v3
             */
            name?: string;
            /**
             *
             * @since v3
             */
            notifications_url?: string;
            /**
             *
             * @since v3
             */
            owner?: actor;
            /**
             *
             * @since v3
             */
            private?: boolean;
            /**
             *
             * @since v3
             */
            pulls_url?: string;
            /**
             *
             * @since v3
             */
            stargazers_url?: string;
            /**
             *
             * @since v3
             */
            statuses_url?: string;
            /**
             *
             * @since v3
             */
            subscribers_url?: string;
            /**
             *
             * @since v3
             */
            subscription_url?: string;
            /**
             *
             * @since v3
             */
            tags_url?: string;
            /**
             *
             * @since v3
             */
            teams_url?: string;
            /**
             *
             * @since v3
             */
            trees_url?: string;
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
        score?: double;
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
    }>;
    /**
     *
     * @since v3
     */
    total_count?: int64;
}
