
/**
 * @description Contract defining the Tag property in the Tag Resource Contract
 * @since 2019-12-01
 */
export interface TagTagResourceContractProperties {
    /**
     * @description Tag identifier
     * @since 2019-12-01
     */
    id?: string;
    /**
     * @description Tag Name
     * @since 2019-12-01
     */
    name?: string & MaxLength<160> & MinLength<1>;
}
