import { KeyPermissions } from '../enums/KeyPermissions';
import { SecretPermissions } from '../enums/SecretPermissions';
import { CertificatePermissions } from '../enums/CertificatePermissions';
import { StoragePermissions } from '../enums/StoragePermissions';
/**
 * @description Permissions the identity has for keys, secrets, certificates and storage.
 * @since 2019-09-01
 */
export interface Permissions {
    /**
     * @description Permissions to keys
     * @since 2019-09-01
     */
    keys?: Array<KeyPermissions>;
    /**
     * @description Permissions to secrets
     * @since 2019-09-01
     */
    secrets?: Array<SecretPermissions>;
    /**
     * @description Permissions to certificates
     * @since 2019-09-01
     */
    certificates?: Array<CertificatePermissions>;
    /**
     * @description Permissions to storage accounts
     * @since 2019-09-01
     */
    storage?: Array<StoragePermissions>;
}
