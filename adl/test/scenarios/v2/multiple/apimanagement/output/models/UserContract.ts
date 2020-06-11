import { UserContractProperties } from './UserContractProperties';
import { Resource } from './Resource';
/**
 * @description User details.
 * @since 2019-12-01
 */
export interface UserContract extends Resource {
    /**
     * @description User entity contract properties.
     * @since 2019-12-01
     */
    properties?: UserContractProperties;
}
