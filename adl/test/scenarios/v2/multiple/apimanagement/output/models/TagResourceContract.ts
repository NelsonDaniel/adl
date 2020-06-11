import { TagTagResourceContractProperties } from './TagTagResourceContractProperties';
import { ApiTagResourceContractProperties } from './ApiTagResourceContractProperties';
import { OperationTagResourceContractProperties } from './OperationTagResourceContractProperties';
import { ProductTagResourceContractProperties } from './ProductTagResourceContractProperties';
/**
 * @description TagResource contract properties.
 * @since 2019-12-01
 */
export interface TagResourceContract {
    /**
     * @description Tag associated with the resource.
     * @since 2019-12-01
     */
    tag: TagTagResourceContractProperties;
    /**
     * @description Api associated with the tag.
     * @since 2019-12-01
     */
    api?: ApiTagResourceContractProperties;
    /**
     * @description Operation associated with the tag.
     * @since 2019-12-01
     */
    operation?: OperationTagResourceContractProperties;
    /**
     * @description Product associated with the tag.
     * @since 2019-12-01
     */
    product?: ProductTagResourceContractProperties;
}
