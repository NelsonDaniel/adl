import { Operation } from './Operation';
/**
 * @description Result of the request to list Storage operations. It contains a list of operations and a URL link to get the next set of results.
 * @since 2019-09-01
 */
export interface OperationListResult {
    /**
     * @description List of Storage operations supported by the Storage resource provider.
     * @since 2019-09-01
     */
    value?: Array<Operation>;
    /**
     * @description The URL to get the next set of operations.
     * @since 2019-09-01
     */
    nextLink?: string;
}
