import { ApiContractUpdateProperties } from './ApiContractUpdateProperties';
/**
 * @description API update contract details.
 * @since 2019-12-01
 */
export interface ApiUpdateContract {
    /**
     * @description Properties of the API entity that can be updated.
     * @since 2019-12-01
     */
    properties?: ApiContractUpdateProperties;
}
