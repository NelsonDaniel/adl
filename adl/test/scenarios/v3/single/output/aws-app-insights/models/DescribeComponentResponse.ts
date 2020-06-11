import { ApplicationComponent } from './ApplicationComponent';
import { ResourceList } from '../aliases/ResourceList';
/**
 *
 * @since 2018-11-25
 */
export interface DescribeComponentResponse {
    /**
     *
     * @since 2018-11-25
     */
    ApplicationComponent?: ApplicationComponent;
    /**
     * @description The list of resource ARNs that belong to the component.
     * @since 2018-11-25
     */
    ResourceList?: ResourceList;
}
