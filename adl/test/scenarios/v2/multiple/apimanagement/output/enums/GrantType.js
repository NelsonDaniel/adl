"use strict";
exports.__esModule = true;
exports.GrantType = void 0;
/**
 * @extensible
 * @todo temporary-reuse-marker
 * @since 2019-12-01
 */
var GrantType;
(function (GrantType) {
    /** Authorization Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.1. */
    GrantType["authorizationCode"] = "authorizationCode";
    /** Implicit Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.2. */
    GrantType["implicit"] = "implicit";
    /** Resource Owner Password Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.3. */
    GrantType["resourceOwnerPassword"] = "resourceOwnerPassword";
    /** Client Credentials Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.4. */
    GrantType["clientCredentials"] = "clientCredentials";
})(GrantType = exports.GrantType || (exports.GrantType = {}));
