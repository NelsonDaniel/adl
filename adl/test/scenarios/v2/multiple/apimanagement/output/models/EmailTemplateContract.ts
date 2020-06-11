import { EmailTemplateContractProperties } from './EmailTemplateContractProperties';
import { Resource } from './Resource';
/**
 * @description Email Template details.
 * @since 2019-12-01
 */
export interface EmailTemplateContract extends Resource {
    /**
     * @description Email Template entity contract properties.
     * @since 2019-12-01
     */
    properties?: EmailTemplateContractProperties;
}
