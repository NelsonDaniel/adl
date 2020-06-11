import { CountryCode } from '../aliases/CountryCode';
/**
 * @description Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 * @since 2.3
 */
export interface UserWithheld {
    /**
     * @description Provides a list of countries where this content is not available.
     * @since 2.3
     */
    country_codes: Array<CountryCode> & MinimumElements<1> & UniqueElements;
    /**
     * @description Indicates that the content being withheld is a `user`.
     * @since 2.3
     */
    scope?: "user";
}
