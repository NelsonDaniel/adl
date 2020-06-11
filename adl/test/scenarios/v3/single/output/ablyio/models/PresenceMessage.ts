import { Extras } from './Extras';
/**
 *
 * @since 1.1.0
 */
export interface PresenceMessage {
    /**
     * @description The event signified by a PresenceMessage.
     * @since 1.1.0
     */
    readonly action?: "ABSENT" | "PRESENT" | "ENTER" | "LEAVE" | "UPDATE";
    /**
     * @description The client ID of the publisher of this presence update.
     * @since 1.1.0
     */
    clientId?: string;
    /**
     * @description The connection ID of the publisher of this presence update.
     * @since 1.1.0
     */
    connectionId?: string;
    /**
     * @description The presence update payload, if provided.
     * @since 1.1.0
     */
    data?: string;
    /**
     * @description This will typically be empty as all presence updates received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.
     * @since 1.1.0
     */
    encoding?: string;
    /**
     *
     * @since 1.1.0
     */
    extras?: Extras;
    /**
     * @description Unique ID assigned by Ably to this presence update.
     * @since 1.1.0
     */
    readonly id?: string;
    /**
     * @description Timestamp when the presence update was received by Ably, as milliseconds since the epoch.
     * @since 1.1.0
     */
    readonly timestamp?: int64;
}
