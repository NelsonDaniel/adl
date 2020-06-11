import { OpenidConnectProviderContract } from './OpenidConnectProviderContract';
/**
 * @description Paged OpenIdProviders list representation.
 * @since 2019-12-01
 */
export interface OpenIdConnectProviderCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<OpenidConnectProviderContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
