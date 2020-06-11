
/**
 * @description Key Vault resource
 * @since 2019-09-01
 */
export interface Resource {
    /**
     * @description Fully qualified identifier of the key vault resource.
     * @since 2019-09-01
     */
    readonly id?: string;
    /**
     * @description Name of the key vault resource.
     * @since 2019-09-01
     */
    readonly name?: string;
    /**
     * @description Resource type of the key vault resource.
     * @since 2019-09-01
     */
    readonly type?: string;
    /**
     * @description Azure location of the key vault resource.
     * @since 2019-09-01
     */
    readonly location?: string;
    /**
     * @description Tags assigned to the key vault resource.
     * @since 2019-09-01
     */
    readonly tags?: Dictionary<string>;
}
