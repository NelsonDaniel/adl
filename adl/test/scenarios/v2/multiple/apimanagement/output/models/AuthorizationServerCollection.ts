import { AuthorizationServerContract } from './AuthorizationServerContract';
/**
 * @description Paged OAuth2 Authorization Servers list representation.
 * @since 2019-12-01
 */
export interface AuthorizationServerCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<AuthorizationServerContract>;
    /**
     * @description Total record count number across all pages.
     * @since 2019-12-01
     */
    count?: int64;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
