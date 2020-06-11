
/**
 * @description Api Version set base parameters
 * @since 2019-12-01
 */
export interface ApiVersionSetEntityBase {
    /**
     * @description Description of API Version Set.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     * @since 2019-12-01
     */
    versionQueryName?: string & MaxLength<100> & MinLength<1>;
    /**
     * @description Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     * @since 2019-12-01
     */
    versionHeaderName?: string & MaxLength<100> & MinLength<1>;
}
