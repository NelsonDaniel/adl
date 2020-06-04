"use strict";
exports.__esModule = true;
exports.IdentityProviderType = void 0;
/**
 * @extensible
 * @description Identity Provider Type identifier.
 * @todo temporary-reuse-marker
 * @since 2019-12-01
 */
var IdentityProviderType;
(function (IdentityProviderType) {
    /** Facebook as Identity provider. */
    IdentityProviderType["facebook"] = "facebook";
    /** Google as Identity provider. */
    IdentityProviderType["google"] = "google";
    /** Microsoft Live as Identity provider. */
    IdentityProviderType["microsoft"] = "microsoft";
    /** Twitter as Identity provider. */
    IdentityProviderType["twitter"] = "twitter";
    /** Azure Active Directory as Identity provider. */
    IdentityProviderType["aad"] = "aad";
    /** Azure Active Directory B2C as Identity provider. */
    IdentityProviderType["aadB2C"] = "aadB2C";
})(IdentityProviderType = exports.IdentityProviderType || (exports.IdentityProviderType = {}));
