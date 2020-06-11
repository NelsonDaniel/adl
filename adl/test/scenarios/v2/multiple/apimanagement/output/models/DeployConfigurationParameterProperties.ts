
/**
 * @description Parameters supplied to the Deploy Configuration operation.
 * @since 2019-12-01
 */
export interface DeployConfigurationParameterProperties {
    /**
     * @description The name of the Git branch from which the configuration is to be deployed to the configuration database.
     * @since 2019-12-01
     */
    branch: string;
    /**
     * @description The value enforcing deleting subscriptions to products that are deleted in this update.
     * @since 2019-12-01
     */
    force?: boolean;
}
