
/**
 * @description The Resource definition.
 * @since 2019-12-01
 */
export interface Resource {
    /**
     * @description Resource ID.
     * @since 2019-12-01
     */
    readonly id?: string;
    /**
     * @description Resource name.
     * @since 2019-12-01
     */
    readonly name?: string;
    /**
     * @description Resource type for API Management resource.
     * @since 2019-12-01
     */
    readonly type?: string;
}
