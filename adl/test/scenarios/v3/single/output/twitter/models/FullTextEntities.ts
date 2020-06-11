import { CashtagEntity } from './CashtagEntity';
import { HashtagEntity } from './HashtagEntity';
import { MentionEntity } from './MentionEntity';
import { UrlEntity } from './UrlEntity';
/**
 *
 * @since 2.3
 */
export interface FullTextEntities {
    /**
     *
     * @since 2.3
     */
    cashtags?: Array<CashtagEntity> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    hashtags?: Array<HashtagEntity> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    mentions?: Array<MentionEntity> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    urls?: Array<UrlEntity> & MinimumElements<1>;
}
