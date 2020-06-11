
/**
 * @description Cluster Data Object
 * @since 0.0.0
 */
export interface air1_ClusterData {
    /**
     * @description Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
     * @since 0.0.0
     */
    CVRows: string;
    /**
     * Cluster Count
     * @description The number of facilities or cases in the cluster.
     * @since 0.0.0
     */
    ClusterCount: string;
    /**
     * Cluster Icon
     * @description The icon file used to reprsent the cluster.
     * @since 0.0.0
     */
    ClusterIcon: string;
    /**
     * Cluster Latitude
     * @description The latitude in decimal degrees expressed using the NAD83 horizontal datum.
     * @since 0.0.0
     */
    ClusterLatitude: string;
    /**
     * Cluster Longitude
     * @description The longitude in decimal degrees expressed using the NAD83 horizontal datum.
     * @since 0.0.0
     */
    ClusterLongitude: string;
    /**
     * Cluster Name
     * @description THe name or the identifier of the geographic area used for clustering.  Examples:  Alaska, Fairfax County, 22314
     * @since 0.0.0
     */
    ClusterName: string;
    /**
     * Cluster Type
     * @description The representative geographic area used for clustering.  Examples:  State, County, Zip Code
     * @since 0.0.0
     */
    ClusterType: string;
    /**
     * Cluster Value
     * @description The value, internal to the database report object, that represents this cluster, like a state abbreviation, zip code, or county FIPS code.  Examples: AK, 22314, 50011
     * @since 0.0.0
     */
    ClusterValue: string;
    /**
     * EPA Region Code
     * @description The EPA region where the facility is located. EPA has 10 regional offices that execute programs within several states and territories
     * @since 0.0.0
     */
    EPARegionCode: string;
    /**
     * @description Summary count of the number of facilities with a formal enforcement action in the past five years
     * @since 0.0.0
     */
    FEARows: string;
    /**
     * @description Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
     * @since 0.0.0
     */
    INSPRows: string;
    /**
     * Indian Country Row Count
     * @description Number of facilities with tribal_flag populated
     * @since 0.0.0
     */
    IndianCountryRows: string;
    /**
     * @description Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
     * @since 0.0.0
     */
    InfFEARows: string;
    /**
     * Object Identifier
     * @description Sequential number assigned to each facility or cluster returned.
     * @since 0.0.0
     */
    ObjectId: string;
    /**
     * Significant Violation Result Count
     * @description Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
     * @since 0.0.0
     */
    SVRows: string;
    /**
     * Total Penalties
     * @description The total dollar amount of either assessed or final penalties within the five year time period
     * @since 0.0.0
     */
    TotalPenalties: string;
    /**
     * @description Number of facilities having one or more quarters in non-compliance (QNC) in the last three years
     * @since 0.0.0
     */
    V3Rows: string;
}
