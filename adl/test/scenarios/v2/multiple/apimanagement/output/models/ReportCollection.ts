import { ReportRecordContract } from './ReportRecordContract';
/**
 * @description Paged Report records list representation.
 * @since 2019-12-01
 */
export interface ReportCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<ReportRecordContract>;
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
