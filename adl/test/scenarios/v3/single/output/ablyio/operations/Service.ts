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
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    getMetadataOfAllChannels(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, limit?: Http.Query<int64 /* todo: add defaultValue '100' */>, prefix?: Http.Query<string>, by?: Http.Query<"value" | "id">): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Get metadata of a channel
     * @description Get metadata of a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}
     * @tag Status
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel_id - The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     * @return 200 - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    getMetadataOfChannel(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, channel_id: Http.Path<string>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Get message history for a channel
     * @description Get message history for a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}/messages
     * @tag History
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel_id - The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return default - Error
     */
    getMessagesByChannel(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, channel_id: Http.Path<string>, start?: Http.Query<string>, limit?: Http.Query<int64 /* todo: add defaultValue '"100"' */>, end?: Http.Query<string /* todo: add defaultValue '"now"' */>, direction?: Http.Query<"forwards" | "backwards">): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<Http.Default>;
    /**
     * Publish a message to a channel
     * @description Publish a message to the specified channel
     * @since 1.1.0
     * @http POST /channels/{channel_id}/messages
     * @tag Publishing
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel_id - The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    publishMessagesToChannel(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, channel_id: Http.Path<string>, body?: Http.Body<Message, 'application/json'>, body?: Http.Body<Message, 'application/x-msgpack'>, body?: Http.Body<Message, 'application/x-www-form-urlencoded'>): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Get presence of a channel
     * @description Get presence on a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}/presence
     * @tag Status
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel_id - The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     * @return 200 - OK
     * @return 200 - OK
     * @return 200 - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    getPresenceOfChannel(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, channel_id: Http.Path<string>, clientId?: Http.Query<string>, connectionId?: Http.Query<string>, limit?: Http.Query<int64 /* todo: add defaultValue '100' */>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'200', [object, Object], 'application/x-msgpack'> | Http.Response<'200', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Get presence history of a channel
     * @description Get presence on a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}/presence/history
     * @tag History
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param channel_id - The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    getPresenceHistoryOfChannel(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, channel_id: Http.Path<string>, start?: Http.Query<string>, limit?: Http.Query<int64 /* todo: add defaultValue '"100"' */>, end?: Http.Query<string /* todo: add defaultValue '"now"' */>, direction?: Http.Query<"forwards" | "backwards">): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Request an access token
     * @description This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.
     * @since 1.1.0
     * @http POST /keys/{keyName}/requestToken
     * @tag Authentication
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param keyName - The [key name](https://www.ably.io/documentation/rest-api/token-request-spec#api-key-format) comprises of the app ID and key ID of an API key.
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    requestAccessToken(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, keyName: Http.Path<string>, body?: Http.Body<Xor<TokenRequest, SignedTokenRequest>, 'application/json'>): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
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
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    getPushSubscriptionsOnChannels(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, channel?: Http.Query<string>, deviceId?: Http.Query<string>, clientId?: Http.Query<string>, limit?: Http.Query<int64 /* todo: add defaultValue '100' */ & Maximum<1000>>): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Subscribe a device to a channel
     * @description Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.
     * @since 1.1.0
     * @http POST /push/channelSubscriptions
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    subscribePushDeviceToChannel(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, body?: Http.Body<Xor<{
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
    }>, 'application/json'>, body?: Http.Body<Xor<{
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
    }>, 'application/x-msgpack'>, body?: Http.Body<Xor<{
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
    }>, 'application/x-www-form-urlencoded'>): Http.Response<'2XX'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
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
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    deletePushDeviceDetails(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, channel?: Http.Query<string>, deviceId?: Http.Query<string>, clientId?: Http.Query<string>): Http.Response<'2XX'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * List all channels with at least one subscribed device
     * @description Returns a paginated response of channel names.
     * @since 1.1.0
     * @http GET /push/channels
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    getChannelsWithPushSubscribers(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
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
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    getRegisteredPushDevices(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, deviceId?: Http.Query<string>, clientId?: Http.Query<string>, limit?: Http.Query<int64 /* todo: add defaultValue '100' */ & Maximum<1000>>): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Register a device for receiving push notifications
     * @description Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.
     * @since 1.1.0
     * @http POST /push/deviceRegistrations
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    registerPushDevice(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, body?: Http.Body<DeviceDetails, 'application/json'>, body?: Http.Body<DeviceDetails, 'application/x-msgpack'>): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
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
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    unregisterAllPushDevices(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, deviceId?: Http.Query<string>, clientId?: Http.Query<string>): Http.Response<'2XX'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Get a device registration
     * @description Get the full details of a device.
     * @since 1.1.0
     * @http GET /push/deviceRegistrations/{device_id}
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param device_id - Device's ID.
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    getPushDeviceDetails(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, device_id: Http.Path<string>): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Update a device registration
     * @description Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.
     * @since 1.1.0
     * @http PUT /push/deviceRegistrations/{device_id}
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param device_id - Device's ID.
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    putPushDeviceDetails(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, device_id: Http.Path<string>, body?: Http.Body<DeviceDetails, 'application/json'>, body?: Http.Body<DeviceDetails, 'application/x-msgpack'>, body?: Http.Body<DeviceDetails, 'application/x-www-form-urlencoded'>): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Unregister a single device for push notifications
     * @description Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.
     * @since 1.1.0
     * @http DELETE /push/deviceRegistrations/{device_id}
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param device_id - Device's ID.
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    unregisterPushDevice(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, device_id: Http.Path<string>): Http.Response<'2XX'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Update a device registration
     * @description Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.
     * @since 1.1.0
     * @http PATCH /push/deviceRegistrations/{device_id}
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param device_id - Device's ID.
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    patchPushDeviceDetails(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, device_id: Http.Path<string>, body?: Http.Body<DeviceDetails, 'application/json'>, body?: Http.Body<DeviceDetails, 'application/x-msgpack'>, body?: Http.Body<DeviceDetails, 'application/x-www-form-urlencoded'>): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Reset a registered device's update token
     * @description Gets an updated device details object.
     * @since 1.1.0
     * @http GET /push/deviceRegistrations/{device_id}/resetUpdateToken
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param device_id - Device's ID.
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    updatePushDeviceDetails(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, device_id: Http.Path<string>): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Publish a push notification to device(s)
     * @description A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.
     * @since 1.1.0
     * @http POST /push/publish
     * @tag Push
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    publishPushNotificationToDevices(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, body?: Http.Body<{
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
    }, 'application/json'>, body?: Http.Body<{
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
    }, 'application/x-msgpack'>, body?: Http.Body<{
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
    }, 'application/x-www-form-urlencoded'>): Http.Response<'2XX'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Retrieve usage statistics for an application
     * @description The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.
     * @since 1.1.0
     * @http GET /stats
     * @tag Stats
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @param unit - Specifies the unit of aggregation in the returned results.
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    getStats(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">, start?: Http.Query<string>, limit?: Http.Query<int64 /* todo: add defaultValue '"100"' */>, end?: Http.Query<string /* todo: add defaultValue '"now"' */>, direction?: Http.Query<"forwards" | "backwards">, unit?: Http.Query<"minute" | "hour" | "day" | "month">): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
    /**
     * Get the service time
     * @description This returns the service time in milliseconds since the epoch.
     * @since 1.1.0
     * @http GET /time
     * @tag Stats
     * @param X_Ably_Version - The version of the API you wish to use.
     * @param format - The response format you would like
     * @return 2XX - OK
     * @return 2XX - OK
     * @return 2XX - OK
     * @return Error - Error
     * @return Error - Error
     * @return Error - Error
     */
    getTime(X_Ably_Version?: Http.Header<string, 'X-Ably-Version'>, format?: Http.Query<"json" | "jsonp" | "msgpack" | "html">): Http.Response<'2XX', [object, Object], 'application/json'> | Http.Response<'2XX', [object, Object], 'application/x-msgpack'> | Http.Response<'2XX', [object, Object], 'text/html'> | Http.Response<'Error', [object, Object], 'application/json'> | Http.Response<'Error', [object, Object], 'application/x-msgpack'> | Http.Response<'Error', [object, Object], 'text/html'>;
}
