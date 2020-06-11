import { SecretProperties } from './SecretProperties';
/**
 * @description Parameters for creating or updating a secret
 * @since 2019-09-01
 */
export interface SecretCreateOrUpdateParameters {
    /**
     * @description The tags that will be assigned to the secret.
     * @since 2019-09-01
     */
    tags?: Dictionary<string>;
    /**
     * @description Properties of the secret
     * @since 2019-09-01
     */
    properties: SecretProperties;
}
