import { OpenidConnectProviderContractProperties } from './OpenidConnectProviderContractProperties';
import { Resource } from './Resource';
/**
 * @description OpenId Connect Provider details.
 * @since 2019-12-01
 */
export interface OpenidConnectProviderContract extends Resource {
    /**
     * @description OpenId Connect Provider contract properties.
     * @since 2019-12-01
     */
    properties?: OpenidConnectProviderContractProperties;
}
