import { PrivateEndpointConnectionProperties } from './PrivateEndpointConnectionProperties';
import { Resource } from './Resource';
/**
 * @description Private endpoint connection resource.
 * @since 2019-09-01
 */
export interface PrivateEndpointConnection extends Resource {
    /**
     * @description Resource properties.
     * @since 2019-09-01
     */
    properties?: PrivateEndpointConnectionProperties;
}
