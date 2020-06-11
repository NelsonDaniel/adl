import { ProblemList } from '../aliases/ProblemList';
/**
 *
 * @since 2018-11-25
 */
export interface ListProblemsResponse {
    /**
     * @description The list of problems.
     * @since 2018-11-25
     */
    ProblemList?: ProblemList;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     * @since 2018-11-25
     */
    NextToken?: string;
}
