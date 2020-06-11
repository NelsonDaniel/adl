
/**
 * @extensible
 * @description Determines the type of confirmation e-mail that will be sent to the newly created user.
 * @since 2019-12-01
 */
export enum Confirmation {
    /**
     *
     * @description Send an e-mail to the user confirming they have successfully signed up.
     */
    signup = 'signup',
    /**
     *
     * @description Send an e-mail inviting the user to sign-up and complete registration.
     */
    invite = 'invite'
}
