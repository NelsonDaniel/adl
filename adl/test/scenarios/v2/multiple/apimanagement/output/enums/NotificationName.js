"use strict";
exports.__esModule = true;
exports.NotificationName = void 0;
/**
 * @extensible
 * @description Notification Name Identifier.
 * @since 2019-12-01
 */
var NotificationName;
(function (NotificationName) {
    /** The following email recipients and users will receive email notifications about subscription requests for API products requiring approval. */
    NotificationName["RequestPublisherNotificationMessage"] = "RequestPublisherNotificationMessage";
    /** The following email recipients and users will receive email notifications about new API product subscriptions. */
    NotificationName["PurchasePublisherNotificationMessage"] = "PurchasePublisherNotificationMessage";
    /** The following email recipients and users will receive email notifications when new applications are submitted to the application gallery. */
    NotificationName["NewApplicationNotificationMessage"] = "NewApplicationNotificationMessage";
    /** The following recipients will receive blind carbon copies of all emails sent to developers. */
    NotificationName["BCC"] = "BCC";
    /** The following email recipients and users will receive email notifications when a new issue or comment is submitted on the developer portal. */
    NotificationName["NewIssuePublisherNotificationMessage"] = "NewIssuePublisherNotificationMessage";
    /** The following email recipients and users will receive email notifications when developer closes his account. */
    NotificationName["AccountClosedPublisher"] = "AccountClosedPublisher";
    /** The following email recipients and users will receive email notifications when subscription usage gets close to usage quota. */
    NotificationName["QuotaLimitApproachingPublisherNotificationMessage"] = "QuotaLimitApproachingPublisherNotificationMessage";
})(NotificationName = exports.NotificationName || (exports.NotificationName = {}));
