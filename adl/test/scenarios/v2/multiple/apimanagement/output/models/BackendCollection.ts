import { BackendContract } from './BackendContract';
/**
 * @description Paged Backend list representation.
 * @since 2019-12-01
 */
export interface BackendCollection {
    /**
     * @description Backend values.
     * @since 2019-12-01
     */
    value?: Array<BackendContract>;
    /**
     * @description Next page link if any.
     * @since 2019-12-01
     */
    nextLink?: string;
}
