
/**
 * @description Gateway authentication keys.
 * @since 2019-12-01
 */
export interface GatewayKeysContract {
    /**
     * @description Primary gateway key.
     * @since 2019-12-01
     */
    primary?: string;
    /**
     * @description Secondary gateway key.
     * @since 2019-12-01
     */
    secondary?: string;
}
