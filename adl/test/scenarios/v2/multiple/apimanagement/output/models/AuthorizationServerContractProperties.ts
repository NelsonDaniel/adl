import { GrantType } from '../enums/GrantType';
import { AuthorizationServerContractBaseProperties } from './AuthorizationServerContractBaseProperties';
/**
 * @description External OAuth authorization server settings Properties.
 * @since 2019-12-01
 */
export interface AuthorizationServerContractProperties extends AuthorizationServerContractBaseProperties {
    /**
     * @description User-friendly authorization server name.
     * @since 2019-12-01
     */
    displayName: string & MaxLength<50> & MinLength<1>;
    /**
     * @description Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
     * @since 2019-12-01
     */
    clientRegistrationEndpoint: string;
    /**
     * @description OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
     * @since 2019-12-01
     */
    authorizationEndpoint: string;
    /**
     * @description Form of an authorization grant, which the client uses to request the access token.
     * @since 2019-12-01
     */
    grantTypes: Array<GrantType>;
    /**
     * @description Client or app id registered with this authorization server.
     * @since 2019-12-01
     */
    clientId: string;
    /**
     * @description Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     * @since 2019-12-01
     */
    clientSecret?: string;
}
