import { Permissions } from './Permissions';
/**
 * @description An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
 * @since 2019-09-01
 */
export interface AccessPolicyEntry {
    /**
     * @description The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
     * @since 2019-09-01
     */
    tenantId: uuid;
    /**
     * @description The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
     * @since 2019-09-01
     */
    objectId: string;
    /**
     * @description  Application ID of the client making request on behalf of a principal
     * @since 2019-09-01
     */
    applicationId?: uuid;
    /**
     * @description Permissions the identity has for keys, secrets and certificates.
     * @since 2019-09-01
     */
    permissions: Permissions;
}
