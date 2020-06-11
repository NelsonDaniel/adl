import { NotificationContract } from './NotificationContract';
/**
 * @description Paged Notification list representation.
 * @since 2019-12-01
 */
export interface NotificationCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<NotificationContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
