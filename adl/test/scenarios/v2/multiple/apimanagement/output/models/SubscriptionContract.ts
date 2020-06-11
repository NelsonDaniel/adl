import { SubscriptionContractProperties } from './SubscriptionContractProperties';
import { Resource } from './Resource';
/**
 * @description Subscription details.
 * @since 2019-12-01
 */
export interface SubscriptionContract extends Resource {
    /**
     * @description Subscription contract properties.
     * @since 2019-12-01
     */
    properties?: SubscriptionContractProperties;
}
