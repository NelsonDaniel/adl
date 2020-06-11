
/**
 * @description Properties of server X509Names.
 * @since 2019-12-01
 */
export interface X509CertificateName {
    /**
     * @description Common Name of the Certificate.
     * @since 2019-12-01
     */
    name?: string;
    /**
     * @description Thumbprint for the Issuer of the Certificate.
     * @since 2019-12-01
     */
    issuerCertificateThumbprint?: string;
}
