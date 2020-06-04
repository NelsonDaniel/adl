"use strict";
exports.__esModule = true;
exports.PolicyContentFormat = void 0;
/**
 * @extensible
 * @description Format of the policyContent.
 * @since 2019-12-01
 */
var PolicyContentFormat;
(function (PolicyContentFormat) {
    /** The contents are inline and Content type is an XML document. */
    PolicyContentFormat["xml"] = "xml";
    /** The policy XML document is hosted on a http endpoint accessible from the API Management service. */
    PolicyContentFormat["xml-link"] = "xml-link";
    /** The contents are inline and Content type is a non XML encoded policy document. */
    PolicyContentFormat["rawxml"] = "rawxml";
    /** The policy document is not Xml encoded and is hosted on a http endpoint accessible from the API Management service. */
    PolicyContentFormat["rawxml-link"] = "rawxml-link";
})(PolicyContentFormat = exports.PolicyContentFormat || (exports.PolicyContentFormat = {}));
