import { TokenRequest } from './TokenRequest';
/**
 *
 * @since 1.1.0
 */
export interface SignedTokenRequest extends TokenRequest, {
    /**
     * @description A signature, generated as an HMAC of each of the above components, using the key secret value.
     * @since 1.1.0
     */
    mac: string
} {
}
