import { URLImage } from './URLImage';
import { HTTPStatusCode } from '../aliases/HTTPStatusCode';
/**
 * @description Represent the portion of text recognized as a URL.
 * @since 2.3
 */
export interface URLFields {
    /**
     * @description Description of the URL landing page.
     * @since 2.3
     */
    description?: string;
    /**
     * @description The URL as displayed in the Twitter client.
     * @since 2.3
     */
    display_url?: string;
    /**
     *
     * @since 2.3
     */
    expanded_url?: string;
    /**
     *
     * @since 2.3
     */
    images?: Array<URLImage> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    status?: HTTPStatusCode;
    /**
     * @description Title of the page the URL points to.
     * @since 2.3
     */
    title?: string;
    /**
     * @description Fully resolved url
     * @since 2.3
     */
    unwound_url?: string;
    /**
     *
     * @since 2.3
     */
    url: string;
}
