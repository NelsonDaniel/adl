import { PolicyContentFormat } from '../enums/PolicyContentFormat';
/**
 * @description Policy contract Properties.
 * @since 2019-12-01
 */
export interface PolicyContractProperties {
    /**
     * @description Contents of the Policy as defined by the format.
     * @since 2019-12-01
     */
    value: string;
    /**
     * @description Format of the policyContent.
     * @since 2019-12-01
     */
    format?: PolicyContentFormat;
}
