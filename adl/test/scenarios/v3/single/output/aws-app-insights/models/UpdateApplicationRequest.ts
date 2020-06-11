import { ResourceGroupName } from '../aliases/ResourceGroupName';
import { OpsItemSNSTopicArn } from '../aliases/OpsItemSNSTopicArn';
/**
 * UpdateApplicationRequest
 * @since 2018-11-25
 */
export interface UpdateApplicationRequest {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName: ResourceGroupName;
    /**
     * @description  When set to <code>true</code>, creates opsItems for any problems detected on an application.
     * @since 2018-11-25
     */
    OpsCenterEnabled?: boolean;
    /**
     * @description  Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as <code>instance terminated</code>, <code>failed deployment</code>, and others.
     * @since 2018-11-25
     */
    CWEMonitorEnabled?: boolean;
    /**
     * @description  The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem.
     * @since 2018-11-25
     */
    OpsItemSNSTopicArn?: OpsItemSNSTopicArn;
    /**
     * @description  Disassociates the SNS topic from the opsItem created for detected problems.
     * @since 2018-11-25
     */
    RemoveSNSTopic?: boolean;
}
