import { NotificationContractProperties } from './NotificationContractProperties';
import { Resource } from './Resource';
/**
 * @description Notification details.
 * @since 2019-12-01
 */
export interface NotificationContract extends Resource {
    /**
     * @description Notification entity contract properties.
     * @since 2019-12-01
     */
    properties?: NotificationContractProperties;
}
