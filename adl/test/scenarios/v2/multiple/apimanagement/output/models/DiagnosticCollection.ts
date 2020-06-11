import { DiagnosticContract } from './DiagnosticContract';
/**
 * @description Paged Diagnostic list representation.
 * @since 2019-12-01
 */
export interface DiagnosticCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<DiagnosticContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
