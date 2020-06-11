import { UserState } from '../enums/UserState';
import { UserIdentityContract } from './UserIdentityContract';
/**
 * @description User Entity Base Parameters set.
 * @since 2019-12-01
 */
export interface UserEntityBaseParameters {
    /**
     * @description Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
     * @since 2019-12-01
     */
    state?: UserState;
    /**
     * @description Optional note about a user set by the administrator.
     * @since 2019-12-01
     */
    note?: string;
    /**
     * @description Collection of user identities.
     * @since 2019-12-01
     */
    identities?: Array<UserIdentityContract>;
}
