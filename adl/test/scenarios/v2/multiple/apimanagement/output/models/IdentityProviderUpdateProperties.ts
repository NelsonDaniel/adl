import { IdentityProviderBaseParameters } from './IdentityProviderBaseParameters';
/**
 * @description Parameters supplied to the Update Identity Provider operation.
 * @since 2019-12-01
 */
export interface IdentityProviderUpdateProperties extends IdentityProviderBaseParameters {
    /**
     * @description Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
     * @since 2019-12-01
     */
    clientId?: string & MinLength<1>;
    /**
     * @description Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft.
     * @since 2019-12-01
     */
    clientSecret?: string & MinLength<1>;
}
