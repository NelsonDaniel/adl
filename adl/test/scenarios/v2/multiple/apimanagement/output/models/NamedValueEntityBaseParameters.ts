
/**
 * @description NamedValue Entity Base Parameters set.
 * @since 2019-12-01
 */
export interface NamedValueEntityBaseParameters {
    /**
     * @description Optional tags that when provided can be used to filter the NamedValue list.
     * @since 2019-12-01
     */
    tags?: Array<string> & MaximumElements<32>;
    /**
     * @description Determines whether the value is a secret and should be encrypted or not. Default value is false.
     * @since 2019-12-01
     */
    secret?: boolean;
}
