import { LoggerContract } from './LoggerContract';
/**
 * @description Paged Logger list representation.
 * @since 2019-12-01
 */
export interface LoggerCollection {
    /**
     * @description Logger values.
     * @since 2019-12-01
     */
    value?: Array<LoggerContract>;
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
