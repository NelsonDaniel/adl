
/**
 * @description Properties controlling TLS Certificate Validation.
 * @since 2019-12-01
 */
export interface BackendTlsProperties {
    /**
     * @description Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
     * @since 2019-12-01
     */
    validateCertificateChain?: boolean /* todo: add defaultValue 'true' */;
    /**
     * @description Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.
     * @since 2019-12-01
     */
    validateCertificateName?: boolean /* todo: add defaultValue 'true' */;
}
