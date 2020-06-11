
/**
 * @extensible
 * @description Sets correlation protocol to use for Application Insights diagnostics.
 * @since 2019-12-01
 */
export enum HttpCorrelationProtocol {
    /**
     *
     * @description Do not read and inject correlation headers.
     */
    None = 'None',
    /**
     *
     * @description Inject Request-Id and Request-Context headers with request correlation data. See https://github.com/dotnet/corefx/blob/master/src/System.Diagnostics.DiagnosticSource/src/HttpCorrelationProtocol.md.
     */
    Legacy = 'Legacy',
    /**
     *
     * @description Inject Trace Context headers. See https://w3c.github.io/trace-context.
     */
    W3C = 'W3C'
}
