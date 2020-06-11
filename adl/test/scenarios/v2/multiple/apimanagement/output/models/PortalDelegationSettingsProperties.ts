import { SubscriptionsDelegationSettingsProperties } from './SubscriptionsDelegationSettingsProperties';
import { RegistrationDelegationSettingsProperties } from './RegistrationDelegationSettingsProperties';
/**
 * @description Delegation settings contract properties.
 * @since 2019-12-01
 */
export interface PortalDelegationSettingsProperties {
    /**
     * @description A delegation Url.
     * @since 2019-12-01
     */
    url?: string;
    /**
     * @description A base64-encoded validation key to validate, that a request is coming from Azure API Management.
     * @since 2019-12-01
     */
    validationKey?: string;
    /**
     * @description Subscriptions delegation settings.
     * @since 2019-12-01
     */
    subscriptions?: SubscriptionsDelegationSettingsProperties;
    /**
     * @description User registration delegation settings.
     * @since 2019-12-01
     */
    userRegistration?: RegistrationDelegationSettingsProperties;
}
