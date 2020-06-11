import { SchemaDocumentProperties } from './SchemaDocumentProperties';
/**
 * @description API Schema create or update contract Properties.
 * @since 2019-12-01
 */
export interface SchemaContractProperties {
    /**
     * @description Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
     * @since 2019-12-01
     */
    contentType: string;
    /**
     * @description Create or update Properties of the Schema Document.
     * @since 2019-12-01
     */
    document?: SchemaDocumentProperties;
}
