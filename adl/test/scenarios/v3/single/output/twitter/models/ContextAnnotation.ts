import { ContextAnnotationDomainFields } from './ContextAnnotationDomainFields';
import { ContextAnnotationEntityFields } from './ContextAnnotationEntityFields';
/**
 * @description Annotation inferred from the tweet text.
 * @since 2.3
 */
export interface ContextAnnotation {
    /**
     *
     * @since 2.3
     */
    domain: ContextAnnotationDomainFields;
    /**
     *
     * @since 2.3
     */
    entity: ContextAnnotationEntityFields;
}
