import { OAuth2AuthenticationSettingsContract } from './OAuth2AuthenticationSettingsContract';
import { OpenIdAuthenticationSettingsContract } from './OpenIdAuthenticationSettingsContract';
/**
 * @description API Authentication Settings.
 * @since 2019-12-01
 */
export interface AuthenticationSettingsContract {
    /**
     * @description OAuth2 Authentication settings
     * @since 2019-12-01
     */
    oAuth2?: OAuth2AuthenticationSettingsContract;
    /**
     * @description OpenID Connect Authentication Settings
     * @since 2019-12-01
     */
    openid?: OpenIdAuthenticationSettingsContract;
}
