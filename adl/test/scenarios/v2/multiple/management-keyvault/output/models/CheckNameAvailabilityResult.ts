import { Reason } from '../enums/Reason';
/**
 * @description The CheckNameAvailability operation response.
 * @since 2019-09-01
 */
export interface CheckNameAvailabilityResult {
    /**
     * @description A boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used.
     * @since 2019-09-01
     */
    readonly nameAvailable?: boolean;
    /**
     * @description The reason that a vault name could not be used. The Reason element is only returned if NameAvailable is false.
     * @since 2019-09-01
     */
    readonly reason?: Reason;
    /**
     * @description An error message explaining the Reason value in more detail.
     * @since 2019-09-01
     */
    readonly message?: string;
}
