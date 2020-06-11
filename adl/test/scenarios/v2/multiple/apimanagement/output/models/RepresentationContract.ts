import { ParameterContract } from './ParameterContract';
/**
 * @description Operation request/response representation details.
 * @since 2019-12-01
 */
export interface RepresentationContract {
    /**
     * @description Specifies a registered or custom content type for this representation, e.g. application/xml.
     * @since 2019-12-01
     */
    contentType: string;
    /**
     * @description An example of the representation.
     * @since 2019-12-01
     */
    sample?: string;
    /**
     * @description Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
     * @since 2019-12-01
     */
    schemaId?: string;
    /**
     * @description Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
     * @since 2019-12-01
     */
    typeName?: string;
    /**
     * @description Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
     * @since 2019-12-01
     */
    formParameters?: Array<ParameterContract>;
}
