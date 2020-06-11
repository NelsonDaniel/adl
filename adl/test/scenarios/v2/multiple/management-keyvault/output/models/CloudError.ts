import { CloudErrorBody } from './CloudErrorBody';
/**
 * @description An error response from Key Vault resource provider
 * @since 2019-09-01
 */
export interface CloudError {
    /**
     *
     * @since 2019-09-01
     */
    error?: CloudErrorBody;
}
