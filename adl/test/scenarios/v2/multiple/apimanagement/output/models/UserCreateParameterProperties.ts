import { AppType } from '../enums/AppType';
import { Confirmation } from '../enums/Confirmation';
import { UserEntityBaseParameters } from './UserEntityBaseParameters';
/**
 * @description Parameters supplied to the Create User operation.
 * @since 2019-12-01
 */
export interface UserCreateParameterProperties extends UserEntityBaseParameters {
    /**
     * @description Email address. Must not be empty and must be unique within the service instance.
     * @since 2019-12-01
     */
    email: string & MaxLength<254> & MinLength<1>;
    /**
     * @description First name.
     * @since 2019-12-01
     */
    firstName: string & MaxLength<100> & MinLength<1>;
    /**
     * @description Last name.
     * @since 2019-12-01
     */
    lastName: string & MaxLength<100> & MinLength<1>;
    /**
     * @description User Password. If no value is provided, a default password is generated.
     * @since 2019-12-01
     */
    password?: string;
    /**
     * @description Determines the type of application which send the create user request. Default is old publisher portal.
     * @since 2019-12-01
     */
    appType?: AppType;
    /**
     * @description Determines the type of confirmation e-mail that will be sent to the newly created user.
     * @since 2019-12-01
     */
    confirmation?: Confirmation;
}
