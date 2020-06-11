import { LoggerContractProperties } from './LoggerContractProperties';
import { Resource } from './Resource';
/**
 * @description Logger details.
 * @since 2019-12-01
 */
export interface LoggerContract extends Resource {
    /**
     * @description Logger entity contract properties.
     * @since 2019-12-01
     */
    properties?: LoggerContractProperties;
}
