"use strict";
exports.__esModule = true;
exports.Confirmation = void 0;
/**
 * @extensible
 * @description Determines the type of confirmation e-mail that will be sent to the newly created user.
 * @since 2019-12-01
 */
var Confirmation;
(function (Confirmation) {
    /** Send an e-mail to the user confirming they have successfully signed up. */
    Confirmation["signup"] = "signup";
    /** Send an e-mail inviting the user to sign-up and complete registration. */
    Confirmation["invite"] = "invite";
})(Confirmation = exports.Confirmation || (exports.Confirmation = {}));
