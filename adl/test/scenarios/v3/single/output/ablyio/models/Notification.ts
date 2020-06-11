
/**
 *
 * @since 1.1.0
 */
export interface Notification {
    /**
     * @description Text below title on the expanded notification.
     * @since 1.1.0
     */
    body?: string;
    /**
     * @description Platform-specific, used to group notifications together.
     * @since 1.1.0
     */
    collapseKey?: string;
    /**
     * @description Platform-specific icon for the notification.
     * @since 1.1.0
     */
    icon?: string;
    /**
     * @description Platform-specific sound for the notification.
     * @since 1.1.0
     */
    sound?: string;
    /**
     * @description Title to display at the notification.
     * @since 1.1.0
     */
    title?: string;
}
