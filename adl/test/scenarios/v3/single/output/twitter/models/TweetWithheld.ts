import { CountryCode } from '../aliases/CountryCode';
/**
 * @description Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 * @since 2.3
 */
export interface TweetWithheld {
    /**
     * @description Indicates if the content is being withheld for on the basis of copyright infringement.
     * @since 2.3
     */
    copyright: boolean;
    /**
     * @description Provides a list of countries where this content is not available.
     * @since 2.3
     */
    country_codes: Array<CountryCode> & MinimumElements<1> & UniqueElements;
    /**
     * @description Indicates whether the content being withheld is the `tweet` or a `user`.
     * @since 2.3
     */
    scope?: "tweet" | "user";
}
