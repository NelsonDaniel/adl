
/**
 * @description Parameters supplied to the CreateOrUpdate certificate operation.
 * @since 2019-12-01
 */
export interface CertificateCreateOrUpdateProperties {
    /**
     * @description Base 64 encoded certificate using the application/x-pkcs12 representation.
     * @since 2019-12-01
     */
    data: string;
    /**
     * @description Password for the Certificate
     * @since 2019-12-01
     */
    password: string;
}
