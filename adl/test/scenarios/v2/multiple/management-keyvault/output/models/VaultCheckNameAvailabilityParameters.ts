import { Type } from '../enums/Type';
/**
 * @description The parameters used to check the availability of the vault name.
 * @since 2019-09-01
 */
export interface VaultCheckNameAvailabilityParameters {
    /**
     * @description The vault name.
     * @since 2019-09-01
     */
    name: string;
    /**
     * @description The type of resource, Microsoft.KeyVault/vaults
     * @since 2019-09-01
     */
    type: Type;
}
