import { PolicyContract } from './PolicyContract';
/**
 * @description The response of the list policy operation.
 * @since 2019-12-01
 */
export interface PolicyCollection {
    /**
     * @description Policy Contract value.
     * @since 2019-12-01
     */
    value?: Array<PolicyContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
