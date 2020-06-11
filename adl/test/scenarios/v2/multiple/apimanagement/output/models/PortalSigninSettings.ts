import { PortalSigninSettingProperties } from './PortalSigninSettingProperties';
import { Resource } from './Resource';
/**
 * @description Sign-In settings for the Developer Portal.
 * @since 2019-12-01
 */
export interface PortalSigninSettings extends Resource {
    /**
     * @description Sign-in settings contract properties.
     * @since 2019-12-01
     */
    properties?: PortalSigninSettingProperties;
}
