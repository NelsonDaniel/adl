"use strict";
exports.__esModule = true;
exports.BackendProtocol = void 0;
/**
 * @extensible
 * @description Backend communication protocol.
 * @todo temporary-reuse-marker
 * @since 2019-12-01
 */
var BackendProtocol;
(function (BackendProtocol) {
    /** The Backend is a RESTful service. */
    BackendProtocol["http"] = "http";
    /** The Backend is a SOAP service. */
    BackendProtocol["soap"] = "soap";
})(BackendProtocol = exports.BackendProtocol || (exports.BackendProtocol = {}));
