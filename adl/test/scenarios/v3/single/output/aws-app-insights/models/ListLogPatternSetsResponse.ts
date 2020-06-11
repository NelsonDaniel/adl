import { ResourceGroupName } from '../aliases/ResourceGroupName';
import { LogPatternSetList } from '../aliases/LogPatternSetList';
/**
 *
 * @since 2018-11-25
 */
export interface ListLogPatternSetsResponse {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName?: ResourceGroupName;
    /**
     * @description The list of log pattern sets.
     * @since 2018-11-25
     */
    LogPatternSets?: LogPatternSetList;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     * @since 2018-11-25
     */
    NextToken?: string;
}
