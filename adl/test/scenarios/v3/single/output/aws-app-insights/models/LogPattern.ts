import { LogPatternSetName } from '../aliases/LogPatternSetName';
import { LogPatternName } from '../aliases/LogPatternName';
import { LogPatternRegex } from '../aliases/LogPatternRegex';
import { LogPatternRank } from '../aliases/LogPatternRank';
/**
 * @description An object that defines the log patterns that belongs to a <code>LogPatternSet</code>.
 * @since 2018-11-25
 */
export interface LogPattern {
    /**
     * @description The name of the log pattern. A log pattern name can contains at many as 30 characters, and it cannot be empty. The characters can be Unicode letters, digits or one of the following symbols: period, dash, underscore.
     * @since 2018-11-25
     */
    PatternSetName?: LogPatternSetName;
    /**
     * @description The name of the log pattern. A log pattern name can contains at many as 50 characters, and it cannot be empty. The characters can be Unicode letters, digits or one of the following symbols: period, dash, underscore.
     * @since 2018-11-25
     */
    PatternName?: LogPatternName;
    /**
     * @description A regular expression that defines the log pattern. A log pattern can contains at many as 50 characters, and it cannot be empty.
     * @since 2018-11-25
     */
    Pattern?: LogPatternRegex;
    /**
     * @description Rank of the log pattern.
     * @since 2018-11-25
     */
    Rank?: LogPatternRank;
}
