
/**
 * @description Log of the entity being created, updated or deleted.
 * @since 2019-12-01
 */
export interface OperationResultLogItemContract {
    /**
     * @description The type of entity contract.
     * @since 2019-12-01
     */
    objectType?: string;
    /**
     * @description Action like create/update/delete.
     * @since 2019-12-01
     */
    action?: string;
    /**
     * @description Identifier of the entity being created/updated/deleted.
     * @since 2019-12-01
     */
    objectKey?: string;
}
