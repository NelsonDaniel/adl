import { IssueContractBaseProperties } from './IssueContractBaseProperties';
/**
 * @description Issue contract Update Properties.
 * @since 2019-12-01
 */
export interface IssueUpdateContractProperties extends IssueContractBaseProperties {
    /**
     * @description The issue title.
     * @since 2019-12-01
     */
    title?: string;
    /**
     * @description Text describing the issue.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description A resource identifier for the user created the issue.
     * @since 2019-12-01
     */
    userId?: string;
}
