
/**
 * @description The object attributes managed by the KeyVault service.
 * @since 2019-09-01
 */
export interface Attributes {
    /**
     * @description Determines whether the object is enabled.
     * @since 2019-09-01
     */
    enabled?: boolean;
    /**
     * @description Not before date in seconds since 1970-01-01T00:00:00Z.
     * @clientName NotBefore
     * @since 2019-09-01
     */
    nbf?: time;
    /**
     * @description Expiry date in seconds since 1970-01-01T00:00:00Z.
     * @clientName Expires
     * @since 2019-09-01
     */
    exp?: time;
    /**
     * @description Creation time in seconds since 1970-01-01T00:00:00Z.
     * @since 2019-09-01
     */
    readonly created?: time;
    /**
     * @description Last updated time in seconds since 1970-01-01T00:00:00Z.
     * @since 2019-09-01
     */
    readonly updated?: time;
}
