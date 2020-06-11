import { UserEntityBaseParameters } from './UserEntityBaseParameters';
/**
 * @description Parameters supplied to the Update User operation.
 * @since 2019-12-01
 */
export interface UserUpdateParametersProperties extends UserEntityBaseParameters {
    /**
     * @description Email address. Must not be empty and must be unique within the service instance.
     * @since 2019-12-01
     */
    email?: string & MaxLength<254> & MinLength<1>;
    /**
     * @description User Password.
     * @since 2019-12-01
     */
    password?: string;
    /**
     * @description First name.
     * @since 2019-12-01
     */
    firstName?: string & MaxLength<100> & MinLength<1>;
    /**
     * @description Last name.
     * @since 2019-12-01
     */
    lastName?: string & MaxLength<100> & MinLength<1>;
}
