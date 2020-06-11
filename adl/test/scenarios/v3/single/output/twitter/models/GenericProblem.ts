import { ProblemFields } from './ProblemFields';
/**
 * @description A generic problem with no additional information beyond that provided by the HTTP status code.
 * @since 2.3
 */
export interface GenericProblem extends ProblemFields {
    /**
     *
     * @since 2.3
     */
    status: int64;
    /**
     *
     * @since 2.3
     */
    type?: "about:blank";
}
