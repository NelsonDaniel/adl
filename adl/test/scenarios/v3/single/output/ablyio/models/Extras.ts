import { Push } from './Push';
/**
 * @description Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.
 * @since 1.1.0
 */
export interface Extras {
    /**
     *
     * @since 1.1.0
     */
    push?: Push;
}
