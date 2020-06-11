
/**
 * @description Parameters supplied to the Create TagDescription operation.
 * @since 2019-12-01
 */
export interface TagDescriptionBaseProperties {
    /**
     * @description Description of the Tag.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description Absolute URL of external resources describing the tag.
     * @since 2019-12-01
     */
    externalDocsUrl?: string & MaxLength<2000>;
    /**
     * @description Description of the external resources describing the tag.
     * @since 2019-12-01
     */
    externalDocsDescription?: string;
}
