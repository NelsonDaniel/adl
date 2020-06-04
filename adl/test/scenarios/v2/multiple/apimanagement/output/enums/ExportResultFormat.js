"use strict";
exports.__esModule = true;
exports.ExportResultFormat = void 0;
/**
 * @extensible
 * @description Format in which the Api Details are exported to the Storage Blob with Sas Key valid for 5 minutes.
 * @since 2019-12-01
 */
var ExportResultFormat;
(function (ExportResultFormat) {
    /** The Api Definition is exported in OpenApi Specification 2.0 format to the Storage Blob. */
    ExportResultFormat["Swagger"] = "swagger-link-json";
    /** The Api Definition is exported in WSDL Schema to Storage Blob. This is only supported for APIs of Type `soap` */
    ExportResultFormat["Wsdl"] = "wsdl-link+xml";
    /** Export the Api Definition in WADL Schema to Storage Blob. */
    ExportResultFormat["Wadl"] = "wadl-link-json";
    /** Export the Api Definition in OpenApi Specification 3.0 to Storage Blob. */
    ExportResultFormat["OpenApi"] = "openapi-link";
})(ExportResultFormat = exports.ExportResultFormat || (exports.ExportResultFormat = {}));
