import { RecipientUsersContractProperties } from './RecipientUsersContractProperties';
import { Resource } from './Resource';
/**
 * @description Recipient User details.
 * @since 2019-12-01
 */
export interface RecipientUserContract extends Resource {
    /**
     * @description Recipient User entity contract properties.
     * @since 2019-12-01
     */
    properties?: RecipientUsersContractProperties;
}
