"use strict";
exports.__esModule = true;
exports.ProductState = void 0;
/**
 * @description whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
 * @since 2019-12-01
 */
var ProductState;
(function (ProductState) {
    /**
     *
     */
    ProductState["notPublished"] = "notPublished";
    /**
     *
     */
    ProductState["published"] = "published";
})(ProductState = exports.ProductState || (exports.ProductState = {}));
