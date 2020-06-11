
/**
 * @description Schema Document Properties.
 * @since 2019-12-01
 */
export interface SchemaDocumentProperties {
    /**
     * @description Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
     * @since 2019-12-01
     */
    value?: string;
    /**
     * @description Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
     * @since 2019-12-01
     */
    definitions?: {};
}
