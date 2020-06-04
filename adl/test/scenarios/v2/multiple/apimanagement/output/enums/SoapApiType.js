"use strict";
exports.__esModule = true;
exports.SoapApiType = void 0;
/**
 * @extensible
 * @description Type of Api to create.
 *  * `http` creates a SOAP to REST API
 *  * `soap` creates a SOAP pass-through API .
 * @since 2019-12-01
 */
var SoapApiType;
(function (SoapApiType) {
    /** Imports a SOAP API having a RESTful front end. */
    SoapApiType["SoapToRest"] = "http";
    /** Imports the Soap API having a SOAP front end. */
    SoapApiType["SoapPassThrough"] = "soap";
})(SoapApiType = exports.SoapApiType || (exports.SoapApiType = {}));
