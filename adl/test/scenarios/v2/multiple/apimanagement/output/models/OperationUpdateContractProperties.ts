import { OperationEntityBaseContract } from './OperationEntityBaseContract';
/**
 * @description Operation Update Contract Properties.
 * @since 2019-12-01
 */
export interface OperationUpdateContractProperties extends OperationEntityBaseContract {
    /**
     * @description Operation Name.
     * @since 2019-12-01
     */
    displayName?: string & MaxLength<300> & MinLength<1>;
    /**
     * @description A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     * @since 2019-12-01
     */
    method?: string;
    /**
     * @description Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     * @since 2019-12-01
     */
    urlTemplate?: string & MaxLength<1000> & MinLength<1>;
}
