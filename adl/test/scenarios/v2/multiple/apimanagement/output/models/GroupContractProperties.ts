import { GroupType } from '../enums/GroupType';
/**
 * @description Group contract Properties.
 * @since 2019-12-01
 */
export interface GroupContractProperties {
    /**
     * @description Group name.
     * @since 2019-12-01
     */
    displayName: string & MaxLength<300> & MinLength<1>;
    /**
     * @description Group description. Can contain HTML formatting tags.
     * @since 2019-12-01
     */
    description?: string & MaxLength<1000>;
    /**
     * @description true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
     * @since 2019-12-01
     */
    readonly builtIn?: boolean;
    /**
     * @description Group type.
     * @since 2019-12-01
     */
    type?: GroupType;
    /**
     * @description For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
     * @since 2019-12-01
     */
    externalId?: string;
}
