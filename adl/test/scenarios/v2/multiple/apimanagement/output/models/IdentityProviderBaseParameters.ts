import { IdentityProviderType } from '../enums/IdentityProviderType';
/**
 * @description Identity Provider Base Parameter Properties.
 * @since 2019-12-01
 */
export interface IdentityProviderBaseParameters {
    /**
     * @description Identity Provider Type identifier.
     * @since 2019-12-01
     */
    type?: IdentityProviderType;
    /**
     * @description The TenantId to use instead of Common when logging into Active Directory
     * @since 2019-12-01
     */
    signinTenant?: string;
    /**
     * @description List of Allowed Tenants when configuring Azure Active Directory login.
     * @since 2019-12-01
     */
    allowedTenants?: Array<string> & MaximumElements<32>;
    /**
     * @description OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
     * @since 2019-12-01
     */
    authority?: string;
    /**
     * @description Signup Policy Name. Only applies to AAD B2C Identity Provider.
     * @since 2019-12-01
     */
    signupPolicyName?: string & MinLength<1>;
    /**
     * @description Signin Policy Name. Only applies to AAD B2C Identity Provider.
     * @since 2019-12-01
     */
    signinPolicyName?: string & MinLength<1>;
    /**
     * @description Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
     * @since 2019-12-01
     */
    profileEditingPolicyName?: string & MinLength<1>;
    /**
     * @description Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
     * @since 2019-12-01
     */
    passwordResetPolicyName?: string & MinLength<1>;
}
