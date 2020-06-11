import { UserContract } from './UserContract';
/**
 * @description Paged Users list representation.
 * @since 2019-12-01
 */
export interface UserCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<UserContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
