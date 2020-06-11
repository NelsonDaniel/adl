import { ResourceGroupName } from '../aliases/ResourceGroupName';
import { Tier } from '../enums/Tier';
import { ComponentConfiguration } from '../aliases/ComponentConfiguration';
/**
 * UpdateComponentConfigurationRequest
 * @since 2018-11-25
 */
export interface UpdateComponentConfigurationRequest {
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
     * @description Indicates whether the application component is monitored.
     * @since 2018-11-25
     */
    Monitor?: boolean;
    /**
     * @description The tier of the application component. Supported tiers include <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>, <code>DOT_NET_CORE</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code>.
     * @since 2018-11-25
     */
    Tier?: Tier;
    /**
     * @description The configuration settings of the component. The value is the escaped JSON of the configuration. For more information about the JSON format, see <a href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/working-with-json.html">Working with JSON</a>. You can send a request to <code>DescribeComponentConfigurationRecommendation</code> to see the recommended configuration for a component. For the complete format of the component configuration file, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config.html">Component Configuration</a>.
     * @since 2018-11-25
     */
    ComponentConfiguration?: ComponentConfiguration;
}
