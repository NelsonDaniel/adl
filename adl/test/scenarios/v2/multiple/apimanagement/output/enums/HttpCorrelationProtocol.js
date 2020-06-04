"use strict";
exports.__esModule = true;
exports.HttpCorrelationProtocol = void 0;
/**
 * @extensible
 * @description Sets correlation protocol to use for Application Insights diagnostics.
 * @since 2019-12-01
 */
var HttpCorrelationProtocol;
(function (HttpCorrelationProtocol) {
    /** Do not read and inject correlation headers. */
    HttpCorrelationProtocol["None"] = "None";
    /** Inject Request-Id and Request-Context headers with request correlation data. See https://github.com/dotnet/corefx/blob/master/src/System.Diagnostics.DiagnosticSource/src/HttpCorrelationProtocol.md. */
    HttpCorrelationProtocol["Legacy"] = "Legacy";
    /** Inject Trace Context headers. See https://w3c.github.io/trace-context. */
    HttpCorrelationProtocol["W3C"] = "W3C";
})(HttpCorrelationProtocol = exports.HttpCorrelationProtocol || (exports.HttpCorrelationProtocol = {}));
