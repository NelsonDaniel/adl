
/**
 * @extensible
 * @description Notification Name Identifier.
 * @since 2019-12-01
 */
export enum NotificationName {
    /**
     *
     * @description The following email recipients and users will receive email notifications about subscription requests for API products requiring approval.
     */
    RequestPublisherNotificationMessage = 'RequestPublisherNotificationMessage',
    /**
     *
     * @description The following email recipients and users will receive email notifications about new API product subscriptions.
     */
    PurchasePublisherNotificationMessage = 'PurchasePublisherNotificationMessage',
    /**
     *
     * @description The following email recipients and users will receive email notifications when new applications are submitted to the application gallery.
     */
    NewApplicationNotificationMessage = 'NewApplicationNotificationMessage',
    /**
     *
     * @description The following recipients will receive blind carbon copies of all emails sent to developers.
     */
    BCC = 'BCC',
    /**
     *
     * @description The following email recipients and users will receive email notifications when a new issue or comment is submitted on the developer portal.
     */
    NewIssuePublisherNotificationMessage = 'NewIssuePublisherNotificationMessage',
    /**
     *
     * @description The following email recipients and users will receive email notifications when developer closes his account.
     */
    AccountClosedPublisher = 'AccountClosedPublisher',
    /**
     *
     * @description The following email recipients and users will receive email notifications when subscription usage gets close to usage quota.
     */
    QuotaLimitApproachingPublisherNotificationMessage = 'QuotaLimitApproachingPublisherNotificationMessage'
}
