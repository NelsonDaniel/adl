import { Vault } from './Vault';
/**
 * @description List of vaults
 * @since 2019-09-01
 */
export interface VaultListResult {
    /**
     * @description The list of vaults.
     * @since 2019-09-01
     */
    value?: Array<Vault>;
    /**
     * @description The URL to get the next set of vaults.
     * @since 2019-09-01
     */
    nextLink?: string;
}
