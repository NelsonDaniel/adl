
/**
 * @description An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
 * @since 1.1.0
 */
export interface Occupancy {
    /**
     * @description The number of connections that are authorised to enter members into the presence channel.
     * @since 1.1.0
     */
    presenceConnections?: int64;
    /**
     * @description The number of members currently entered into the presence channel.
     * @since 1.1.0
     */
    presenceMembers?: int64;
    /**
     * @description The number of connections that are authorised to subscribe to presence messages.
     * @since 1.1.0
     */
    presenceSubscribers?: int64;
    /**
     * @description The number of connections attached to the channel that are authorised to publish.
     * @since 1.1.0
     */
    publishers?: int64;
    /**
     * @description The number of connections attached that are authorised to subscribe to messages.
     * @since 1.1.0
     */
    subscribers?: int64;
}
