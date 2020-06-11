
/**
 * @extensible
 * @description An value that determines where the API Version identifer will be located in a HTTP request.
 * @since 2019-12-01
 */
export enum versioningScheme {
    /**
     *
     * @description The API Version is passed in a path segment.
     */
    Segment = 'Segment',
    /**
     *
     * @description The API Version is passed in a query parameter.
     */
    Query = 'Query',
    /**
     *
     * @description The API Version is passed in a HTTP header.
     */
    Header = 'Header'
}
