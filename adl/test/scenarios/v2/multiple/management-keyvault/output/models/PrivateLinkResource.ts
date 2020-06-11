import { PrivateLinkResourceProperties } from './PrivateLinkResourceProperties';
import { Resource } from './Resource';
/**
 * @description A private link resource
 * @since 2019-09-01
 */
export interface PrivateLinkResource extends Resource {
    /**
     * @description Resource properties.
     * @since 2019-09-01
     */
    properties?: PrivateLinkResourceProperties;
}
