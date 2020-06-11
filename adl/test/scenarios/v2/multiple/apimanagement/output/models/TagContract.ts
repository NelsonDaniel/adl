import { TagContractProperties } from './TagContractProperties';
import { Resource } from './Resource';
/**
 * @description Tag Contract details.
 * @since 2019-12-01
 */
export interface TagContract extends Resource {
    /**
     * @description Tag entity contract properties.
     * @since 2019-12-01
     */
    properties?: TagContractProperties;
}
