import { Point } from './Point';
/**
 *
 * @since 2.3
 */
export interface Geo {
    /**
     *
     * @since 2.3
     */
    bbox: Array<double & Minimum<-180> & Maximum<180>> & MaximumElements<4> & MinimumElements<4>;
    /**
     *
     * @since 2.3
     */
    geometry?: Point;
    /**
     *
     * @since 2.3
     */
    properties: {};
    /**
     *
     * @since 2.3
     */
    type: "Feature";
}
