import { ApiVersionSetContractDetails } from './ApiVersionSetContractDetails';
/**
 * @description Object used to create an API Revision or Version based on an existing API Revision
 */
export interface ApiRevisionInfoContract {
    /**
     * @description Resource identifier of API to be used to create the revision from.
     */
    sourceApiId: string;
    /**
     * @description Version identifier for the new API Version.
     */
    apiVersionName: string & MaxLength<100>;
    /**
     * @description Description of new API Revision.
     */
    apiRevisionDescription: string & MaxLength<256>;
    /**
     * @description Version set details
     */
    apiVersionSet: ApiVersionSetContractDetails;
}