import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates your client is forbidden from making this request.
 * @since 2.3
 */
export interface ClientForbiddenProblem extends ProblemFields {
    /**
     *
     * @since 2.3
     */
    reason?: "official-client-forbidden" | "client-not-enrolled";
    /**
     *
     * @since 2.3
     */
    registration_url?: string;
    /**
     *
     * @since 2.3
     */
    type?: "https://api.twitter.com/labs/2/problems/client-forbidden";
}
