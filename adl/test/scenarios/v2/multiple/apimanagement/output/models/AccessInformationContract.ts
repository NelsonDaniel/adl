
/**
 * @description Tenant access information contract of the API Management service.
 * @since 2019-12-01
 */
export interface AccessInformationContract {
    /**
     * @description Identifier.
     * @since 2019-12-01
     */
    id?: string;
    /**
     * @description Primary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     * @since 2019-12-01
     */
    primaryKey?: string;
    /**
     * @description Secondary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     * @since 2019-12-01
     */
    secondaryKey?: string;
    /**
     * @description Determines whether direct access is enabled.
     * @since 2019-12-01
     */
    enabled?: boolean;
}
