import { SamplingType } from '../enums/SamplingType';
/**
 * @description Sampling settings for Diagnostic.
 * @since 2019-12-01
 */
export interface SamplingSettings {
    /**
     * @description Sampling type.
     * @since 2019-12-01
     */
    samplingType?: SamplingType;
    /**
     * @description Rate of sampling for fixed-rate sampling.
     * @since 2019-12-01
     */
    percentage?: double & Minimum<0> & Maximum<100>;
}
