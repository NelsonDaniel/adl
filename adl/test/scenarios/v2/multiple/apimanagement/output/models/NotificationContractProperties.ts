import { RecipientsContractProperties } from './RecipientsContractProperties';
/**
 * @description Notification Contract properties.
 * @since 2019-12-01
 */
export interface NotificationContractProperties {
    /**
     * @description Title of the Notification.
     * @since 2019-12-01
     */
    title: string & MaxLength<1000> & MinLength<1>;
    /**
     * @description Description of the Notification.
     * @since 2019-12-01
     */
    description?: string;
    /**
     * @description Recipient Parameter values.
     * @since 2019-12-01
     */
    recipients?: RecipientsContractProperties;
}
