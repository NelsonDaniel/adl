import { VaultAccessPolicyProperties } from './VaultAccessPolicyProperties';
/**
 * @description Parameters for updating the access policy in a vault
 * @since 2019-09-01
 */
export interface VaultAccessPolicyParameters {
    /**
     * @description The resource id of the access policy.
     * @since 2019-09-01
     */
    readonly id?: string;
    /**
     * @description The resource name of the access policy.
     * @since 2019-09-01
     */
    readonly name?: string;
    /**
     * @description The resource name of the access policy.
     * @since 2019-09-01
     */
    readonly type?: string;
    /**
     * @description The resource type of the access policy.
     * @since 2019-09-01
     */
    readonly location?: string;
    /**
     * @description Properties of the access policy
     * @since 2019-09-01
     */
    properties: VaultAccessPolicyProperties;
}
