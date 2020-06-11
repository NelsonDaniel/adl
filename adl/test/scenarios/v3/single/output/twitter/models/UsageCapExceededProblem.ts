import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that a usage cap has been exceeded.
 * @since 2.3
 */
export interface UsageCapExceededProblem extends ProblemFields {
    /**
     *
     * @since 2.3
     */
    period?: "Daily" | "Monthly";
    /**
     *
     * @since 2.3
     */
    scope?: "Account" | "Product";
    /**
     *
     * @since 2.3
     */
    type?: "https://api.twitter.com/labs/2/problems/usage-capped";
}
