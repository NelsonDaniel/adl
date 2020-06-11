import { SubscriptionState } from '../enums/SubscriptionState';
/**
 * @description Parameters supplied to the Create subscription operation.
 * @since 2019-12-01
 */
export interface SubscriptionCreateParameterProperties {
    /**
     * @description User (user id path) for whom subscription is being created in form /users/{userId}
     * @since 2019-12-01
     */
    ownerId?: string;
    /**
     * @description Scope like /products/{productId} or /apis or /apis/{apiId}.
     * @since 2019-12-01
     */
    scope: string;
    /**
     * @description Subscription name.
     * @since 2019-12-01
     */
    displayName: string & MaxLength<100> & MinLength<1>;
    /**
     * @description Primary subscription key. If not specified during request key will be generated automatically.
     * @since 2019-12-01
     */
    primaryKey?: string & MaxLength<256> & MinLength<1>;
    /**
     * @description Secondary subscription key. If not specified during request key will be generated automatically.
     * @since 2019-12-01
     */
    secondaryKey?: string & MaxLength<256> & MinLength<1>;
    /**
     * @description Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
     * @since 2019-12-01
     */
    state?: SubscriptionState;
    /**
     * @description Determines whether tracing can be enabled
     * @since 2019-12-01
     */
    allowTracing?: boolean;
}
