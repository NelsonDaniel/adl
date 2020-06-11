
/**
 * @description Authorization header information.
 * @since 2019-12-01
 */
export interface BackendAuthorizationHeaderCredentials {
    /**
     * @description Authentication Scheme name.
     * @since 2019-12-01
     */
    scheme: string & MaxLength<100> & MinLength<1>;
    /**
     * @description Authentication Parameter value.
     * @since 2019-12-01
     */
    parameter: string & MaxLength<300> & MinLength<1>;
}
