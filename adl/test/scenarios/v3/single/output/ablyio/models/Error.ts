
/**
 * @description Returned error from failed REST.
 * @since 1.1.0
 */
export interface Error {
    /**
     * @description Error code.
     * @since 1.1.0
     */
    code?: int64;
    /**
     * @description Link to help with error.
     * @since 1.1.0
     */
    href?: string;
    /**
     * @description Message explaining the error's cause.
     * @since 1.1.0
     */
    message?: string;
    /**
     * @description Server ID with which error was encountered.
     * @since 1.1.0
     */
    serverId?: string;
    /**
     * @description Status error code.
     * @since 1.1.0
     */
    statusCode?: int64;
}
