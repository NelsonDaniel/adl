import { BodyDiagnosticSettings } from './BodyDiagnosticSettings';
/**
 * @description Http message diagnostic settings.
 * @since 2019-12-01
 */
export interface HttpMessageDiagnostic {
    /**
     * @description Array of HTTP Headers to log.
     * @since 2019-12-01
     */
    headers?: Array<string>;
    /**
     * @description Body logging settings.
     * @since 2019-12-01
     */
    body?: BodyDiagnosticSettings;
}
