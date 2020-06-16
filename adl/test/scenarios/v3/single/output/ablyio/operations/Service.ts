export interface Service {
    /**
     * Enumerate all active channels of the application
     * @description Enumerate all active channels of the application
     * @since 1.1.0
     * @http GET /channels
     * @tag Status
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param prefix - Optionally limits the query to only those channels whose name starts with the given prefix
     * @param by - optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    getMetadataOfAllChannels(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, limit?: Query<int64 /* todo: add defaultValue '100' */>, prefix?: Query<string>, by?: Query<"value" | "id">): [(code: "2XX", mediaType: "application/json") => {
        body: Xor<Array<ChannelDetails>, Array<string>>;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">];
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: Xor<Array<ChannelDetails>, Array<string>>;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">];
    }, (code: "2XX", mediaType: "text/html") => {
        body: string;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">];
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Get metadata of a channel
     * @description Get metadata of a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}
     * @tag Status
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel_id - The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     * @return 200|application/json - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    getMetadataOfChannel(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, channel_id: string): [(code: 200, mediaType: "application/json") => {
        body: ChannelDetails;
        headers: [Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Get message history for a channel
     * @description Get message history for a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}/messages
     * @tag History
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel_id - The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return default| - Error
     */
    getMessagesByChannel(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, channel_id: string, start?: Query<string>, limit?: Query<int64 /* todo: add defaultValue '"100"' */>, end?: Query<string /* todo: add defaultValue '"now"' */>, direction?: Query<"forwards" | "backwards">): [(code: "2XX", mediaType: "application/json") => {
        body: Array<Message>;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">, Header<string, "ServerId">];
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: Array<Message>;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">, Header<string, "ServerId">];
    }, (code: "2XX", mediaType: "text/html") => {
        body: string;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">, Header<string, "ServerId">];
    }, () => {
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
        isException: true;
    }];
    /**
     * Publish a message to a channel
     * @description Publish a message to the specified channel
     * @since 1.1.0
     * @http POST /channels/{channel_id}/messages
     * @tag Publishing
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel_id - The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    publishMessagesToChannel(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, channel_id: string, body?: Body<Message, 'application/json'>, body?: Body<Message, 'application/x-msgpack'>, body?: Body<Message, 'application/x-www-form-urlencoded'>): [(code: "2XX", mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 1.1.0
             */
            channel?: string;
            /**
             *
             * @since 1.1.0
             */
            messageId?: string;
        };
        headers: [Header<string, "ServerId">];
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: {
            /**
             *
             * @since 1.1.0
             */
            channel?: string;
            /**
             *
             * @since 1.1.0
             */
            messageId?: string;
        };
        headers: [Header<string, "ServerId">];
    }, (code: "2XX", mediaType: "text/html") => {
        body: {
            /**
             *
             * @since 1.1.0
             */
            channel?: string;
            /**
             *
             * @since 1.1.0
             */
            messageId?: string;
        };
        headers: [Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Get presence of a channel
     * @description Get presence on a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}/presence
     * @tag Status
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel_id - The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     * @return 200|application/json - OK
     * @return 200|application/x-msgpack - OK
     * @return 200|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    getPresenceOfChannel(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, channel_id: string, clientId?: Query<string>, connectionId?: Query<string>, limit?: Query<int64 /* todo: add defaultValue '100' */>): [(code: 200, mediaType: "application/json") => {
        body: Array<PresenceMessage>;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">, Header<string, "ServerId">];
    }, (code: 200, mediaType: "application/x-msgpack") => {
        body: Array<PresenceMessage>;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">, Header<string, "ServerId">];
    }, (code: 200, mediaType: "text/html") => {
        body: string;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Get presence history of a channel
     * @description Get presence on a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}/presence/history
     * @tag History
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel_id - The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    getPresenceHistoryOfChannel(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, channel_id: string, start?: Query<string>, limit?: Query<int64 /* todo: add defaultValue '"100"' */>, end?: Query<string /* todo: add defaultValue '"now"' */>, direction?: Query<"forwards" | "backwards">): [(code: "2XX", mediaType: "application/json") => {
        body: Array<PresenceMessage>;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">];
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: Array<PresenceMessage>;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">];
    }, (code: "2XX", mediaType: "text/html") => {
        body: string;
        headers: [Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "Link">];
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Request an access token
     * @description This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.
     * @since 1.1.0
     * @http POST /keys/{keyName}/requestToken
     * @tag Authentication
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param keyName - The [key name](https://www.ably.io/documentation/rest-api/token-request-spec#api-key-format) comprises of the app ID and key ID of an API key.
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    requestAccessToken(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, keyName: string, body?: Body<Xor<TokenRequest, SignedTokenRequest>, 'application/json'>): [(code: "2XX", mediaType: "application/json") => {
        body: TokenDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: TokenDetails;
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * List channel subscriptions
     * @description Get a list of push notification subscriptions to channels.
     * @since 1.1.0
     * @http GET /push/channelSubscriptions
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel - Filter to restrict to subscriptions associated with that channel.
     * @param deviceId - Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.
     * @param clientId - Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.
     * @param limit - The maximum number of records to return.
     * @return 2XX|application/json - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    getPushSubscriptionsOnChannels(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, channel?: Query<string>, deviceId?: Query<string>, clientId?: Query<string>, limit?: Query<int64 /* todo: add defaultValue '100' */ & Maximum<1000>>): [(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Subscribe a device to a channel
     * @description Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.
     * @since 1.1.0
     * @http POST /push/channelSubscriptions
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @return 2XX| - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    subscribePushDeviceToChannel(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, body?: Body<Xor<{
        /**
         * @description Channel name.
         * @since 1.1.0
         */
        channel?: string;
        /**
         * @description Must be set when clientId is empty, cannot be used with clientId.
         * @since 1.1.0
         */
        deviceId?: string;
    }, {
        /**
         * @description Channel name.
         * @since 1.1.0
         */
        channel?: string;
        /**
         * @description Must be set when deviceId is empty, cannot be used with deviceId.
         * @since 1.1.0
         */
        clientId?: string;
    }>, 'application/json'>, body?: Body<Xor<{
        /**
         * @description Channel name.
         * @since 1.1.0
         */
        channel?: string;
        /**
         * @description Must be set when clientId is empty, cannot be used with clientId.
         * @since 1.1.0
         */
        deviceId?: string;
    }, {
        /**
         * @description Channel name.
         * @since 1.1.0
         */
        channel?: string;
        /**
         * @description Must be set when deviceId is empty, cannot be used with deviceId.
         * @since 1.1.0
         */
        clientId?: string;
    }>, 'application/x-msgpack'>, body?: Body<Xor<{
        /**
         * @description Channel name.
         * @since 1.1.0
         */
        channel?: string;
        /**
         * @description Must be set when clientId is empty, cannot be used with clientId.
         * @since 1.1.0
         */
        deviceId?: string;
    }, {
        /**
         * @description Channel name.
         * @since 1.1.0
         */
        channel?: string;
        /**
         * @description Must be set when deviceId is empty, cannot be used with deviceId.
         * @since 1.1.0
         */
        clientId?: string;
    }>, 'application/x-www-form-urlencoded'>): [(code: "2XX") => {}, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Delete a registered device's update token
     * @description Delete a device details object.
     * @since 1.1.0
     * @http DELETE /push/channelSubscriptions
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel - Filter to restrict to subscriptions associated with that channel.
     * @param deviceId - Must be set when clientId is empty, cannot be used with clientId.
     * @param clientId - Must be set when deviceId is empty, cannot be used with deviceId.
     * @return 2XX| - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    deletePushDeviceDetails(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, channel?: Query<string>, deviceId?: Query<string>, clientId?: Query<string>): [(code: "2XX") => {}, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * List all channels with at least one subscribed device
     * @description Returns a paginated response of channel names.
     * @since 1.1.0
     * @http GET /push/channels
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    getChannelsWithPushSubscribers(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">): [(code: "2XX", mediaType: "application/json") => {
        body: Array<string>;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: Array<string>;
    }, (code: "2XX", mediaType: "text/html") => {
        body: Array<string>;
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * List devices registered for receiving push notifications
     * @description List of device details of devices registed for push notifications.
     * @since 1.1.0
     * @http GET /push/deviceRegistrations
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param deviceId - Optional filter to restrict to devices associated with that deviceId.
     * @param clientId - Optional filter to restrict to devices associated with that clientId.
     * @param limit - The maximum number of records to return.
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    getRegisteredPushDevices(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, deviceId?: Query<string>, clientId?: Query<string>, limit?: Query<int64 /* todo: add defaultValue '100' */ & Maximum<1000>>): [(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Register a device for receiving push notifications
     * @description Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.
     * @since 1.1.0
     * @http POST /push/deviceRegistrations
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    registerPushDevice(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, body?: Body<DeviceDetails, 'application/json'>, body?: Body<DeviceDetails, 'application/x-msgpack'>): [(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Unregister matching devices for push notifications
     * @description Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.
     * @since 1.1.0
     * @http DELETE /push/deviceRegistrations
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param deviceId - Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.
     * @param clientId - Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.
     * @return 2XX| - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    unregisterAllPushDevices(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, deviceId?: Query<string>, clientId?: Query<string>): [(code: "2XX") => {}, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Get a device registration
     * @description Get the full details of a device.
     * @since 1.1.0
     * @http GET /push/deviceRegistrations/{device_id}
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param device_id - Device's ID.
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    getPushDeviceDetails(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, device_id: string): [(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Update a device registration
     * @description Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.
     * @since 1.1.0
     * @http PUT /push/deviceRegistrations/{device_id}
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param device_id - Device's ID.
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    putPushDeviceDetails(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, device_id: string, body?: Body<DeviceDetails, 'application/json'>, body?: Body<DeviceDetails, 'application/x-msgpack'>, body?: Body<DeviceDetails, 'application/x-www-form-urlencoded'>): [(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Unregister a single device for push notifications
     * @description Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.
     * @since 1.1.0
     * @http DELETE /push/deviceRegistrations/{device_id}
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param device_id - Device's ID.
     * @return 2XX| - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    unregisterPushDevice(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, device_id: string): [(code: "2XX") => {}, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Update a device registration
     * @description Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.
     * @since 1.1.0
     * @http PATCH /push/deviceRegistrations/{device_id}
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param device_id - Device's ID.
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    patchPushDeviceDetails(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, device_id: string, body?: Body<DeviceDetails, 'application/json'>, body?: Body<DeviceDetails, 'application/x-msgpack'>, body?: Body<DeviceDetails, 'application/x-www-form-urlencoded'>): [(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Reset a registered device's update token
     * @description Gets an updated device details object.
     * @since 1.1.0
     * @http GET /push/deviceRegistrations/{device_id}/resetUpdateToken
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param device_id - Device's ID.
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    updatePushDeviceDetails(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, device_id: string): [(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Publish a push notification to device(s)
     * @description A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.
     * @since 1.1.0
     * @http POST /push/publish
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @return 2XX| - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    publishPushNotificationToDevices(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, body?: Body<{
        /**
         *
         * @since 1.1.0
         */
        push?: Push;
        /**
         *
         * @since 1.1.0
         */
        recipient: Recipient;
    }, 'application/json'>, body?: Body<{
        /**
         *
         * @since 1.1.0
         */
        push?: Push;
        /**
         *
         * @since 1.1.0
         */
        recipient: Recipient;
    }, 'application/x-msgpack'>, body?: Body<{
        /**
         *
         * @since 1.1.0
         */
        push?: Push;
        /**
         *
         * @since 1.1.0
         */
        recipient: Recipient;
    }, 'application/x-www-form-urlencoded'>): [(code: "2XX") => {}, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Retrieve usage statistics for an application
     * @description The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.
     * @since 1.1.0
     * @http GET /stats
     * @tag Stats
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param unit - Specifies the unit of aggregation in the returned results.
     * @return 2XX|application/json - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    getStats(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">, start?: Query<string>, limit?: Query<int64 /* todo: add defaultValue '"100"' */>, end?: Query<string /* todo: add defaultValue '"now"' */>, direction?: Query<"forwards" | "backwards">, unit?: Query<"minute" | "hour" | "day" | "month">): [(code: "2XX", mediaType: "application/json") => {
        body: {};
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
    /**
     * Get the service time
     * @description This returns the service time in milliseconds since the epoch.
     * @since 1.1.0
     * @http GET /time
     * @tag Stats
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @return 2XX|application/json - OK
     * @return 2XX|application/x-msgpack - OK
     * @return 2XX|text/html - OK
     * @return Error|application/json - Error
     * @return Error|application/x-msgpack - Error
     * @return Error|text/html - Error
     */
    getTime(X_Ably_Version?: Header<string, 'X-Ably-Version'>, format?: Query<"json" | "jsonp" | "msgpack" | "html">): [(code: "2XX", mediaType: "application/json") => {
        body: Array<int64>;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: Array<int64>;
    }, (code: "2XX", mediaType: "text/html") => {
        body: string;
    }, (code: "Error", mediaType: "application/json") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "application/x-msgpack") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }, (code: "Error", mediaType: "text/html") => {
        body: Error;
        headers: [Header<int64, "ErrorCode">, Header<string, "ErrorMessage">, Header<string, "ServerId">];
    }];
}
