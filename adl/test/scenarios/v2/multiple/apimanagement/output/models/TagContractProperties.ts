
/**
 * @description Tag contract Properties.
 * @since 2019-12-01
 */
export interface TagContractProperties {
    /**
     * @description Tag name.
     * @since 2019-12-01
     */
    displayName: string & MaxLength<160> & MinLength<1>;
}
