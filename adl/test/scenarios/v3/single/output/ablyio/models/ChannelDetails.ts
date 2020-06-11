import { ChannelStatus } from './ChannelStatus';
/**
 *
 * @since 1.1.0
 */
export interface ChannelDetails {
    /**
     * @description The required name of the channel including any qualifier, if any.
     * @since 1.1.0
     */
    channelId: string;
    /**
     * @description In events relating to the activity of a channel in a specific region, this optionally identifies whether or not that region is responsible for global coordination of the channel.
     * @since 1.1.0
     */
    isGlobalMaster?: boolean;
    /**
     * @description In events relating to the activity of a channel in a specific region, this optionally identifies the region.
     * @since 1.1.0
     */
    region?: string;
    /**
     *
     * @since 1.1.0
     */
    status?: ChannelStatus;
}
