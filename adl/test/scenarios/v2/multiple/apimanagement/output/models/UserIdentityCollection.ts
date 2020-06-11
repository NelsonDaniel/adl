import { UserIdentityContract } from './UserIdentityContract';
/**
 * @description List of Users Identity list representation.
 * @since 2019-12-01
 */
export interface UserIdentityCollection {
    /**
     * @description User Identity values.
     * @since 2019-12-01
     */
    value?: Array<UserIdentityContract>;
    /**
     * @description Total record count number across all pages.
     * @since 2019-12-01
     */
    count?: int64;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
