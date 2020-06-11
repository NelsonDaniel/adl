import { Protocol } from '../enums/Protocol';
import { ApiEntityBaseContract } from './ApiEntityBaseContract';
/**
 * @description API contract properties for the Tag Resources.
 * @since 2019-12-01
 */
export interface ApiTagResourceContractProperties extends ApiEntityBaseContract {
    /**
     * @description API identifier in the form /apis/{apiId}.
     * @since 2019-12-01
     */
    id?: string;
    /**
     * @description API name.
     * @since 2019-12-01
     */
    name?: string & MaxLength<300> & MinLength<1>;
    /**
     * @description Absolute URL of the backend service implementing this API.
     * @since 2019-12-01
     */
    serviceUrl?: string & MaxLength<2000> & MinLength<1>;
    /**
     * @description Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     * @since 2019-12-01
     */
    path?: string & MaxLength<400> & MinLength<0>;
    /**
     * @description Describes on which protocols the operations in this API can be invoked.
     * @since 2019-12-01
     */
    protocols?: Array<Protocol>;
}
