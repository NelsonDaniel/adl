import { User } from './User';
import { Problem } from '../aliases/Problem';
import { Expansions } from './Expansions';
/**
 *
 * @since 2.3
 */
export interface SingleUserLookupResponse {
    /**
     *
     * @since 2.3
     */
    data?: User;
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
