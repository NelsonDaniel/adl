import { CommonMediaFields } from './CommonMediaFields';
/**
 *
 * @since 2.3
 */
export interface AnimatedGif extends CommonMediaFields {
    /**
     *
     * @since 2.3
     */
    preview_image_url?: string;
    /**
     *
     * @since 2.3
     */
    type?: "animated_gif";
}
