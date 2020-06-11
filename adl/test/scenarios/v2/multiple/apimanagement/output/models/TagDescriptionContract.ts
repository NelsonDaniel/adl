import { TagDescriptionContractProperties } from './TagDescriptionContractProperties';
import { Resource } from './Resource';
/**
 * @description Contract details.
 * @since 2019-12-01
 */
export interface TagDescriptionContract extends Resource {
    /**
     * @description TagDescription entity contract properties.
     * @since 2019-12-01
     */
    properties?: TagDescriptionContractProperties;
}
