import { DiagnosticContractProperties } from './DiagnosticContractProperties';
import { Resource } from './Resource';
/**
 * @description Diagnostic details.
 * @since 2019-12-01
 */
export interface DiagnosticContract extends Resource {
    /**
     * @description Diagnostic entity contract properties.
     * @since 2019-12-01
     */
    properties?: DiagnosticContractProperties;
}
