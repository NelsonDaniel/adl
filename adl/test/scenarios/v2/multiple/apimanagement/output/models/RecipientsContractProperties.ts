
/**
 * @description Notification Parameter contract.
 * @since 2019-12-01
 */
export interface RecipientsContractProperties {
    /**
     * @description List of Emails subscribed for the notification.
     * @since 2019-12-01
     */
    emails?: Array<string>;
    /**
     * @description List of Users subscribed for the notification.
     * @since 2019-12-01
     */
    users?: Array<string>;
}
