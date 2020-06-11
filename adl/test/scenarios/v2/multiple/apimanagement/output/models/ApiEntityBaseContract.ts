import { AuthenticationSettingsContract } from './AuthenticationSettingsContract';
import { SubscriptionKeyParameterNamesContract } from './SubscriptionKeyParameterNamesContract';
import { ApiType } from '../enums/ApiType';
/**
 * @description API base contract details.
 * @since 2019-12-01
 */
export interface ApiEntityBaseContract {
    /**
     * @description Description of the API. May include HTML formatting tags.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description Collection of authentication settings included into this API.
     * @since 2019-12-01
     */
    authenticationSettings?: AuthenticationSettingsContract;
    /**
     * @description Protocols over which API is made available.
     * @since 2019-12-01
     */
    subscriptionKeyParameterNames?: SubscriptionKeyParameterNamesContract;
    /**
     * @description Type of API.
     * @clientName ApiType
     * @since 2019-12-01
     */
    type?: ApiType;
    /**
     * @description Describes the Revision of the Api. If no value is provided, default revision 1 is created
     * @since 2019-12-01
     */
    apiRevision?: string & MaxLength<100> & MinLength<1>;
    /**
     * @description Indicates the Version identifier of the API if the API is versioned
     * @since 2019-12-01
     */
    apiVersion?: string & MaxLength<100>;
    /**
     * @description Indicates if API revision is current api revision.
     * @since 2019-12-01
     */
    isCurrent?: boolean;
    /**
     * @description Indicates if API revision is accessible via the gateway.
     * @since 2019-12-01
     */
    readonly isOnline?: boolean;
    /**
     * @description Description of the Api Revision.
     * @since 2019-12-01
     */
    apiRevisionDescription?: string & MaxLength<256>;
    /**
     * @description Description of the Api Version.
     * @since 2019-12-01
     */
    apiVersionDescription?: string & MaxLength<256>;
    /**
     * @description A resource identifier for the related ApiVersionSet.
     * @since 2019-12-01
     */
    apiVersionSetId?: string;
    /**
     * @description Specifies whether an API or Product subscription is required for accessing the API.
     * @since 2019-12-01
     */
    subscriptionRequired?: boolean;
}
