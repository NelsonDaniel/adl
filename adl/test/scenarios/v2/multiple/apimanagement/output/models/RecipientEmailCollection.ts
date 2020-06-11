import { RecipientEmailContract } from './RecipientEmailContract';
/**
 * @description Paged Recipient User list representation.
 * @since 2019-12-01
 */
export interface RecipientEmailCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<RecipientEmailContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
