import { HttpMessageDiagnostic } from './HttpMessageDiagnostic';
/**
 * @description Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
 * @since 2019-12-01
 */
export interface PipelineDiagnosticSettings {
    /**
     * @description Diagnostic settings for request.
     * @since 2019-12-01
     */
    request?: HttpMessageDiagnostic;
    /**
     * @description Diagnostic settings for response.
     * @since 2019-12-01
     */
    response?: HttpMessageDiagnostic;
}
