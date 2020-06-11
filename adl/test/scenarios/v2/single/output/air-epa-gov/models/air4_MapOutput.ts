import { air1_MapData } from './air1_MapData';
/**
 * @description Map Output Object
 * @since 0.0.0
 */
export interface air4_MapOutput {
    /**
     * Icon Base URL
     * @description URL where all the icons are located
     * @since 0.0.0
     */
    IconBaseURL: string;
    /**
     * Map Data
     * @description An array of facility geospatial information.
     * @since 0.0.0
     */
    MapData: Array<air1_MapData>;
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
}
