
/**
 * @description Quota counter value details.
 * @since 2019-12-01
 */
export interface QuotaCounterValueContractProperties {
    /**
     * @description Number of times Counter was called.
     * @since 2019-12-01
     */
    callsCount?: int32;
    /**
     * @description Data Transferred in KiloBytes.
     * @since 2019-12-01
     */
    kbTransferred?: double;
}
