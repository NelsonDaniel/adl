import { user } from './user';
/**
 *
 * @since v3
 */
export interface asset {
    /**
     *
     * @since v3
     */
    content_type?: string;
    /**
     *
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    download_count?: double;
    /**
     *
     * @since v3
     */
    id?: double;
    /**
     *
     * @since v3
     */
    label?: string;
    /**
     *
     * @since v3
     */
    name?: string;
    /**
     *
     * @since v3
     */
    size?: double;
    /**
     *
     * @since v3
     */
    state?: string;
    /**
     *
     * @since v3
     */
    updated_at?: string;
    /**
     *
     * @since v3
     */
    uploader?: user;
    /**
     *
     * @since v3
     */
    url?: string;
}
