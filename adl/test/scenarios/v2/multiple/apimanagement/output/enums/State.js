"use strict";
exports.__esModule = true;
exports.State = void 0;
/**
 * @extensible
 * @description Status of the issue.
 * @since 2019-12-01
 */
var State;
(function (State) {
    /** The issue is proposed. */
    State["proposed"] = "proposed";
    /** The issue is opened. */
    State["open"] = "open";
    /** The issue was removed. */
    State["removed"] = "removed";
    /** The issue is now resolved. */
    State["resolved"] = "resolved";
    /** The issue was closed. */
    State["closed"] = "closed";
})(State = exports.State || (exports.State = {}));
