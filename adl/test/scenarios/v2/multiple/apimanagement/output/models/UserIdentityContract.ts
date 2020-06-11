
/**
 * @description User identity details.
 * @since 2019-12-01
 */
export interface UserIdentityContract {
    /**
     * @description Identity provider name.
     * @since 2019-12-01
     */
    provider?: string;
    /**
     * @description Identifier value within provider.
     * @since 2019-12-01
     */
    id?: string;
}
