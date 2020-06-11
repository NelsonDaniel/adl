import { ApplicationInfoList } from '../aliases/ApplicationInfoList';
/**
 *
 * @since 2018-11-25
 */
export interface ListApplicationsResponse {
    /**
     * @description The list of applications.
     * @since 2018-11-25
     */
    ApplicationInfoList?: ApplicationInfoList;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     * @since 2018-11-25
     */
    NextToken?: string;
}
