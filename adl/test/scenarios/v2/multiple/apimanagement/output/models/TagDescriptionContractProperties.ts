import { TagDescriptionBaseProperties } from './TagDescriptionBaseProperties';
/**
 * @description TagDescription contract Properties.
 * @since 2019-12-01
 */
export interface TagDescriptionContractProperties extends TagDescriptionBaseProperties {
    /**
     * @description Identifier of the tag in the form of /tags/{tagId}
     * @since 2019-12-01
     */
    tagId?: string;
    /**
     * @description Tag name.
     * @since 2019-12-01
     */
    displayName?: string & MaxLength<160> & MinLength<1>;
}
