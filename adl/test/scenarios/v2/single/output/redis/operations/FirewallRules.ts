export interface FirewallRules {
    /**
     * @description Gets all firewall rules in the specified redis cache.
     * @since 2018-03-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules
     * @tag Redis
     * @tag FirewallRules
     * @param resourceGroupName - The name of the resource group.
     * @param cacheName - The name of the Redis cache.
     * @return 200 - Successfully got the current rules
     */
    ListByRedisResource(api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter, resourceGroupName: string, cacheName: string, body?: Body<file, "application/json">): [(code: 200, mediaType: "application/json") => {
        body: RedisFirewallRuleListResult;
    }];
    /**
     * @description Gets a single firewall rule in a specified redis cache.
     * @since 2018-03-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName}
     * @tag Redis
     * @tag FirewallRules
     * @param resourceGroupName - The name of the resource group.
     * @param cacheName - The name of the Redis cache.
     * @param ruleName - The name of the firewall rule.
     * @return 200 - Successfully found the rule
     */
    Get(resourceGroupName: string, cacheName: string, ruleName: string, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter, body?: Body<file, "application/json">): [(code: 200, mediaType: "application/json") => {
        body: RedisFirewallRule;
    }];
    /**
     * @description Create or update a redis cache firewall rule
     * @since 2018-03-01
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName}
     * @tag Redis
     * @tag FirewallRules
     * @param resourceGroupName - The name of the resource group.
     * @param cacheName - The name of the Redis cache.
     * @param ruleName - The name of the firewall rule.
     * @param parameters - Parameters supplied to the create or update redis firewall rule operation.
     * @return 200 - Resource was successfully updated
     * @return 201 - Resource was successfully created
     */
    CreateOrUpdate(resourceGroupName: string, cacheName: string, ruleName: string, parameters: Body<RedisFirewallRuleCreateParameters, "application/json">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisFirewallRule;
    }, (code: 201, mediaType: "application/json") => {
        body: RedisFirewallRule;
    }];
    /**
     * @description Deletes a single firewall rule in a specified redis cache.
     * @since 2018-03-01
     * @http DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName}
     * @tag Redis
     * @tag FirewallRules
     * @param resourceGroupName - The name of the resource group.
     * @param cacheName - The name of the Redis cache.
     * @param ruleName - The name of the firewall rule.
     * @return 200 - Successfully deleted the rule
     * @return 204 - Successfully deleted the rule
     */
    Delete(resourceGroupName: string, cacheName: string, ruleName: string, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter, body?: Body<file, "application/json">): [(code: 200, mediaType: "application/json") => {}, (code: 204, mediaType: "application/json") => {}];
}
