import { Extras } from './Extras';
/**
 * @description Message object.
 * @since 1.1.0
 */
export interface Message {
    /**
     * @description The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.
     * @since 1.1.0
     */
    clientId?: string;
    /**
     * @description The connection ID of the publisher of this message.
     * @since 1.1.0
     */
    connectionId?: string;
    /**
     * @description The string encoded payload, with the encoding specified below.
     * @since 1.1.0
     */
    data?: string;
    /**
     * @description This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.
     * @since 1.1.0
     */
    encoding?: string;
    /**
     *
     * @since 1.1.0
     */
    extras?: Extras;
    /**
     * @description A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent).
     * @since 1.1.0
     */
    readonly id?: string;
    /**
     * @description The event name, if provided.
     * @since 1.1.0
     */
    name?: string;
    /**
     * @description Timestamp when the message was received by the Ably, as milliseconds since the epoch.
     * @since 1.1.0
     */
    readonly timestamp?: int64;
}
