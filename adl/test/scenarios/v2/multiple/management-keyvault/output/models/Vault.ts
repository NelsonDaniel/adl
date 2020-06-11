import { VaultProperties } from './VaultProperties';
/**
 * @description Resource information with extended details.
 * @since 2019-09-01
 */
export interface Vault {
    /**
     * @description Fully qualified identifier of the key vault resource.
     * @since 2019-09-01
     */
    readonly id?: string;
    /**
     * @description Name of the key vault resource.
     * @since 2019-09-01
     */
    readonly name?: string;
    /**
     * @description Resource type of the key vault resource.
     * @since 2019-09-01
     */
    readonly type?: string;
    /**
     * @description Azure location of the key vault resource.
     * @since 2019-09-01
     */
    location?: string;
    /**
     * @description Tags assigned to the key vault resource.
     * @since 2019-09-01
     */
    tags?: Dictionary<string>;
    /**
     * @description Properties of the vault
     * @since 2019-09-01
     */
    properties: VaultProperties;
}
