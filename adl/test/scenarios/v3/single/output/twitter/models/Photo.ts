import { CommonMediaFields } from './CommonMediaFields';
/**
 *
 * @since 2.3
 */
export interface Photo extends CommonMediaFields {
    /**
     *
     * @since 2.3
     */
    type?: "photo";
    /**
     *
     * @since 2.3
     */
    url?: string;
}
