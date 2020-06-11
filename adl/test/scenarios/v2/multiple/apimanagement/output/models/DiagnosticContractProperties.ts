import { AlwaysLog } from '../enums/AlwaysLog';
import { SamplingSettings } from './SamplingSettings';
import { PipelineDiagnosticSettings } from './PipelineDiagnosticSettings';
import { HttpCorrelationProtocol } from '../enums/HttpCorrelationProtocol';
import { Verbosity } from '../enums/Verbosity';
/**
 * @description Diagnostic Entity Properties
 * @since 2019-12-01
 */
export interface DiagnosticContractProperties {
    /**
     * @description Specifies for what type of messages sampling settings should not apply.
     * @since 2019-12-01
     */
    alwaysLog?: AlwaysLog;
    /**
     * @description Resource Id of a target logger.
     * @since 2019-12-01
     */
    loggerId: string;
    /**
     * @description Sampling settings for Diagnostic.
     * @since 2019-12-01
     */
    sampling?: SamplingSettings;
    /**
     * @description Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
     * @since 2019-12-01
     */
    frontend?: PipelineDiagnosticSettings;
    /**
     * @description Diagnostic settings for incoming/outgoing HTTP messages to the Backend
     * @since 2019-12-01
     */
    backend?: PipelineDiagnosticSettings;
    /**
     * @description Log the ClientIP. Default is false.
     * @since 2019-12-01
     */
    logClientIp?: boolean;
    /**
     * @description Sets correlation protocol to use for Application Insights diagnostics.
     * @since 2019-12-01
     */
    httpCorrelationProtocol?: HttpCorrelationProtocol;
    /**
     * @description The verbosity level applied to traces emitted by trace policies.
     * @since 2019-12-01
     */
    verbosity?: Verbosity;
}
