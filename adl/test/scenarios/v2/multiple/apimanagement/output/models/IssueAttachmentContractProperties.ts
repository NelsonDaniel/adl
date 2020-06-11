
/**
 * @description Issue Attachment contract Properties.
 * @since 2019-12-01
 */
export interface IssueAttachmentContractProperties {
    /**
     * @description Filename by which the binary data will be saved.
     * @since 2019-12-01
     */
    title: string;
    /**
     * @description Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
     * @since 2019-12-01
     */
    contentFormat: string;
    /**
     * @description An HTTP link or Base64-encoded binary data.
     * @since 2019-12-01
     */
    content: string;
}
