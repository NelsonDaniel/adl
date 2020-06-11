import { TagContractProperties } from './TagContractProperties';
/**
 * @description Parameters supplied to Create/Update Tag operations.
 * @since 2019-12-01
 */
export interface TagCreateUpdateParameters {
    /**
     * @description Properties supplied to Create Tag operation.
     * @since 2019-12-01
     */
    properties?: TagContractProperties;
}
