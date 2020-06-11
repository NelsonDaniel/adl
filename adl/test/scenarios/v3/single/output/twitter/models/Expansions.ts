import { Media } from '../aliases/Media';
import { Place } from './Place';
import { Poll } from './Poll';
import { Tweet } from './Tweet';
import { User } from './User';
/**
 *
 * @since 2.3
 */
export interface Expansions {
    /**
     *
     * @since 2.3
     */
    media?: Array<Media> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    places?: Array<Place> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    polls?: Array<Poll> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    tweets?: Array<Tweet> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    users?: Array<User> & MinimumElements<1>;
}
