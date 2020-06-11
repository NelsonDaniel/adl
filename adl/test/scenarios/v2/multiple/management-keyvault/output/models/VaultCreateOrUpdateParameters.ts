import { VaultProperties } from './VaultProperties';
/**
 * @description Parameters for creating or updating a vault
 * @since 2019-09-01
 */
export interface VaultCreateOrUpdateParameters {
    /**
     * @description The supported Azure location where the key vault should be created.
     * @since 2019-09-01
     */
    location: string;
    /**
     * @description The tags that will be assigned to the key vault.
     * @since 2019-09-01
     */
    tags?: Dictionary<string>;
    /**
     * @description Properties of the vault
     * @since 2019-09-01
     */
    properties: VaultProperties;
}
