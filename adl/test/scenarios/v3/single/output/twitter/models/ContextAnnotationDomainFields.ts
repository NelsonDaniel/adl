
/**
 * @description Represents the data for the context annotation domain.
 * @since 2.3
 */
export interface ContextAnnotationDomainFields {
    /**
     * @description Description of the context annotation domain.
     * @since 2.3
     */
    description?: string;
    /**
     * @description The unique id for a context annotation domain.
     * @since 2.3
     */
    id: string & RegularExpression<'^[0-9]{1,19}$'>;
    /**
     * @description Name of the context annotation domain.
     * @since 2.3
     */
    name?: string;
}
