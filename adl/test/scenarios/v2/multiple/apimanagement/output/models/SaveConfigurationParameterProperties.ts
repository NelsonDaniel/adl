
/**
 * @description Parameters supplied to the Save Tenant Configuration operation.
 * @since 2019-12-01
 */
export interface SaveConfigurationParameterProperties {
    /**
     * @description The name of the Git branch in which to commit the current configuration snapshot.
     * @since 2019-12-01
     */
    branch: string;
    /**
     * @description The value if true, the current configuration database is committed to the Git repository, even if the Git repository has newer changes that would be overwritten.
     * @since 2019-12-01
     */
    force?: boolean;
}
