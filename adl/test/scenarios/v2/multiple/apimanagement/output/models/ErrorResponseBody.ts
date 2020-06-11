import { ErrorFieldContract } from './ErrorFieldContract';
/**
 * @description Error Body contract.
 * @since 2019-12-01
 */
export interface ErrorResponseBody {
    /**
     * @description Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
     * @since 2019-12-01
     */
    code?: string;
    /**
     * @description Human-readable representation of the error.
     * @since 2019-12-01
     */
    message?: string;
    /**
     * @description The list of invalid fields send in request, in case of validation error.
     * @since 2019-12-01
     */
    details?: Array<ErrorFieldContract>;
}
