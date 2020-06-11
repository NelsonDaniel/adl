
/**
 * @description Email Template Parameter contract.
 * @since 2019-12-01
 */
export interface EmailTemplateParametersContractProperties {
    /**
     * @description Template parameter name.
     * @since 2019-12-01
     */
    name?: string & MaxLength<256> & MinLength<1> & RegularExpression<'^[A-Za-z0-9-._]+$'>;
    /**
     * @description Template parameter title.
     * @since 2019-12-01
     */
    title?: string & MaxLength<4096> & MinLength<1>;
    /**
     * @description Template parameter description.
     * @since 2019-12-01
     */
    description?: string & MaxLength<256> & MinLength<1> & RegularExpression<'^[A-Za-z0-9-._]+$'>;
}
