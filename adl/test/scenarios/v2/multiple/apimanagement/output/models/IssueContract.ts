import { IssueContractProperties } from './IssueContractProperties';
import { Resource } from './Resource';
/**
 * @description Issue Contract details.
 * @since 2019-12-01
 */
export interface IssueContract extends Resource {
    /**
     * @description Properties of the Issue.
     * @since 2019-12-01
     */
    properties?: IssueContractProperties;
}
