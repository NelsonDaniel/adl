import { RequestReportRecordContract } from './RequestReportRecordContract';
/**
 * @description Paged Report records list representation.
 * @since 2019-12-01
 */
export interface RequestReportCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<RequestReportRecordContract>;
    /**
     * @description Total record count number across all pages.
     * @since 2019-12-01
     */
    count?: int64;
}
