"use strict";
exports.__esModule = true;
exports.versioningScheme = void 0;
/**
 * @extensible
 * @description An value that determines where the API Version identifer will be located in a HTTP request.
 * @todo temporary-reuse-marker
 * @since 2019-12-01
 */
var versioningScheme;
(function (versioningScheme) {
    /** The API Version is passed in a path segment. */
    versioningScheme["Segment"] = "Segment";
    /** The API Version is passed in a query parameter. */
    versioningScheme["Query"] = "Query";
    /** The API Version is passed in a HTTP header. */
    versioningScheme["Header"] = "Header";
})(versioningScheme = exports.versioningScheme || (exports.versioningScheme = {}));
