
/**
 * @description Error Field contract.
 * @since 2019-12-01
 */
export interface ErrorFieldContract {
    /**
     * @description Property level error code.
     * @since 2019-12-01
     */
    code?: string;
    /**
     * @description Human-readable representation of property-level error.
     * @since 2019-12-01
     */
    message?: string;
    /**
     * @description Property name.
     * @since 2019-12-01
     */
    target?: string;
}
