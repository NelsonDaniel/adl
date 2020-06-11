import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates this request is invalid.
 * @since 2.3
 */
export interface InvalidRequestProblem extends ProblemFields {
    /**
     *
     * @since 2.3
     */
    errors?: Array<{
        /**
         *
         * @since 2.3
         */
        message?: string;
        /**
         *
         * @since 2.3
         */
        parameters?: Dictionary<Array<string>>;
    }>;
    /**
     *
     * @since 2.3
     */
    type?: "https://api.twitter.com/labs/2/problems/invalid-request";
}
