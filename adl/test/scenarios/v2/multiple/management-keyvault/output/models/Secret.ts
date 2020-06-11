import { SecretProperties } from './SecretProperties';
import { Resource } from './Resource';
/**
 * @description Resource information with extended details.
 * @since 2019-09-01
 */
export interface Secret extends Resource {
    /**
     * @description Properties of the secret
     * @since 2019-09-01
     */
    properties: SecretProperties;
}
