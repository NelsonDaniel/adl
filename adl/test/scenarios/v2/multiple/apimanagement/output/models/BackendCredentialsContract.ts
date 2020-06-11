import { BackendAuthorizationHeaderCredentials } from './BackendAuthorizationHeaderCredentials';
/**
 * @description Details of the Credentials used to connect to Backend.
 * @since 2019-12-01
 */
export interface BackendCredentialsContract {
    /**
     * @description List of Client Certificate Thumbprint.
     * @since 2019-12-01
     */
    certificate?: Array<string> & MaximumElements<32>;
    /**
     * @description Query Parameter description.
     * @since 2019-12-01
     */
    query?: Dictionary<Array<string>>;
    /**
     * @description Header Parameter description.
     * @since 2019-12-01
     */
    header?: Dictionary<Array<string>>;
    /**
     * @description Authorization header authentication
     * @since 2019-12-01
     */
    authorization?: BackendAuthorizationHeaderCredentials;
}
