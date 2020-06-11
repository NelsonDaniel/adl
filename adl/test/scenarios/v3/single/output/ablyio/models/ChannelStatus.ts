import { Occupancy } from './Occupancy';
/**
 * @description A ChannelStatus instance.
 * @since 1.1.0
 */
export interface ChannelStatus {
    /**
     * @description A required boolean value indicating whether the channel that is the subject of the event is active. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
     * @since 1.1.0
     */
    isActive: boolean;
    /**
     *
     * @since 1.1.0
     */
    occupancy?: Occupancy;
}
