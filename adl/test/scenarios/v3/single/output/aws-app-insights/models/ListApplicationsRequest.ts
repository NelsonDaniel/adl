import { MaxEntities } from '../aliases/MaxEntities';
/**
 * ListApplicationsRequest
 * @since 2018-11-25
 */
export interface ListApplicationsRequest {
    /**
     * @description The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.
     * @since 2018-11-25
     */
    MaxResults?: MaxEntities;
    /**
     * @description The token to request the next page of results.
     * @since 2018-11-25
     */
    NextToken?: string;
}
