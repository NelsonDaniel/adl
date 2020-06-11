
/**
 * @extensible
 * @description Type of Api to create.
 *  * `http` creates a SOAP to REST API
 *  * `soap` creates a SOAP pass-through API .
 * @clientName SoapApiType
 * @since 2019-12-01
 */
export enum SoapApiType {
    /**
     *
     * @description Imports a SOAP API having a RESTful front end.
     */
    SoapToRest = 'http',
    /**
     *
     * @description Imports the Soap API having a SOAP front end.
     */
    SoapPassThrough = 'soap'
}
