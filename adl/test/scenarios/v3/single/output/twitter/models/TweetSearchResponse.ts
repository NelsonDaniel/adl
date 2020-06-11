import { Tweet } from './Tweet';
import { Problem } from '../aliases/Problem';
import { Expansions } from './Expansions';
/**
 *
 * @since 2.3
 */
export interface TweetSearchResponse {
    /**
     *
     * @since 2.3
     */
    data?: Array<Tweet> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    errors?: Array<Problem> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    includes?: Expansions;
    /**
     *
     * @since 2.3
     */
    meta?: {
        /**
         * @description Most recent Tweet Id returned by search query
         * @since 2.3
         */
        newest_id?: string & RegularExpression<'^[0-9]{1,19}$'>;
        /**
         * @description This value is used to get the next 'page' of results by providing it to the next_token parameter.
         * @since 2.3
         */
        next_token?: string;
        /**
         * @description Oldest Tweet Id returned by search query
         * @since 2.3
         */
        oldest_id?: string & RegularExpression<'^[0-9]{1,19}$'>;
        /**
         * @description Number of search query results
         * @since 2.3
         */
        result_count?: int32;
    };
}
