import { ResourceGroupName } from '../aliases/ResourceGroupName';
import { OpsItemSNSTopicArn } from '../aliases/OpsItemSNSTopicArn';
/**
 * @description Describes the status of the application.
 * @since 2018-11-25
 */
export interface ApplicationInfo {
    /**
     * @description The name of the resource group used for the application.
     * @since 2018-11-25
     */
    ResourceGroupName?: ResourceGroupName;
    /**
     * @description The lifecycle of the application.
     * @since 2018-11-25
     */
    LifeCycle?: string;
    /**
     * @description  The SNS topic provided to Application Insights that is associated to the created opsItems to receive SNS notifications for opsItem updates.
     * @since 2018-11-25
     */
    OpsItemSNSTopicArn?: OpsItemSNSTopicArn;
    /**
     * @description  Indicates whether Application Insights will create opsItems for any problem detected by Application Insights for an application.
     * @since 2018-11-25
     */
    OpsCenterEnabled?: boolean;
    /**
     * @description  Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as <code>instance terminated</code>, <code>failed deployment</code>, and others.
     * @since 2018-11-25
     */
    CWEMonitorEnabled?: boolean;
    /**
     * @description <p>The issues on the user side that block Application Insights from successfully monitoring an application. Example remarks include:</p> <ul> <li> <p>“Configuring application, detected 1 Errors, 3 Warnings”</p> </li> <li> <p>“Configuring application, detected 1 Unconfigured Components”</p> </li> </ul>
     * @since 2018-11-25
     */
    Remarks?: string;
}
