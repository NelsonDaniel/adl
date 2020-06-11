import { KeyType } from '../enums/KeyType';
/**
 * @description Gateway key regeneration request contract properties.
 * @since 2019-12-01
 */
export interface GatewayKeyRegenerationRequestContract {
    /**
     * @description The Key being regenerated.
     * @since 2019-12-01
     */
    keyType: KeyType;
}
