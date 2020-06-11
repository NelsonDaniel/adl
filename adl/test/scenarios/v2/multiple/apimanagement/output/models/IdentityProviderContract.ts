import { IdentityProviderContractProperties } from './IdentityProviderContractProperties';
import { Resource } from './Resource';
/**
 * @description Identity Provider details.
 * @since 2019-12-01
 */
export interface IdentityProviderContract extends Resource {
    /**
     * @description Identity Provider contract properties.
     * @since 2019-12-01
     */
    properties?: IdentityProviderContractProperties;
}
