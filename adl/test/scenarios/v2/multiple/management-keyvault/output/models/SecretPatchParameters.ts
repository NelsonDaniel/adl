import { SecretPatchProperties } from './SecretPatchProperties';
/**
 * @description Parameters for patching a secret
 * @since 2019-09-01
 */
export interface SecretPatchParameters {
    /**
     * @description The tags that will be assigned to the secret.
     * @since 2019-09-01
     */
    tags?: Dictionary<string>;
    /**
     * @description Properties of the secret
     * @since 2019-09-01
     */
    properties?: SecretPatchProperties;
}
