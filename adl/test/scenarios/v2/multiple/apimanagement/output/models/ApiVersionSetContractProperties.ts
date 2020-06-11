import { versioningScheme } from '../enums/versioningScheme';
import { ApiVersionSetEntityBase } from './ApiVersionSetEntityBase';
/**
 * @description Properties of an API Version Set.
 * @since 2019-12-01
 */
export interface ApiVersionSetContractProperties extends ApiVersionSetEntityBase {
    /**
     * @description Name of API Version Set
     * @since 2019-12-01
     */
    displayName: string & MaxLength<100> & MinLength<1>;
    /**
     * @description An value that determines where the API Version identifer will be located in a HTTP request.
     * @since 2019-12-01
     */
    versioningScheme: versioningScheme;
}
