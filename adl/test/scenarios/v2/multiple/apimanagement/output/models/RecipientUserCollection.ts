import { RecipientUserContract } from './RecipientUserContract';
/**
 * @description Paged Recipient User list representation.
 * @since 2019-12-01
 */
export interface RecipientUserCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<RecipientUserContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
