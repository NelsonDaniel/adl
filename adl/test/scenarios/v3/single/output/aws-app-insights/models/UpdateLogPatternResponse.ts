import { ResourceGroupName } from '../aliases/ResourceGroupName';
import { LogPattern } from './LogPattern';
/**
 *
 * @since 2018-11-25
 */
export interface UpdateLogPatternResponse {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName?: ResourceGroupName;
    /**
     * @description The successfully created log pattern.
     * @since 2018-11-25
     */
    LogPattern?: LogPattern;
}
