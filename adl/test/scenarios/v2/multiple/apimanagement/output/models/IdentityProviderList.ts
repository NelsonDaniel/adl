import { IdentityProviderContract } from './IdentityProviderContract';
/**
 * @description List of all the Identity Providers configured on the service instance.
 * @since 2019-12-01
 */
export interface IdentityProviderList {
    /**
     * @description Identity Provider configuration values.
     * @since 2019-12-01
     */
    value?: Array<IdentityProviderContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
