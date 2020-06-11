import { NetworkRuleBypassOptions } from '../enums/NetworkRuleBypassOptions';
import { NetworkRuleAction } from '../enums/NetworkRuleAction';
import { IPRule } from './IPRule';
import { VirtualNetworkRule } from './VirtualNetworkRule';
/**
 * @description A set of rules governing the network accessibility of a vault.
 * @since 2019-09-01
 */
export interface NetworkRuleSet {
    /**
     * @description Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
     * @since 2019-09-01
     */
    bypass?: NetworkRuleBypassOptions;
    /**
     * @description The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
     * @since 2019-09-01
     */
    defaultAction?: NetworkRuleAction;
    /**
     * @description The list of IP address rules.
     * @since 2019-09-01
     */
    ipRules?: Array<IPRule>;
    /**
     * @description The list of virtual network rules.
     * @since 2019-09-01
     */
    virtualNetworkRules?: Array<VirtualNetworkRule>;
}
