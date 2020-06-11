
/**
 *
 * @since 1.1.0
 */
export interface TokenDetails {
    /**
     * @description Regular expression representation of the capabilities of the token.
     * @since 1.1.0
     */
    capability?: string;
    /**
     * @description Timestamp of token expiration.
     * @since 1.1.0
     */
    expires?: int64;
    /**
     * @description Timestamp of token creation.
     * @since 1.1.0
     */
    issued?: int64;
    /**
     * @description Name of the key used to create the token
     * @since 1.1.0
     */
    keyName?: string;
    /**
     * @description The Ably Token.
     * @since 1.1.0
     */
    token?: string;
}
