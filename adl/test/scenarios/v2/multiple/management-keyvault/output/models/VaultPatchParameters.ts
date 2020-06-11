import { VaultPatchProperties } from './VaultPatchProperties';
/**
 * @description Parameters for creating or updating a vault
 * @since 2019-09-01
 */
export interface VaultPatchParameters {
    /**
     * @description The tags that will be assigned to the key vault.
     * @since 2019-09-01
     */
    tags?: Dictionary<string>;
    /**
     * @description Properties of the vault
     * @since 2019-09-01
     */
    properties?: VaultPatchProperties;
}
