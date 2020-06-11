import { ParameterContract } from './ParameterContract';
import { RepresentationContract } from './RepresentationContract';
/**
 * @description Operation request details.
 * @since 2019-12-01
 */
export interface RequestContract {
    /**
     * @description Operation request description.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description Collection of operation request query parameters.
     * @since 2019-12-01
     */
    queryParameters?: Array<ParameterContract>;
    /**
     * @description Collection of operation request headers.
     * @since 2019-12-01
     */
    headers?: Array<ParameterContract>;
    /**
     * @description Collection of operation request representations.
     * @since 2019-12-01
     */
    representations?: Array<RepresentationContract>;
}
