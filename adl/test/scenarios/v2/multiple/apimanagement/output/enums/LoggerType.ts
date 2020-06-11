
/**
 * @extensible
 * @description Logger type.
 * @since 2019-12-01
 */
export enum LoggerType {
    /**
     *
     * @description Azure Event Hub as log destination.
     */
    azureEventHub = 'azureEventHub',
    /**
     *
     * @description Azure Application Insights as log destination.
     */
    applicationInsights = 'applicationInsights'
}
