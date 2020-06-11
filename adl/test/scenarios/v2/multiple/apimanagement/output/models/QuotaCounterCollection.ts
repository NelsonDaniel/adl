import { QuotaCounterContract } from './QuotaCounterContract';
/**
 * @description Paged Quota Counter list representation.
 * @since 2019-12-01
 */
export interface QuotaCounterCollection {
    /**
     * @description Quota counter values.
     * @since 2019-12-01
     */
    value?: Array<QuotaCounterContract>;
    /**
     * @description Total record count number across all pages.
     * @since 2019-12-01
     */
    count?: int64;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
