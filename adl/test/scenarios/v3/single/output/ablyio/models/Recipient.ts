
/**
 * @description Push recipient details for a device.
 * @since 1.1.0
 */
export interface Recipient {
    /**
     * @description Client ID of recipient
     * @since 1.1.0
     */
    clientId?: string;
    /**
     * @description Client ID of recipient
     * @since 1.1.0
     */
    deviceId?: string;
    /**
     * @description when using APNs, specifies the required device token.
     * @since 1.1.0
     */
    deviceToken?: string;
    /**
     * @description when using GCM or FCM, specifies the required registration token.
     * @since 1.1.0
     */
    registrationToken?: string;
    /**
     * @description Defines which push platform is being used.
     * @since 1.1.0
     */
    transportType?: "apns" | "fcm" | "gcm";
}
