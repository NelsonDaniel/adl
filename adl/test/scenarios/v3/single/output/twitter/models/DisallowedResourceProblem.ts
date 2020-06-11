import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that the resource requested violates the precepts of this API.
 * @since 2.3
 */
export interface DisallowedResourceProblem extends ProblemFields {
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
    type?: "https://api.twitter.com/labs/2/problems/disallowed-resource";
}
