import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that the authentication used is not supported.
 * @since 2.3
 */
export interface UnsupportedAuthenticationProblem extends ProblemFields {
    /**
     *
     * @since 2.3
     */
    type?: "https://api.twitter.com/labs/2/problems/unsupported-authentication";
}
