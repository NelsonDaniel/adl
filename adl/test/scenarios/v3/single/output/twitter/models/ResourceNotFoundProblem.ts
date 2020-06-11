import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that a given Tweet, User, etc. does not exist.
 * @since 2.3
 */
export interface ResourceNotFoundProblem extends ProblemFields {
    /**
     *
     * @since 2.3
     */
    parameter: string & MinLength<1>;
    /**
     *
     * @since 2.3
     */
    resource_type: "user" | "tweet";
    /**
     *
     * @since 2.3
     */
    type?: "https://api.twitter.com/labs/2/problems/resource-not-found";
    /**
     * @description Value will match the schema of the field.
     * @since 2.3
     */
    value: any;
}
