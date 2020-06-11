import { GroupType } from '../enums/GroupType';
/**
 * @description Parameters supplied to the Create Group operation.
 * @since 2019-12-01
 */
export interface GroupCreateParametersProperties {
    /**
     * @description Group name.
     * @since 2019-12-01
     */
    displayName: string & MaxLength<300> & MinLength<1>;
    /**
     * @description Group description.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description Group type.
     * @since 2019-12-01
     */
    type?: GroupType;
    /**
     * @description Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
     * @since 2019-12-01
     */
    externalId?: string;
}
