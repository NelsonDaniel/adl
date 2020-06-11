import { ResourceGroupName } from '../aliases/ResourceGroupName';
import { OpsItemSNSTopicArn } from '../aliases/OpsItemSNSTopicArn';
import { TagList } from '../aliases/TagList';
/**
 * CreateApplicationRequest
 * @since 2018-11-25
 */
export interface CreateApplicationRequest {
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
     * @description List of tags to add to the application. tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
     * @since 2018-11-25
     */
    Tags?: TagList;
}
