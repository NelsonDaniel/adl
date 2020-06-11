import { EmailTemplateParametersContractProperties } from './EmailTemplateParametersContractProperties';
/**
 * @description Email Template Update Contract properties.
 * @since 2019-12-01
 */
export interface EmailTemplateUpdateParameterProperties {
    /**
     * @description Subject of the Template.
     * @since 2019-12-01
     */
    subject?: string & MaxLength<1000> & MinLength<1>;
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
     * @description Email Template Body. This should be a valid XDocument
     * @since 2019-12-01
     */
    body?: string & MinLength<1>;
    /**
     * @description Email Template Parameter values.
     * @since 2019-12-01
     */
    parameters?: Array<EmailTemplateParametersContractProperties>;
}
