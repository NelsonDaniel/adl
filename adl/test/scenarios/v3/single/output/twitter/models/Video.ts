import { CommonMediaFields } from './CommonMediaFields';
/**
 *
 * @since 2.3
 */
export interface Video extends CommonMediaFields {
    /**
     *
     * @since 2.3
     */
    duration_ms?: int64;
    /**
     *
     * @since 2.3
     */
    preview_image_url?: string;
    /**
     *
     * @since 2.3
     */
    type?: "video";
}
