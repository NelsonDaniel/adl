
/**
 * @description An API Version Set contains the common configuration for a set of API Versions relating
 * @since 2019-12-01
 */
export interface ApiVersionSetContractDetails {
    /**
     * @description Identifier for existing API Version Set. Omit this value to create a new Version Set.
     * @since 2019-12-01
     */
    id?: string;
    /**
     * @description The display Name of the API Version Set.
     * @since 2019-12-01
     */
    name?: string;
    /**
     * @description Description of API Version Set.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description An value that determines where the API Version identifer will be located in a HTTP request.
     * @since 2019-12-01
     */
    versioningScheme?: "Segment" | "Query" | "Header";
    /**
     * @description Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     * @since 2019-12-01
     */
    versionQueryName?: string;
    /**
     * @description Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     * @since 2019-12-01
     */
    versionHeaderName?: string;
}
