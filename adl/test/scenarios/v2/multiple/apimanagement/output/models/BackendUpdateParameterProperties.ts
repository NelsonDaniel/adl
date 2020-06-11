import { BackendProtocol } from '../enums/BackendProtocol';
import { BackendBaseParameters } from './BackendBaseParameters';
/**
 * @description Parameters supplied to the Update Backend operation.
 * @since 2019-12-01
 */
export interface BackendUpdateParameterProperties extends BackendBaseParameters {
    /**
     * @description Runtime Url of the Backend.
     * @since 2019-12-01
     */
    url?: string & MaxLength<2000> & MinLength<1>;
    /**
     * @description Backend communication protocol.
     * @since 2019-12-01
     */
    protocol?: BackendProtocol;
}
