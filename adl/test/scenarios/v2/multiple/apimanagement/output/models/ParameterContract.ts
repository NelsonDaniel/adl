
/**
 * @description Operation parameters details.
 * @since 2019-12-01
 */
export interface ParameterContract {
    /**
     * @description Parameter name.
     * @since 2019-12-01
     */
    name: string;
    /**
     * @description Parameter description.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description Parameter type.
     * @since 2019-12-01
     */
    type: string;
    /**
     * @description Default parameter value.
     * @since 2019-12-01
     */
    defaultValue?: string;
    /**
     * @description Specifies whether parameter is required or not.
     * @since 2019-12-01
     */
    required?: boolean;
    /**
     * @description Parameter values.
     * @since 2019-12-01
     */
    values?: Array<string>;
}
