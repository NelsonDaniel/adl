import { LoggerType } from '../enums/LoggerType';
/**
 * @description Parameters supplied to the Update Logger operation.
 * @since 2019-12-01
 */
export interface LoggerUpdateParameters {
    /**
     * @description Logger type.
     * @since 2019-12-01
     */
    loggerType?: LoggerType;
    /**
     * @description Logger description.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description Logger credentials.
     * @since 2019-12-01
     */
    credentials?: Dictionary<string>;
    /**
     * @description Whether records are buffered in the logger before publishing. Default is assumed to be true.
     * @since 2019-12-01
     */
    isBuffered?: boolean;
}
