import { EmailTemplateContract } from './EmailTemplateContract';
/**
 * @description Paged email template list representation.
 * @since 2019-12-01
 */
export interface EmailTemplateCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<EmailTemplateContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
