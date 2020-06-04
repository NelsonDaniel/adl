"use strict";
exports.__esModule = true;
exports.NetworkRuleBypassOptions = void 0;
/**
 * @extensible
 * @description Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
 * @since 2019-09-01
 */
var NetworkRuleBypassOptions;
(function (NetworkRuleBypassOptions) {
    /**
     *
     */
    NetworkRuleBypassOptions["AzureServices"] = "AzureServices";
    /**
     *
     */
    NetworkRuleBypassOptions["None"] = "None";
})(NetworkRuleBypassOptions = exports.NetworkRuleBypassOptions || (exports.NetworkRuleBypassOptions = {}));
