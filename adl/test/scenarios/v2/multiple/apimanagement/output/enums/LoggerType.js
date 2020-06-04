"use strict";
exports.__esModule = true;
exports.LoggerType = void 0;
/**
 * @extensible
 * @description Logger type.
 * @todo temporary-reuse-marker
 * @since 2019-12-01
 */
var LoggerType;
(function (LoggerType) {
    /** Azure Event Hub as log destination. */
    LoggerType["azureEventHub"] = "azureEventHub";
    /** Azure Application Insights as log destination. */
    LoggerType["applicationInsights"] = "applicationInsights";
})(LoggerType = exports.LoggerType || (exports.LoggerType = {}));
