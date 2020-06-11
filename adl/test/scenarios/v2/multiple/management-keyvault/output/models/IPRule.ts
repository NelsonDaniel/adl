
/**
 * @description A rule governing the accessibility of a vault from a specific ip address or ip range.
 * @since 2019-09-01
 */
export interface IPRule {
    /**
     * @description An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
     * @since 2019-09-01
     */
    value: string;
}
