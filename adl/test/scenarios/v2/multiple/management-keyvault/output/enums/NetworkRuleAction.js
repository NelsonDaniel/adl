"use strict";
exports.__esModule = true;
exports.NetworkRuleAction = void 0;
/**
 * @extensible
 * @description The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
 * @since 2019-09-01
 */
var NetworkRuleAction;
(function (NetworkRuleAction) {
    /**
     *
     */
    NetworkRuleAction["Allow"] = "Allow";
    /**
     *
     */
    NetworkRuleAction["Deny"] = "Deny";
})(NetworkRuleAction = exports.NetworkRuleAction || (exports.NetworkRuleAction = {}));
