import { RegionContract } from './RegionContract';
/**
 * @description Lists Regions operation response details.
 * @since 2019-12-01
 */
export interface RegionListResult {
    /**
     * @description Lists of Regions.
     * @since 2019-12-01
     */
    value?: Array<RegionContract>;
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
