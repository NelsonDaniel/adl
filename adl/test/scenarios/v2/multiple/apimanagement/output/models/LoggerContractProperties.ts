import { LoggerType } from '../enums/LoggerType';
/**
 * @description The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.
 * @since 2019-12-01
 */
export interface LoggerContractProperties {
    /**
     * @description Logger type.
     * @since 2019-12-01
     */
    loggerType: LoggerType;
    /**
     * @description Logger description.
     * @since 2019-12-01
     */
    description?: string & MaxLength<256>;
    /**
     * @description The name and SendRule connection string of the event hub for azureEventHub logger.
     * Instrumentation key for applicationInsights logger.
     * @since 2019-12-01
     */
    credentials: Dictionary<string>;
    /**
     * @description Whether records are buffered in the logger before publishing. Default is assumed to be true.
     * @since 2019-12-01
     */
    isBuffered?: boolean;
    /**
     * @description Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
     * @since 2019-12-01
     */
    resourceId?: string;
}
