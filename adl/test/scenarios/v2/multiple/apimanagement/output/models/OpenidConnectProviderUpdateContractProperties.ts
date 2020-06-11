
/**
 * @description Parameters supplied to the Update OpenID Connect Provider operation.
 * @since 2019-12-01
 */
export interface OpenidConnectProviderUpdateContractProperties {
    /**
     * @description User-friendly OpenID Connect Provider name.
     * @since 2019-12-01
     */
    displayName?: string & MaxLength<50>;
    /**
     * @description User-friendly description of OpenID Connect Provider.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description Metadata endpoint URI.
     * @since 2019-12-01
     */
    metadataEndpoint?: string;
    /**
     * @description Client ID of developer console which is the client application.
     * @since 2019-12-01
     */
    clientId?: string;
    /**
     * @description Client Secret of developer console which is the client application.
     * @since 2019-12-01
     */
    clientSecret?: string;
}
