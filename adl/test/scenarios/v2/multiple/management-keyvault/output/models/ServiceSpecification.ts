import { LogSpecification } from './LogSpecification';
/**
 * @description One property of operation, include log specifications.
 * @since 2019-09-01
 */
export interface ServiceSpecification {
    /**
     * @description Log specifications of operation.
     * @since 2019-09-01
     */
    logSpecifications?: Array<LogSpecification>;
}
