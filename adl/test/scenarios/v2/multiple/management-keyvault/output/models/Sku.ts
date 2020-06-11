import { SkuFamily } from '../enums/SkuFamily';
import { SkuName } from '../enums/SkuName';
/**
 * @description SKU details
 * @since 2019-09-01
 */
export interface Sku {
    /**
     * @description SKU family name
     * @since 2019-09-01
     */
    family: SkuFamily;
    /**
     * @description SKU name to specify whether the key vault is a standard vault or a premium vault.
     * @since 2019-09-01
     */
    name: SkuName;
}
