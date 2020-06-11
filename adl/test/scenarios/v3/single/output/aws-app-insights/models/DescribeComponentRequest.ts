import { ResourceGroupName } from '../aliases/ResourceGroupName';
/**
 * DescribeComponentRequest
 * @since 2018-11-25
 */
export interface DescribeComponentRequest {
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
}
