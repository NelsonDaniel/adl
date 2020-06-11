import { Notification } from './Notification';
/**
 *
 * @since 1.1.0
 */
export interface Push {
    /**
     * @description Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     * @since 1.1.0
     */
    apns?: {
        /**
         *
         * @since 1.1.0
         */
        notification?: Notification;
    };
    /**
     * @description Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example).
     * @since 1.1.0
     */
    data?: string;
    /**
     * @description Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     * @since 1.1.0
     */
    fcm?: {
        /**
         *
         * @since 1.1.0
         */
        notification?: Notification;
    };
    /**
     *
     * @since 1.1.0
     */
    notification?: Notification;
    /**
     * @description Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     * @since 1.1.0
     */
    web?: {
        /**
         *
         * @since 1.1.0
         */
        notification?: Notification;
    };
}
