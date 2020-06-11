import { TermsOfServiceProperties } from './TermsOfServiceProperties';
/**
 * @description Sign-up settings contract properties.
 * @since 2019-12-01
 */
export interface PortalSignupSettingsProperties {
    /**
     * @description Allow users to sign up on a developer portal.
     * @since 2019-12-01
     */
    enabled?: boolean;
    /**
     * @description Terms of service contract properties.
     * @since 2019-12-01
     */
    termsOfService?: TermsOfServiceProperties;
}
