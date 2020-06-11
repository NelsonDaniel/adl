import { ResourceGroupName } from '../aliases/ResourceGroupName';
import { Tier } from '../enums/Tier';
/**
 * DescribeComponentConfigurationRecommendationRequest
 * @since 2018-11-25
 */
export interface DescribeComponentConfigurationRecommendationRequest {
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
     * @description The tier of the application component. Supported tiers include <code>DOT_NET_CORE</code>, <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code>.
     * @since 2018-11-25
     */
    Tier: Tier;
}
