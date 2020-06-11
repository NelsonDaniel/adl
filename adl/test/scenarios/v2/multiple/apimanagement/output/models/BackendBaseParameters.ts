import { BackendProperties } from './BackendProperties';
import { BackendCredentialsContract } from './BackendCredentialsContract';
import { BackendProxyContract } from './BackendProxyContract';
import { BackendTlsProperties } from './BackendTlsProperties';
/**
 * @description Backend entity base Parameter set.
 * @since 2019-12-01
 */
export interface BackendBaseParameters {
    /**
     * @description Backend Title.
     * @since 2019-12-01
     */
    title?: string & MaxLength<300> & MinLength<1>;
    /**
     * @description Backend Description.
     * @since 2019-12-01
     */
    description?: string & MaxLength<2000> & MinLength<1>;
    /**
     * @description Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
     * @since 2019-12-01
     */
    resourceId?: string & MaxLength<2000> & MinLength<1>;
    /**
     * @description Backend Properties contract
     * @since 2019-12-01
     */
    properties?: BackendProperties;
    /**
     * @description Backend Credentials Contract Properties
     * @since 2019-12-01
     */
    credentials?: BackendCredentialsContract;
    /**
     * @description Backend Proxy Contract Properties
     * @since 2019-12-01
     */
    proxy?: BackendProxyContract;
    /**
     * @description Backend TLS Properties
     * @since 2019-12-01
     */
    tls?: BackendTlsProperties;
}
