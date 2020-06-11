import { Tier } from '../enums/Tier';
/**
 * @description Describes a standalone resource or similarly grouped resources that the application is made up of.
 * @since 2018-11-25
 */
export interface ApplicationComponent {
    /**
     * @description The name of the component.
     * @since 2018-11-25
     */
    ComponentName?: string;
    /**
     * @description The resource type. Supported resource types include EC2 instances, Auto Scaling group, Classic ELB, Application ELB, and SQS Queue.
     * @since 2018-11-25
     */
    ResourceType?: string;
    /**
     * @description The stack tier of the application component.
     * @since 2018-11-25
     */
    Tier?: Tier;
    /**
     * @description Indicates whether the application component is monitored.
     * @since 2018-11-25
     */
    Monitor?: boolean;
}
