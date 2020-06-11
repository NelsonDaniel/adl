import { AuthorizationServerContractProperties } from './AuthorizationServerContractProperties';
import { Resource } from './Resource';
/**
 * @description External OAuth authorization server settings.
 * @since 2019-12-01
 */
export interface AuthorizationServerContract extends Resource {
    /**
     * @description Properties of the External OAuth authorization server Contract.
     * @since 2019-12-01
     */
    properties?: AuthorizationServerContractProperties;
}
