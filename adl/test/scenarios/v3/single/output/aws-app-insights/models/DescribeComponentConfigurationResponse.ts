import { Tier } from '../enums/Tier';
import { ComponentConfiguration } from '../aliases/ComponentConfiguration';
/**
 *
 * @since 2018-11-25
 */
export interface DescribeComponentConfigurationResponse {
    /**
     * @description Indicates whether the application component is monitored.
     * @since 2018-11-25
     */
    Monitor?: boolean;
    /**
     * @description The tier of the application component. Supported tiers include <code>DOT_NET_CORE</code>, <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code>
     * @since 2018-11-25
     */
    Tier?: Tier;
    /**
     * @description The configuration settings of the component. The value is the escaped JSON of the configuration.
     * @since 2018-11-25
     */
    ComponentConfiguration?: ComponentConfiguration;
}
