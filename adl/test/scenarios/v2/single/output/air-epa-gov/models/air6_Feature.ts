import { geo } from './geo';
import { air6_properties } from './air6_properties';
/**
 * @description GeoJSON Feature Object
 * @since 0.0.0
 */
export interface air6_Feature {
    /**
     *
     * @since 0.0.0
     */
    geometry: geo;
    /**
     *
     * @since 0.0.0
     */
    properties: air6_properties;
    /**
     * Feature
     * @description Static marker indicating object is a GeoJSON Feature.
     * @since 0.0.0
     */
    type: string;
}
