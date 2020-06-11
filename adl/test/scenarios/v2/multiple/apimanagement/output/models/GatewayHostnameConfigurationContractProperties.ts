
/**
 * @description Gateway hostname configuration details.
 * @since 2019-12-01
 */
export interface GatewayHostnameConfigurationContractProperties {
    /**
     * @description Hostname value. Supports valid domain name, partial or full wildcard
     * @since 2019-12-01
     */
    hostname?: string;
    /**
     * @description Identifier of Certificate entity that will be used for TLS connection establishment
     * @since 2019-12-01
     */
    certificateId?: string;
    /**
     * @description Determines whether gateway requests client certificate
     * @since 2019-12-01
     */
    negotiateClientCertificate?: boolean;
}
