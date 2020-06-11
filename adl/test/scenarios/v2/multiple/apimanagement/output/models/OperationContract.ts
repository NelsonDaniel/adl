import { OperationContractProperties } from './OperationContractProperties';
import { Resource } from './Resource';
/**
 * @description Api Operation details.
 * @since 2019-12-01
 */
export interface OperationContract extends Resource {
    /**
     * @description Properties of the Operation Contract.
     * @since 2019-12-01
     */
    properties?: OperationContractProperties;
}
