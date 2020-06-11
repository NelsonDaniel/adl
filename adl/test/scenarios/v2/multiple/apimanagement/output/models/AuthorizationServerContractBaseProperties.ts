import { AuthorizationMethod } from '../enums/AuthorizationMethod';
import { ClientAuthenticationMethod } from '../enums/ClientAuthenticationMethod';
import { TokenBodyParameterContract } from './TokenBodyParameterContract';
import { BearerTokenSendingMethod } from '../enums/BearerTokenSendingMethod';
/**
 * @description External OAuth authorization server Update settings contract.
 * @since 2019-12-01
 */
export interface AuthorizationServerContractBaseProperties {
    /**
     * @description Description of the authorization server. Can contain HTML formatting tags.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
     * @since 2019-12-01
     */
    authorizationMethods?: Array<AuthorizationMethod>;
    /**
     * @description Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
     * @since 2019-12-01
     */
    clientAuthenticationMethod?: Array<ClientAuthenticationMethod>;
    /**
     * @description Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
     * @since 2019-12-01
     */
    tokenBodyParameters?: Array<TokenBodyParameterContract>;
    /**
     * @description OAuth token endpoint. Contains absolute URI to entity being referenced.
     * @since 2019-12-01
     */
    tokenEndpoint?: string;
    /**
     * @description If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
     * @since 2019-12-01
     */
    supportState?: boolean;
    /**
     * @description Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
     * @since 2019-12-01
     */
    defaultScope?: string;
    /**
     * @description Specifies the mechanism by which access token is passed to the API.
     * @since 2019-12-01
     */
    bearerTokenSendingMethods?: Array<BearerTokenSendingMethod>;
    /**
     * @description Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
     * @since 2019-12-01
     */
    resourceOwnerUsername?: string;
    /**
     * @description Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
     * @since 2019-12-01
     */
    resourceOwnerPassword?: string;
}
