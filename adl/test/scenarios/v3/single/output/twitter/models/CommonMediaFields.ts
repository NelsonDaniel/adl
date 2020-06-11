import { MediaHeight } from '../aliases/MediaHeight';
import { MediaKey } from '../aliases/MediaKey';
import { MediaWidth } from '../aliases/MediaWidth';
/**
 * @description This contains the list of the fields that are common to all media returned.
 * @since 2.3
 */
export interface CommonMediaFields {
    /**
     *
     * @since 2.3
     */
    height?: MediaHeight;
    /**
     *
     * @since 2.3
     */
    media_key?: MediaKey;
    /**
     *
     * @since 2.3
     */
    width?: MediaWidth;
}
