import { Tweet } from './Tweet';
import { Problem } from '../aliases/Problem';
import { Expansions } from './Expansions';
/**
 *
 * @since 2.3
 */
export interface SingleTweetLookupResponse {
    /**
     *
     * @since 2.3
     */
    data?: Tweet;
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
}
