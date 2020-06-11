import { actor } from './actor';
import { user } from './user';
/**
 *
 * @since v3
 */
export interface issueEvent {
    /**
     *
     * @since v3
     */
    actor?: actor;
    /**
     *
     * @since v3
     */
    commit_id?: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    event?: string;
    /**
     *
     * @since v3
     */
    issue?: {
        /**
         *
         * @since v3
         */
        assignee?: user;
        /**
         *
         * @since v3
         */
        body?: string;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         * @since v3
         */
        closed_at?: string;
        /**
         *
         * @since v3
         */
        comments?: int64;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         * @since v3
         */
        created_at?: string;
        /**
         *
         * @since v3
         */
        html_url?: string;
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
        milestone?: {
            /**
             *
             * @since v3
             */
            closed_issues?: int64;
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             * @since v3
             */
            created_at?: string;
            /**
             *
             * @since v3
             */
            creator?: user;
            /**
             *
             * @since v3
             */
            description?: string;
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             * @since v3
             */
            due_on?: string;
            /**
             *
             * @since v3
             */
            number?: int64;
            /**
             *
             * @since v3
             */
            open_issues?: int64;
            /**
             *
             * @since v3
             */
            state?: "open" | "closed";
            /**
             *
             * @since v3
             */
            title?: string;
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
            diff_url?: string;
            /**
             *
             * @since v3
             */
            html_url?: string;
            /**
             *
             * @since v3
             */
            patch_url?: string;
        };
        /**
         *
         * @since v3
         */
        state?: "open" | "closed";
        /**
         *
         * @since v3
         */
        title?: string;
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
        /**
         *
         * @since v3
         */
        user?: user;
    };
    /**
     *
     * @since v3
     */
    url?: string;
}
