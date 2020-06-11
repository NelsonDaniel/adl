import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates you are not allowed to see a particular Tweet, User, etc.
 * @since 2.3
 */
export interface ResourceUnauthorizedProblem extends ProblemFields {
    /**
     *
     * @since 2.3
     */
    resource_id: string;
    /**
     *
     * @since 2.3
     */
    resource_type: "tweet";
    /**
     *
     * @since 2.3
     */
    section: "data" | "includes";
    /**
     *
     * @since 2.3
     */
    type?: "https://api.twitter.com/labs/2/problems/not-authorized-for-resource";
}
