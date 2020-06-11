import { OperationProperties } from './OperationProperties';
/**
 * @description Key Vault REST API operation definition.
 * @since 2019-09-01
 */
export interface Operation {
    /**
     * @description Operation name: {provider}/{resource}/{operation}
     * @since 2019-09-01
     */
    name?: string;
    /**
     * @description Display metadata associated with the operation.
     * @since 2019-09-01
     */
    display?: {
        /**
         * @description Service provider: Microsoft Key Vault.
         * @since 2019-09-01
         */
        provider?: string;
        /**
         * @description Resource on which the operation is performed etc.
         * @since 2019-09-01
         */
        resource?: string;
        /**
         * @description Type of operation: get, read, delete, etc.
         * @since 2019-09-01
         */
        operation?: string;
        /**
         * @description Description of operation.
         * @since 2019-09-01
         */
        description?: string;
    };
    /**
     * @description The origin of operations.
     * @since 2019-09-01
     */
    origin?: string;
    /**
     * @description Properties of operation, include metric specifications.
     * @clientName OperationProperties
     * @since 2019-09-01
     */
    properties?: OperationProperties;
}
