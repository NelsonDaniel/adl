import { DeletedVault } from './DeletedVault';
/**
 * @description List of vaults
 * @since 2019-09-01
 */
export interface DeletedVaultListResult {
    /**
     * @description The list of deleted vaults.
     * @since 2019-09-01
     */
    value?: Array<DeletedVault>;
    /**
     * @description The URL to get the next set of deleted vaults.
     * @since 2019-09-01
     */
    nextLink?: string;
}
