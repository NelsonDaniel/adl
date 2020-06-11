import { ResourceGroupName } from '../aliases/ResourceGroupName';
import { LogPatternSetName } from '../aliases/LogPatternSetName';
import { LogPatternName } from '../aliases/LogPatternName';
/**
 * DeleteLogPatternRequest
 * @since 2018-11-25
 */
export interface DeleteLogPatternRequest {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName: ResourceGroupName;
    /**
     * @description The name of the log pattern set.
     * @since 2018-11-25
     */
    PatternSetName: LogPatternSetName;
    /**
     * @description The name of the log pattern.
     * @since 2018-11-25
     */
    PatternName: LogPatternName;
}
