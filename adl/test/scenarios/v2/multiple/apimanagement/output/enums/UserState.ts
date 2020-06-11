
/**
 * @extensible
 * @description Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
 * @since 2019-12-01
 */
export enum UserState {
    /**
     *
     * @description User state is active.
     */
    active = 'active',
    /**
     *
     * @description User is blocked. Blocked users cannot authenticate at developer portal or call API.
     */
    blocked = 'blocked',
    /**
     *
     * @description User account is pending. Requires identity confirmation before it can be made active.
     */
    pending = 'pending',
    /**
     *
     * @description User account is closed. All identities and related entities are removed.
     */
    deleted = 'deleted'
}
