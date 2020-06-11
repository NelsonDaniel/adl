
/**
 * @description Operation Entity contract Properties.
 * @since 2019-12-01
 */
export interface OperationTagResourceContractProperties {
    /**
     * @description Identifier of the operation in form /operations/{operationId}.
     * @since 2019-12-01
     */
    id?: string;
    /**
     * @description Operation name.
     * @since 2019-12-01
     */
    readonly name?: string;
    /**
     * @description Api Name.
     * @since 2019-12-01
     */
    readonly apiName?: string;
    /**
     * @description Api Revision.
     * @since 2019-12-01
     */
    readonly apiRevision?: string;
    /**
     * @description Api Version.
     * @since 2019-12-01
     */
    readonly apiVersion?: string;
    /**
     * @description Operation Description.
     * @since 2019-12-01
     */
    readonly description?: string;
    /**
     * @description A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     * @since 2019-12-01
     */
    readonly method?: string;
    /**
     * @description Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     * @since 2019-12-01
     */
    readonly urlTemplate?: string;
}
