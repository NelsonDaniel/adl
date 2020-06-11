
/**
 * @description Region profile.
 * @since 2019-12-01
 */
export interface RegionContract {
    /**
     * @description Region name.
     * @since 2019-12-01
     */
    readonly name?: string;
    /**
     * @description whether Region is the master region.
     * @since 2019-12-01
     */
    isMasterRegion?: boolean;
    /**
     * @description whether Region is deleted.
     * @since 2019-12-01
     */
    isDeleted?: boolean;
}
