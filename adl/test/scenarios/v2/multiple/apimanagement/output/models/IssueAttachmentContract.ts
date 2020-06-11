import { IssueAttachmentContractProperties } from './IssueAttachmentContractProperties';
import { Resource } from './Resource';
/**
 * @description Issue Attachment Contract details.
 * @since 2019-12-01
 */
export interface IssueAttachmentContract extends Resource {
    /**
     * @description Properties of the Issue Attachment.
     * @since 2019-12-01
     */
    properties?: IssueAttachmentContractProperties;
}
