"use strict";
exports.__esModule = true;
exports.SubscriptionState = void 0;
/**
 * @description Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
 * @todo temporary-reuse-marker
 * @todo temporary-reuse-marker
 * @since 2019-12-01
 */
var SubscriptionState;
(function (SubscriptionState) {
    /**
     *
     */
    SubscriptionState["suspended"] = "suspended";
    /**
     *
     */
    SubscriptionState["active"] = "active";
    /**
     *
     */
    SubscriptionState["expired"] = "expired";
    /**
     *
     */
    SubscriptionState["submitted"] = "submitted";
    /**
     *
     */
    SubscriptionState["rejected"] = "rejected";
    /**
     *
     */
    SubscriptionState["cancelled"] = "cancelled";
})(SubscriptionState = exports.SubscriptionState || (exports.SubscriptionState = {}));
