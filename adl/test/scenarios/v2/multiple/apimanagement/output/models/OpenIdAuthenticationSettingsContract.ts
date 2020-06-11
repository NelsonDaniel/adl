import { bearerTokenSendingMethods } from '../enums/bearerTokenSendingMethods';
/**
 * @description API OAuth2 Authentication settings details.
 * @since 2019-12-01
 */
export interface OpenIdAuthenticationSettingsContract {
    /**
     * @description OAuth authorization server identifier.
     * @since 2019-12-01
     */
    openidProviderId?: string;
    /**
     * @description How to send token to the server.
     * @since 2019-12-01
     */
    bearerTokenSendingMethods?: Array<bearerTokenSendingMethods>;
}
