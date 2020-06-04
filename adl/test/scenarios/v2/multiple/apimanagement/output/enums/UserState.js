"use strict";
exports.__esModule = true;
exports.UserState = void 0;
/**
 * @extensible
 * @description Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
 * @since 2019-12-01
 */
var UserState;
(function (UserState) {
    /** User state is active. */
    UserState["active"] = "active";
    /** User is blocked. Blocked users cannot authenticate at developer portal or call API. */
    UserState["blocked"] = "blocked";
    /** User account is pending. Requires identity confirmation before it can be made active. */
    UserState["pending"] = "pending";
    /** User account is closed. All identities and related entities are removed. */
    UserState["deleted"] = "deleted";
})(UserState = exports.UserState || (exports.UserState = {}));
