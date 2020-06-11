import { LogPattern } from './LogPattern';
import { ResourceGroupName } from '../aliases/ResourceGroupName';
/**
 *
 * @since 2018-11-25
 */
export interface CreateLogPatternResponse {
    /**
     * @description The successfully created log pattern.
     * @since 2018-11-25
     */
    LogPattern?: LogPattern;
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName?: ResourceGroupName;
}
