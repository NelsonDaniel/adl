
/**
 * @description A rule governing the accessibility of a vault from a specific virtual network.
 * @since 2019-09-01
 */
export interface VirtualNetworkRule {
    /**
     * @description Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
     * @since 2019-09-01
     */
    id: string;
}
