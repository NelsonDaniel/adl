import { EmailTemplateParametersContractProperties } from './EmailTemplateParametersContractProperties';
/**
 * @description Email Template Contract properties.
 * @since 2019-12-01
 */
export interface EmailTemplateContractProperties {
    /**
     * @description Subject of the Template.
     * @since 2019-12-01
     */
    subject: string & MaxLength<1000> & MinLength<1>;
    /**
     * @description Email Template Body. This should be a valid XDocument
     * @since 2019-12-01
     */
    body: string & MinLength<1>;
    /**
     * @description Title of the Template.
     * @since 2019-12-01
     */
    title?: string;
    /**
     * @description Description of the Email Template.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description Whether the template is the default template provided by Api Management or has been edited.
     * @since 2019-12-01
     */
    readonly isDefault?: boolean;
    /**
     * @description Email Template Parameter values.
     * @since 2019-12-01
     */
    parameters?: Array<EmailTemplateParametersContractProperties>;
}
