import { X509CertificateName } from './X509CertificateName';
/**
 * @description Properties of the Service Fabric Type Backend.
 * @since 2019-12-01
 */
export interface BackendServiceFabricClusterProperties {
    /**
     * @description The client certificate thumbprint for the management endpoint.
     * @since 2019-12-01
     */
    clientCertificatethumbprint: string;
    /**
     * @description Maximum number of retries while attempting resolve the partition.
     * @since 2019-12-01
     */
    maxPartitionResolutionRetries?: int32;
    /**
     * @description The cluster management endpoint.
     * @since 2019-12-01
     */
    managementEndpoints: Array<string>;
    /**
     * @description Thumbprints of certificates cluster management service uses for tls communication
     * @since 2019-12-01
     */
    serverCertificateThumbprints?: Array<string>;
    /**
     * @description Server X509 Certificate Names Collection
     * @since 2019-12-01
     */
    serverX509Names?: Array<X509CertificateName>;
}
