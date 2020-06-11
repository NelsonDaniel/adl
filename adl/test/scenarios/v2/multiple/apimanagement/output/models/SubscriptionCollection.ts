import { SubscriptionContract } from './SubscriptionContract';
/**
 * @description Paged Subscriptions list representation.
 * @since 2019-12-01
 */
export interface SubscriptionCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<SubscriptionContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
