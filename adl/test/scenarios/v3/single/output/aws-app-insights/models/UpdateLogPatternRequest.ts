import { ResourceGroupName } from '../aliases/ResourceGroupName';
import { LogPatternSetName } from '../aliases/LogPatternSetName';
import { LogPatternName } from '../aliases/LogPatternName';
import { LogPatternRegex } from '../aliases/LogPatternRegex';
import { LogPatternRank } from '../aliases/LogPatternRank';
/**
 * UpdateLogPatternRequest
 * @since 2018-11-25
 */
export interface UpdateLogPatternRequest {
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
    /**
     * @description The log pattern.
     * @since 2018-11-25
     */
    Pattern?: LogPatternRegex;
    /**
     * @description Rank of the log pattern.
     * @since 2018-11-25
     */
    Rank?: LogPatternRank;
}
