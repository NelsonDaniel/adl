import { CertificateContract } from './CertificateContract';
/**
 * @description Paged Certificates list representation.
 * @since 2019-12-01
 */
export interface CertificateCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<CertificateContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
