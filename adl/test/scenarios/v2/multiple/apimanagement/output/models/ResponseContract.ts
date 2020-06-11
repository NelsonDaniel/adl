import { RepresentationContract } from './RepresentationContract';
import { ParameterContract } from './ParameterContract';
/**
 * @description Operation response details.
 * @since 2019-12-01
 */
export interface ResponseContract {
    /**
     * @description Operation response HTTP status code.
     * @since 2019-12-01
     */
    statusCode: int32;
    /**
     * @description Operation response description.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description Collection of operation response representations.
     * @since 2019-12-01
     */
    representations?: Array<RepresentationContract>;
    /**
     * @description Collection of operation response headers.
     * @since 2019-12-01
     */
    headers?: Array<ParameterContract>;
}
