import { ApiVersionSetContractDetails } from './ApiVersionSetContractDetails';
/**
 * @description Object used to create an API Revision or Version based on an existing API Revision
 * @since 2019-12-01
 */
export interface ApiRevisionInfoContract {
    /**
     * @description Resource identifier of API to be used to create the revision from.
     * @since 2019-12-01
     */
    sourceApiId?: string;
    /**
     * @description Version identifier for the new API Version.
     * @since 2019-12-01
     */
    apiVersionName?: string & MaxLength<100>;
    /**
     * @description Description of new API Revision.
     * @since 2019-12-01
     */
    apiRevisionDescription?: string & MaxLength<256>;
    /**
     * @description Version set details
     * @since 2019-12-01
     */
    apiVersionSet?: ApiVersionSetContractDetails;
}
