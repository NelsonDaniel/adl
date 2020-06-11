
/**
 * @description Body logging settings.
 * @since 2019-12-01
 */
export interface BodyDiagnosticSettings {
    /**
     * @description Number of request body bytes to log.
     * @since 2019-12-01
     */
    bytes?: int32 & Maximum<8192>;
}
