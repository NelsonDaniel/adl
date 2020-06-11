import { ContentFormat } from '../enums/ContentFormat';
import { SoapApiType } from '../enums/SoapApiType';
import { ApiContractProperties } from './ApiContractProperties';
/**
 * @description Api Create or Update Properties.
 * @since 2019-12-01
 */
export interface ApiCreateOrUpdateProperties extends ApiContractProperties {
    /**
     * @description Content value when Importing an API.
     * @since 2019-12-01
     */
    value?: string;
    /**
     * Content format
     * @description Format of the Content in which the API is getting imported.
     * @since 2019-12-01
     */
    format?: ContentFormat;
    /**
     * @description Criteria to limit import of WSDL to a subset of the document.
     * @since 2019-12-01
     */
    wsdlSelector?: {
        /**
         * @description Name of service to import from WSDL
         * @since 2019-12-01
         */
        wsdlServiceName?: string;
        /**
         * @description Name of endpoint(port) to import from WSDL
         * @since 2019-12-01
         */
        wsdlEndpointName?: string;
    };
    /**
     * @description Type of Api to create.
     *  * `http` creates a SOAP to REST API
     *  * `soap` creates a SOAP pass-through API .
     * @clientName SoapApiType
     * @since 2019-12-01
     */
    apiType?: SoapApiType;
}
