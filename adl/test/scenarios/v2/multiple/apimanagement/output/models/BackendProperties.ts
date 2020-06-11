import { BackendServiceFabricClusterProperties } from './BackendServiceFabricClusterProperties';
/**
 * @description Properties specific to the Backend Type.
 * @since 2019-12-01
 */
export interface BackendProperties {
    /**
     * @description Backend Service Fabric Cluster Properties
     * @since 2019-12-01
     */
    serviceFabricCluster?: BackendServiceFabricClusterProperties;
}
