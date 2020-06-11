import { ComponentConfiguration } from '../aliases/ComponentConfiguration';
/**
 *
 * @since 2018-11-25
 */
export interface DescribeComponentConfigurationRecommendationResponse {
    /**
     * @description The recommended configuration settings of the component. The value is the escaped JSON of the configuration.
     * @since 2018-11-25
     */
    ComponentConfiguration?: ComponentConfiguration;
}
