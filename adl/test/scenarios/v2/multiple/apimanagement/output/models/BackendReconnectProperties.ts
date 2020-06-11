
/**
 * @description Properties to control reconnect requests.
 * @since 2019-12-01
 */
export interface BackendReconnectProperties {
    /**
     * @description Duration in ISO8601 format after which reconnect will be initiated. Minimum duration of the Reconnect is PT2M.
     * @since 2019-12-01
     */
    after?: duration;
}
