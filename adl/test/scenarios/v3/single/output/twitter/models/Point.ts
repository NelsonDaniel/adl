import { Position } from '../aliases/Position';
/**
 * @description A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.
 * @since 2.3
 */
export interface Point {
    /**
     *
     * @since 2.3
     */
    coordinates: Position;
    /**
     *
     * @since 2.3
     */
    type: "Point";
}
