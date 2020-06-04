"use strict";
exports.__esModule = true;
exports.bearerTokenSendingMethods = void 0;
/**
 * @extensible
 * @description Form of an authorization grant, which the client uses to request the access token.
 * @since 2019-12-01
 */
var bearerTokenSendingMethods;
(function (bearerTokenSendingMethods) {
    /** Access token will be transmitted in the Authorization header using Bearer schema */
    bearerTokenSendingMethods["authorizationHeader"] = "authorizationHeader";
    /** Access token will be transmitted as query parameters. */
    bearerTokenSendingMethods["query"] = "query";
})(bearerTokenSendingMethods = exports.bearerTokenSendingMethods || (exports.bearerTokenSendingMethods = {}));
