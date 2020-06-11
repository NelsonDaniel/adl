import { air1_ClusterOutput } from './air1_ClusterOutput';
import { air3_Facilities } from './air3_Facilities';
import { qp0 } from './qp0';
/**
 * @description Results Object
 * @since 0.0.0
 */
export interface air3_Results {
    /**
     * @description Identifies which passed query system identifiers are invalid.
     * @since 0.0.0
     */
    BadSystemIDs: string;
    /**
     * @description Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
     * @since 0.0.0
     */
    CVRows: string;
    /**
     *
     * @since 0.0.0
     */
    ClusterOutput?: air1_ClusterOutput;
    /**
     * Cluster Records
     * @description Number of clusters returned.
     * @since 0.0.0
     */
    ClusterRecords?: string;
    /**
     * @description Summary count of the number of facilities with a formal enforcement action in the past five years
     * @since 0.0.0
     */
    FEARows: string;
    /**
     * Facilities
     * @description A complex array of facility information.
     * @since 0.0.0
     */
    Facilities?: Array<air3_Facilities>;
    /**
     * @description Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
     * @since 0.0.0
     */
    INSPRows: string;
    /**
     * Icon Base URL
     * @description URL where all the icons are located
     * @since 0.0.0
     */
    IconBaseURL: string;
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
     * Message
     * @description Field to record messages (typically performance-related) about packet processing
     * @since 0.0.0
     */
    Message: string;
    /**
     * Popup Base URL
     * @description Combine this URL with the PUC to get popup info
     * @since 0.0.0
     */
    PopUpBaseURL: string;
    /**
     * Query Identifier
     * @description Sequential number assigned to entire search result
     * @since 0.0.0
     */
    QueryID: string;
    /**
     * Query Parameters
     * @description A list of submitted query parameters and their values.
     * @since 0.0.0
     */
    QueryParameters: Array<qp0>;
    /**
     * Query Row Count
     * @description Number of query results returned
     * @since 0.0.0
     */
    QueryRows: string;
    /**
     * Significant Violation Result Count
     * @description Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
     * @since 0.0.0
     */
    SVRows: string;
    /**
     * Service Base URL
     * @description The base service URL.
     * @since 0.0.0
     */
    ServiceBaseURL: string;
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
