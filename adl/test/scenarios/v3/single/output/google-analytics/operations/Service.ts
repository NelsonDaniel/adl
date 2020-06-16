export interface Service {
    /**
     * @description Returns Analytics report data for a view (profile).
     * @since v2.4
     * @http GET /data
     * @tag data
     * @param alt - Data format for the response.
     * @param fields - Selector specifying which fields to include in a partial response.
     * @param key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * @param oauth_token - OAuth 2.0 token for the current user.
     * @param prettyPrint - Returns response with indentations and line breaks.
     * @param quotaUser - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     * @param userIp - Deprecated. Please use quotaUser instead.
     * @param ids - Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     * @param start_date - Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD.
     * @param end_date - End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD.
     * @param metrics - A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified to retrieve a valid Analytics report.
     * @param dimensions - A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
     * @param filters - A comma-separated list of dimension or metric filters to be applied to the report data.
     * @param max_results - The maximum number of entries to include in this feed.
     * @param segment - An Analytics advanced segment to be applied to the report data.
     * @param sort - A comma-separated list of dimensions or metrics that determine the sort order for the report data.
     * @param start_index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return 200| - Successful response
     */
    'analytics.data.get'(alt?: Query<"atom">, fields?: Query<string>, key?: Query<string>, oauth_token?: Query<string>, prettyPrint?: Query<boolean>, quotaUser?: Query<string>, userIp?: Query<string>, ids: Query<string>, start_date: Query<string, 'start-date'>, end_date: Query<string, 'end-date'>, metrics: Query<string>, dimensions?: Query<string>, filters?: Query<string>, max_results?: Query<int64, 'max-results'>, segment?: Query<string>, sort?: Query<string>, start_index?: Query<int64 & Minimum<1>, 'start-index'>): [(code: 200) => {}];
    /**
     * @description Lists all accounts to which the user has access.
     * @since v2.4
     * @http GET /management/accounts
     * @tag management
     * @param alt - Data format for the response.
     * @param fields - Selector specifying which fields to include in a partial response.
     * @param key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * @param oauth_token - OAuth 2.0 token for the current user.
     * @param prettyPrint - Returns response with indentations and line breaks.
     * @param quotaUser - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     * @param userIp - Deprecated. Please use quotaUser instead.
     * @param max_results - The maximum number of accounts to include in this response.
     * @param start_index - An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return 200| - Successful response
     */
    'analytics.management.accounts.list'(alt?: Query<"atom">, fields?: Query<string>, key?: Query<string>, oauth_token?: Query<string>, prettyPrint?: Query<boolean>, quotaUser?: Query<string>, userIp?: Query<string>, max_results?: Query<int64, 'max-results'>, start_index?: Query<int64 & Minimum<1>, 'start-index'>): [(code: 200) => {}];
    /**
     * @description Lists web properties to which the user has access.
     * @since v2.4
     * @http GET /management/accounts/{accountId}/webproperties
     * @tag management
     * @param alt - Data format for the response.
     * @param fields - Selector specifying which fields to include in a partial response.
     * @param key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * @param oauth_token - OAuth 2.0 token for the current user.
     * @param prettyPrint - Returns response with indentations and line breaks.
     * @param quotaUser - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     * @param userIp - Deprecated. Please use quotaUser instead.
     * @param accountId - Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     * @param max_results - The maximum number of web properties to include in this response.
     * @param start_index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return 200| - Successful response
     */
    'analytics.management.webproperties.list'(alt?: Query<"atom">, fields?: Query<string>, key?: Query<string>, oauth_token?: Query<string>, prettyPrint?: Query<boolean>, quotaUser?: Query<string>, userIp?: Query<string>, accountId: string, max_results?: Query<int64, 'max-results'>, start_index?: Query<int64 & Minimum<1>, 'start-index'>): [(code: 200) => {}];
    /**
     * @description Lists views (profiles) to which the user has access.
     * @since v2.4
     * @http GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles
     * @tag management
     * @param alt - Data format for the response.
     * @param fields - Selector specifying which fields to include in a partial response.
     * @param key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * @param oauth_token - OAuth 2.0 token for the current user.
     * @param prettyPrint - Returns response with indentations and line breaks.
     * @param quotaUser - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     * @param userIp - Deprecated. Please use quotaUser instead.
     * @param accountId - Account ID for the views (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
     * @param webPropertyId - Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
     * @param max_results - The maximum number of views (profiles) to include in this response.
     * @param start_index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return 200| - Successful response
     */
    'analytics.management.profiles.list'(alt?: Query<"atom">, fields?: Query<string>, key?: Query<string>, oauth_token?: Query<string>, prettyPrint?: Query<boolean>, quotaUser?: Query<string>, userIp?: Query<string>, accountId: string, webPropertyId: string, max_results?: Query<int64, 'max-results'>, start_index?: Query<int64 & Minimum<1>, 'start-index'>): [(code: 200) => {}];
    /**
     * @description Lists goals to which the user has access.
     * @since v2.4
     * @http GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals
     * @tag management
     * @param alt - Data format for the response.
     * @param fields - Selector specifying which fields to include in a partial response.
     * @param key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * @param oauth_token - OAuth 2.0 token for the current user.
     * @param prettyPrint - Returns response with indentations and line breaks.
     * @param quotaUser - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     * @param userIp - Deprecated. Please use quotaUser instead.
     * @param accountId - Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     * @param webPropertyId - Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     * @param profileId - View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
     * @param max_results - The maximum number of goals to include in this response.
     * @param start_index - An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return 200| - Successful response
     */
    'analytics.management.goals.list'(alt?: Query<"atom">, fields?: Query<string>, key?: Query<string>, oauth_token?: Query<string>, prettyPrint?: Query<boolean>, quotaUser?: Query<string>, userIp?: Query<string>, accountId: string, webPropertyId: string, profileId: string, max_results?: Query<int64, 'max-results'>, start_index?: Query<int64 & Minimum<1>, 'start-index'>): [(code: 200) => {}];
    /**
     * @description Lists advanced segments to which the user has access.
     * @since v2.4
     * @http GET /management/segments
     * @tag management
     * @param alt - Data format for the response.
     * @param fields - Selector specifying which fields to include in a partial response.
     * @param key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * @param oauth_token - OAuth 2.0 token for the current user.
     * @param prettyPrint - Returns response with indentations and line breaks.
     * @param quotaUser - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     * @param userIp - Deprecated. Please use quotaUser instead.
     * @param max_results - The maximum number of advanced segments to include in this response.
     * @param start_index - An index of the first advanced segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return 200| - Successful response
     */
    'analytics.management.segments.list'(alt?: Query<"atom">, fields?: Query<string>, key?: Query<string>, oauth_token?: Query<string>, prettyPrint?: Query<boolean>, quotaUser?: Query<string>, userIp?: Query<string>, max_results?: Query<int64, 'max-results'>, start_index?: Query<int64 & Minimum<1>, 'start-index'>): [(code: 200) => {}];
}
