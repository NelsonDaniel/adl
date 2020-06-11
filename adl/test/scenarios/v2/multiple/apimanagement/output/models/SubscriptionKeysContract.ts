
/**
 * @description Subscription keys.
 * @since 2019-12-01
 */
export interface SubscriptionKeysContract {
    /**
     * @description Subscription primary key.
     * @since 2019-12-01
     */
    primaryKey?: string & MaxLength<256> & MinLength<1>;
    /**
     * @description Subscription secondary key.
     * @since 2019-12-01
     */
    secondaryKey?: string & MaxLength<256> & MinLength<1>;
}
