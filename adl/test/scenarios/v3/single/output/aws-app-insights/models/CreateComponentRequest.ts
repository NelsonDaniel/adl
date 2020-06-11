import { ResourceGroupName } from '../aliases/ResourceGroupName';
import { ResourceList } from '../aliases/ResourceList';
/**
 * CreateComponentRequest
 * @since 2018-11-25
 */
export interface CreateComponentRequest {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName: ResourceGroupName;
    /**
     * @description The name of the component.
     * @since 2018-11-25
     */
    ComponentName: string;
    /**
     * @description The list of resource ARNs that belong to the component.
     * @since 2018-11-25
     */
    ResourceList: ResourceList;
}
