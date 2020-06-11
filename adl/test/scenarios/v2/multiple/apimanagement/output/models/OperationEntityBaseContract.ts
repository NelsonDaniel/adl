import { ParameterContract } from './ParameterContract';
import { RequestContract } from './RequestContract';
import { ResponseContract } from './ResponseContract';
/**
 * @description Api Operation Entity Base Contract details.
 * @since 2019-12-01
 */
export interface OperationEntityBaseContract {
    /**
     * @description Collection of URL template parameters.
     * @since 2019-12-01
     */
    templateParameters?: Array<ParameterContract>;
    /**
     * @description Description of the operation. May include HTML formatting tags.
     * @since 2019-12-01
     */
    description?: string & MaxLength<1000>;
    /**
     * @description An entity containing request details.
     * @since 2019-12-01
     */
    request?: RequestContract;
    /**
     * @description Array of Operation responses.
     * @since 2019-12-01
     */
    responses?: Array<ResponseContract>;
    /**
     * @description Operation Policies
     * @since 2019-12-01
     */
    policies?: string;
}
