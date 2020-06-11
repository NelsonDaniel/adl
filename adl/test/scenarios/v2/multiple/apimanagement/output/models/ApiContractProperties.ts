import { Protocol } from '../enums/Protocol';
import { ApiVersionSetContractDetails } from './ApiVersionSetContractDetails';
import { ApiEntityBaseContract } from './ApiEntityBaseContract';
/**
 * @description Api Entity Properties
 * @since 2019-12-01
 */
export interface ApiContractProperties extends ApiEntityBaseContract {
    /**
     * @description API identifier of the source API.
     * @since 2019-12-01
     */
    sourceApiId?: string;
    /**
     * @description API name. Must be 1 to 300 characters long.
     * @since 2019-12-01
     */
    displayName?: string & MaxLength<300> & MinLength<1>;
    /**
     * @description Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
     * @since 2019-12-01
     */
    serviceUrl?: string & MaxLength<2000> & MinLength<0>;
    /**
     * @description Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     * @since 2019-12-01
     */
    path: string & MaxLength<400> & MinLength<0>;
    /**
     * @description Describes on which protocols the operations in this API can be invoked.
     * @since 2019-12-01
     */
    protocols?: Array<Protocol>;
    /**
     * @description Version set details
     * @since 2019-12-01
     */
    apiVersionSet?: ApiVersionSetContractDetails;
}
