import { AmazonResourceName } from '../aliases/AmazonResourceName';
import { TagKeyList } from '../aliases/TagKeyList';
/**
 * UntagResourceRequest
 * @since 2018-11-25
 */
export interface UntagResourceRequest {
    /**
     * @description The Amazon Resource Name (ARN) of the application that you want to remove one or more tags from.
     * @since 2018-11-25
     */
    ResourceARN: AmazonResourceName;
    /**
     * @description <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.</p> <p>To remove more than one tag from the application, append the <code>TagKeys</code> parameter and argument for each additional tag to remove, separated by an ampersand. </p>
     * @since 2018-11-25
     */
    TagKeys: TagKeyList;
}
