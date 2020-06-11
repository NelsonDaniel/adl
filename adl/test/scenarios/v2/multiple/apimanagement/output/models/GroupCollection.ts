import { GroupContract } from './GroupContract';
/**
 * @description Paged Group list representation.
 * @since 2019-12-01
 */
export interface GroupCollection {
    /**
     * @description Page values.
     * @since 2019-12-01
     */
    value?: Array<GroupContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
