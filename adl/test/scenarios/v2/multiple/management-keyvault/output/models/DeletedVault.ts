import { DeletedVaultProperties } from './DeletedVaultProperties';
/**
 * @description Deleted vault information with extended details.
 * @since 2019-09-01
 */
export interface DeletedVault {
    /**
     * @description The resource ID for the deleted key vault.
     * @since 2019-09-01
     */
    readonly id?: string;
    /**
     * @description The name of the key vault.
     * @since 2019-09-01
     */
    readonly name?: string;
    /**
     * @description The resource type of the key vault.
     * @since 2019-09-01
     */
    readonly type?: string;
    /**
     * @description Properties of the vault
     * @since 2019-09-01
     */
    properties?: DeletedVaultProperties;
}
