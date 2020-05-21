import { IssueContractProperties } from './IssueContractProperties';
import { Resource } from './Resource';
/**
 * @description Issue Contract details.
 */
export interface IssueContract extends Resource {
    /**
     * @description Properties of the Issue.
     */
    properties: IssueContractProperties;
}