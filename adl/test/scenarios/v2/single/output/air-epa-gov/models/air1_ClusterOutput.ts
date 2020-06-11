import { air1_ClusterData } from './air1_ClusterData';
/**
 * @description Cluster Output Object
 * @since 0.0.0
 */
export interface air1_ClusterOutput {
    /**
     * Cluster Data
     * @description An array of state, county, or zip code cluster information
     * @since 0.0.0
     */
    ClusterData?: Array<air1_ClusterData>;
}
