
/**
 * @description Parameters supplied to the Update Cache operation.
 * @since 2019-12-01
 */
export interface CacheUpdateProperties {
    /**
     * @description Cache description
     * @since 2019-12-01
     */
    description?: string & MaxLength<2000>;
    /**
     * @description Runtime connection string to cache
     * @since 2019-12-01
     */
    connectionString?: string & MaxLength<300>;
    /**
     * @description Original uri of entity in external system cache points to
     * @since 2019-12-01
     */
    resourceId?: string & MaxLength<2000>;
}
