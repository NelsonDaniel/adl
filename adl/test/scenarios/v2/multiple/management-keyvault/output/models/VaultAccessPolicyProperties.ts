import { AccessPolicyEntry } from './AccessPolicyEntry';
/**
 * @description Properties of the vault access policy
 * @since 2019-09-01
 */
export interface VaultAccessPolicyProperties {
    /**
     * @description An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
     * @since 2019-09-01
     */
    accessPolicies: Array<AccessPolicyEntry>;
}
