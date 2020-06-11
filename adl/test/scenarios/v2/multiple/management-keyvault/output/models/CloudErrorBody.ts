
/**
 * @description An error response from Key Vault resource provider
 * @since 2019-09-01
 */
export interface CloudErrorBody {
    /**
     * @description Error code. This is a mnemonic that can be consumed programmatically.
     * @since 2019-09-01
     */
    code?: string;
    /**
     * @description User friendly error message. The message is typically localized and may vary with service version.
     * @since 2019-09-01
     */
    message?: string;
}
