"use strict";
exports.__esModule = true;
exports.Verbosity = void 0;
/**
 * @extensible
 * @description The verbosity level applied to traces emitted by trace policies.
 * @since 2019-12-01
 */
var Verbosity;
(function (Verbosity) {
    /** All the traces emitted by trace policies will be sent to the logger attached to this diagnostic instance. */
    Verbosity["verbose"] = "verbose";
    /** Traces with 'severity' set to 'information' and 'error' will be sent to the logger attached to this diagnostic instance. */
    Verbosity["information"] = "information";
    /** Only traces with 'severity' set to 'error' will be sent to the logger attached to this diagnostic instance. */
    Verbosity["error"] = "error";
})(Verbosity = exports.Verbosity || (exports.Verbosity = {}));
