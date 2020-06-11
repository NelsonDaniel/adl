import { ResourceGroupName } from '../aliases/ResourceGroupName';
import { MaxEntities } from '../aliases/MaxEntities';
/**
 * ListLogPatternSetsRequest
 * @since 2018-11-25
 */
export interface ListLogPatternSetsRequest {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName: ResourceGroupName;
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
