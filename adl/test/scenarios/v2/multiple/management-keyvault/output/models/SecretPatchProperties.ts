import { SecretAttributes } from './SecretAttributes';
/**
 * @description Properties of the secret
 * @since 2019-09-01
 */
export interface SecretPatchProperties {
    /**
     * @description The value of the secret.
     * @since 2019-09-01
     */
    value?: string;
    /**
     * @description The content type of the secret.
     * @since 2019-09-01
     */
    contentType?: string;
    /**
     * @description The attributes of the secret.
     * @since 2019-09-01
     */
    attributes?: SecretAttributes;
}
