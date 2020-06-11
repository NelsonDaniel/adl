import { Secret } from './Secret';
/**
 * @description List of secrets
 * @since 2019-09-01
 */
export interface SecretListResult {
    /**
     * @description The list of secrets.
     * @since 2019-09-01
     */
    value?: Array<Secret>;
    /**
     * @description The URL to get the next set of secrets.
     * @since 2019-09-01
     */
    nextLink?: string;
}
