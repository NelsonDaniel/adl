
/**
 * @extensible
 * @since 2019-12-01
 */
export enum GrantType {
    /**
     *
     * @description Authorization Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.1.
     */
    authorizationCode = 'authorizationCode',
    /**
     *
     * @description Implicit Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.2.
     */
    implicit = 'implicit',
    /**
     *
     * @description Resource Owner Password Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.3.
     */
    resourceOwnerPassword = 'resourceOwnerPassword',
    /**
     *
     * @description Client Credentials Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.4.
     */
    clientCredentials = 'clientCredentials'
}
