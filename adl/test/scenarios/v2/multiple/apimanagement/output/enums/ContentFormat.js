"use strict";
exports.__esModule = true;
exports.ContentFormat = void 0;
/**
 * Content format
 * @extensible
 * @description Format of the Content in which the API is getting imported.
 * @since 2019-12-01
 */
var ContentFormat;
(function (ContentFormat) {
    /** The contents are inline and Content type is a WADL document. */
    ContentFormat["wadl-xml"] = "wadl-xml";
    /** The WADL document is hosted on a publicly accessible internet address. */
    ContentFormat["wadl-link-json"] = "wadl-link-json";
    /** The contents are inline and Content Type is a OpenApi 2.0 Document. */
    ContentFormat["swagger-json"] = "swagger-json";
    /** The Open Api 2.0 document is hosted on a publicly accessible internet address. */
    ContentFormat["swagger-link-json"] = "swagger-link-json";
    /** The contents are inline and the document is a WSDL/Soap document. */
    ContentFormat["wsdl"] = "wsdl";
    /** The WSDL document is hosted on a publicly accessible internet address. */
    ContentFormat["wsdl-link"] = "wsdl-link";
    /** The contents are inline and Content Type is a OpenApi 3.0 Document in YAML format. */
    ContentFormat["openapi"] = "openapi";
    /** The contents are inline and Content Type is a OpenApi 3.0 Document in JSON format. */
    ContentFormat["openapi+json"] = "openapi+json";
    /** The Open Api 3.0 document is hosted on a publicly accessible internet address. */
    ContentFormat["openapi-link"] = "openapi-link";
    /** The Open Api 3.0 Json document is hosted on a publicly accessible internet address. */
    ContentFormat["openapi+json-link"] = "openapi+json-link";
})(ContentFormat = exports.ContentFormat || (exports.ContentFormat = {}));
