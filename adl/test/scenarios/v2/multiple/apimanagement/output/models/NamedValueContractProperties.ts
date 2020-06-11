import { NamedValueEntityBaseParameters } from './NamedValueEntityBaseParameters';
/**
 * @description NamedValue Contract properties.
 * @since 2019-12-01
 */
export interface NamedValueContractProperties extends NamedValueEntityBaseParameters {
    /**
     * @description Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
     * @since 2019-12-01
     */
    displayName: string & MaxLength<256> & MinLength<1> & RegularExpression<'^[A-Za-z0-9-._]+$'>;
    /**
     * @description Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     * @since 2019-12-01
     */
    value?: string & MaxLength<4096> & MinLength<1>;
}
