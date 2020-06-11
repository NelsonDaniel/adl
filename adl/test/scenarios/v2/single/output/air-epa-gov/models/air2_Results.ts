import { air2_Facilities } from './air2_Facilities';
import { air2_MapOutput } from './air2_MapOutput';
/**
 * @description Results Object
 * @since 0.0.0
 */
export interface air2_Results {
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
     * @description Summary count of the number of facilities with a formal enforcement action in the past five years
     * @since 0.0.0
     */
    FEARows: string;
    /**
     * Facilities
     * @description A complex array of facility information.
     * @since 0.0.0
     */
    Facilities?: Array<air2_Facilities>;
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
     *
     * @since 0.0.0
     */
    MapOutput?: air2_MapOutput;
    /**
     * Message
     * @description Field to record messages (typically performance-related) about packet processing
     * @since 0.0.0
     */
    Message: string;
    /**
     * Page Number
     * @description The number of pages of results returned
     * @since 0.0.0
     */
    PageNo: string;
    /**
     * Query Identifier
     * @description Sequential number assigned to entire search result
     * @since 0.0.0
     */
    QueryID: string;
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
