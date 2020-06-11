
/**
 * @description Details of the Backend WebProxy Server to use in the Request to Backend.
 * @since 2019-12-01
 */
export interface BackendProxyContract {
    /**
     * @description WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
     * @since 2019-12-01
     */
    url: string & MaxLength<2000> & MinLength<1>;
    /**
     * @description Username to connect to the WebProxy server
     * @since 2019-12-01
     */
    username?: string;
    /**
     * @description Password to connect to the WebProxy Server
     * @since 2019-12-01
     */
    password?: string;
}
