import { MediaHeight } from '../aliases/MediaHeight';
import { MediaWidth } from '../aliases/MediaWidth';
/**
 * @description Represent the information for the URL image
 * @since 2.3
 */
export interface URLImage {
    /**
     *
     * @since 2.3
     */
    height?: MediaHeight;
    /**
     *
     * @since 2.3
     */
    url?: string;
    /**
     *
     * @since 2.3
     */
    width?: MediaWidth;
}
