import { PolicyDescriptionContract } from './PolicyDescriptionContract';
/**
 * @description Descriptions of APIM policies.
 * @since 2019-12-01
 */
export interface PolicyDescriptionCollection {
    /**
     * @description Descriptions of APIM policies.
     * @since 2019-12-01
     */
    value?: Array<PolicyDescriptionContract>;
    /**
     * @description Total record count number.
     * @since 2019-12-01
     */
    count?: int64;
}
