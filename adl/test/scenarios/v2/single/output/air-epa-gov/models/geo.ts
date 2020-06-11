
/**
 * @description GeoJSON Geometry Object
 * @since 0.0.0
 */
export interface geo {
    /**
     * Coordinates Array
     * @description Array of coordinate values in longitude, latitude format.
     * @since 0.0.0
     */
    coordinates: Array<double>;
    /**
     * Geometry
     * @description Indicator of the geometry represented in the GeoJSON Feature, for Echo will always be "Point".
     * @since 0.0.0
     */
    type: string;
}
