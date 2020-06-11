export interface Service {
    /**
     * Returns the open api spec document.
     * @description Full open api spec in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)
     * @since 2.3
     * @http GET /labs/2/openapi.json
     * @tag General
     * @return 200 - The request was successful
     */
    getOpenApiSpec(): Http.Response<'200', [object, Object], 'application/json'>;
    /**
     * Returns hydrated Tweet objects
     * @description Returns a variety of information about the Tweet specified by the requested ID
     * @since 2.3
     * @http GET /labs/2/tweets
     * @tag Tweets
     * @param ids - A comma separated list of Tweet IDs. Up to 100 are allowed in a single request.
     * @param expansions - A comma separated list of fields to expand.
     * @param tweet_fields - A comma separated list of Tweet fields to display.
     * @param user_fields - A comma separated list of User fields to display.
     * @param media_fields - A comma separated list of Media fields to display.
     * @param place_fields - A comma separated list of Place fields to display.
     * @param poll_fields - A comma separated list of Poll fields to display.
     * @return 200 - The request was successful
     * @return HttpErrorResponse - The request has failed.
     * @return HttpErrorResponse - The request has failed.
     */
    findTweetsById(ids: Http.Query<Array<TweetID> & MaximumElements<100> & MinimumElements<1>>, expansions?: Http.Query<Array<"author_id" | "referenced_tweets.id" | "in_reply_to_user_id" | "geo.place_id" | "attachments.media_keys" | "attachments.poll_ids" | "entities.mentions.username" | "referenced_tweets.id.author_id"> & MinimumElements<1> & UniqueElements>, tweet_fields?: Http.Query<Array<"id" | "created_at" | "text" | "author_id" | "in_reply_to_user_id" | "referenced_tweets" | "attachments" | "withheld" | "geo" | "entities" | "public_metrics" | "possibly_sensitive" | "source" | "lang" | "context_annotations"> & MinimumElements<1> & UniqueElements, 'tweet.fields'>, user_fields?: Http.Query<Array<"id" | "created_at" | "name" | "username" | "protected" | "verified" | "withheld" | "profile_image_url" | "location" | "url" | "description" | "entities" | "pinned_tweet_id" | "public_metrics"> & MinimumElements<1> & UniqueElements, 'user.fields'>, media_fields?: Http.Query<Array<"media_key" | "duration_ms" | "height" | "preview_image_url" | "type" | "url" | "width"> & MinimumElements<1> & UniqueElements, 'media.fields'>, place_fields?: Http.Query<Array<"id" | "name" | "country_code" | "place_type" | "full_name" | "country" | "contained_within" | "geo"> & MinimumElements<1> & UniqueElements, 'place.fields'>, poll_fields?: Http.Query<Array<"id" | "options" | "voting_status" | "end_datetime" | "duration_minutes"> & MinimumElements<1> & UniqueElements, 'poll.fields'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/problem+json'>;
    /**
     * Returns Tweets from the last 7 days that match a search query.
     * @description Returns Tweets from the last 7 days that match a search query.
     * @since 2.3
     * @http GET /labs/2/tweets/search
     * @tag Search
     * @tag Tweets
     * @param query - One query/rule/filter for matching Tweets. Up to 512 characters.
     * @param start_time - YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
     * @param end_time - YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
     * @param since_id - Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
     * @param until_id - Returns results with a Tweet ID less than (that is, older than) the specified ID.
     * @param max_results - The maximum number of search results to be returned by a request.
     * @param next_token - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * @param expansions - A comma separated list of fields to expand.
     * @param tweet_fields - A comma separated list of Tweet fields to display.
     * @param user_fields - A comma separated list of User fields to display.
     * @param media_fields - A comma separated list of Media fields to display.
     * @param place_fields - A comma separated list of Place fields to display.
     * @param poll_fields - A comma separated list of Poll fields to display.
     * @return 200 - Tweets recent search response
     * @return HttpErrorResponse - The request has failed.
     * @return HttpErrorResponse - The request has failed.
     */
    tweetsRecentSearch(query: Http.Query<string & MaxLength<512> & MinLength<1>>, start_time?: Http.Query<dateTime>, end_time?: Http.Query<dateTime>, since_id?: Http.Query<TweetID>, until_id?: Http.Query<TweetID>, max_results?: Http.Query<int32 /* todo: add defaultValue '10' */ & Minimum<10> & Maximum<100>>, next_token?: Http.Query<string>, expansions?: Http.Query<Array<"author_id" | "referenced_tweets.id" | "in_reply_to_user_id" | "geo.place_id" | "attachments.media_keys" | "attachments.poll_ids" | "entities.mentions.username" | "referenced_tweets.id.author_id"> & MinimumElements<1> & UniqueElements>, tweet_fields?: Http.Query<Array<"id" | "created_at" | "text" | "author_id" | "in_reply_to_user_id" | "referenced_tweets" | "attachments" | "withheld" | "geo" | "entities" | "public_metrics" | "possibly_sensitive" | "source" | "lang" | "context_annotations"> & MinimumElements<1> & UniqueElements, 'tweet.fields'>, user_fields?: Http.Query<Array<"id" | "created_at" | "name" | "username" | "protected" | "verified" | "withheld" | "profile_image_url" | "location" | "url" | "description" | "entities" | "pinned_tweet_id" | "public_metrics"> & MinimumElements<1> & UniqueElements, 'user.fields'>, media_fields?: Http.Query<Array<"media_key" | "duration_ms" | "height" | "preview_image_url" | "type" | "url" | "width"> & MinimumElements<1> & UniqueElements, 'media.fields'>, place_fields?: Http.Query<Array<"id" | "name" | "country_code" | "place_type" | "full_name" | "country" | "contained_within" | "geo"> & MinimumElements<1> & UniqueElements, 'place.fields'>, poll_fields?: Http.Query<Array<"id" | "options" | "voting_status" | "end_datetime" | "duration_minutes"> & MinimumElements<1> & UniqueElements, 'poll.fields'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/problem+json'>;
    /**
     * Returns hydrated Tweet objects
     * @description Returns a variety of information about the Tweet specified by the requested ID
     * @since 2.3
     * @http GET /labs/2/tweets/{id}
     * @tag Tweets
     * @param id - A single Tweet ID.
     * @param expansions - A comma separated list of fields to expand.
     * @param tweet_fields - A comma separated list of Tweet fields to display.
     * @param user_fields - A comma separated list of User fields to display.
     * @param media_fields - A comma separated list of Media fields to display.
     * @param place_fields - A comma separated list of Place fields to display.
     * @param poll_fields - A comma separated list of Poll fields to display.
     * @return 200 - The request was successful
     * @return HttpErrorResponse - The request has failed.
     * @return HttpErrorResponse - The request has failed.
     */
    findTweetById(id: Http.Path<TweetID>, expansions?: Http.Query<Array<"author_id" | "referenced_tweets.id" | "in_reply_to_user_id" | "geo.place_id" | "attachments.media_keys" | "attachments.poll_ids" | "entities.mentions.username" | "referenced_tweets.id.author_id"> & MinimumElements<1> & UniqueElements>, tweet_fields?: Http.Query<Array<"id" | "created_at" | "text" | "author_id" | "in_reply_to_user_id" | "referenced_tweets" | "attachments" | "withheld" | "geo" | "entities" | "public_metrics" | "possibly_sensitive" | "source" | "lang" | "context_annotations"> & MinimumElements<1> & UniqueElements, 'tweet.fields'>, user_fields?: Http.Query<Array<"id" | "created_at" | "name" | "username" | "protected" | "verified" | "withheld" | "profile_image_url" | "location" | "url" | "description" | "entities" | "pinned_tweet_id" | "public_metrics"> & MinimumElements<1> & UniqueElements, 'user.fields'>, media_fields?: Http.Query<Array<"media_key" | "duration_ms" | "height" | "preview_image_url" | "type" | "url" | "width"> & MinimumElements<1> & UniqueElements, 'media.fields'>, place_fields?: Http.Query<Array<"id" | "name" | "country_code" | "place_type" | "full_name" | "country" | "contained_within" | "geo"> & MinimumElements<1> & UniqueElements, 'place.fields'>, poll_fields?: Http.Query<Array<"id" | "options" | "voting_status" | "end_datetime" | "duration_minutes"> & MinimumElements<1> & UniqueElements, 'poll.fields'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/problem+json'>;
    /**
     * Hides a reply to an owned conversation.
     * @description Tweet ID in the path is that of the reply to hide.
     * @since 2.3
     * @http PUT /labs/2/tweets/{id}/hidden
     * @tag Tweets
     * @param id - The ID of the reply that you want to hide.
     * @return 200 - A successful response. The reply has been hidden.
     * @return HttpErrorResponse - The request has failed.
     * @return HttpErrorResponse - The request has failed.
     */
    hideReplyById(id: Http.Path<TweetID>, body?: Http.Body<{
        /**
         *
         * @since 2.3
         */
        hidden?: true;
    }, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/problem+json'>;
    /**
     * Return details for the specified users
     * @description This endpoint returns information about users. Specify users by their ID.
     * @since 2.3
     * @http GET /labs/2/users
     * @tag Users
     * @param ids - Required. A list of User IDs, comma-separated. You can specify up to 100 IDs.
     * @param expansions - A comma separated list of fields to expand.
     * @param tweet_fields - A comma separated list of Tweet fields to display.
     * @param user_fields - A comma separated list of User fields to display.
     * @param media_fields - A comma separated list of Media fields to display.
     * @param place_fields - A comma separated list of Place fields to display.
     * @param poll_fields - A comma separated list of Poll fields to display.
     * @return 200 - The request was successful
     * @return HttpErrorResponse - The request has failed.
     * @return HttpErrorResponse - The request has failed.
     */
    findUsersById(ids: Http.Query<Array<UserID> & MaximumElements<100> & MinimumElements<1>>, expansions?: Http.Query<Array<"pinned_tweet_id"> & MinimumElements<1> & UniqueElements>, tweet_fields?: Http.Query<Array<"id" | "created_at" | "text" | "author_id" | "in_reply_to_user_id" | "referenced_tweets" | "attachments" | "withheld" | "geo" | "entities" | "public_metrics" | "possibly_sensitive" | "source" | "lang" | "context_annotations"> & MinimumElements<1> & UniqueElements, 'tweet.fields'>, user_fields?: Http.Query<Array<"id" | "created_at" | "name" | "username" | "protected" | "verified" | "withheld" | "profile_image_url" | "location" | "url" | "description" | "entities" | "pinned_tweet_id" | "public_metrics"> & MinimumElements<1> & UniqueElements, 'user.fields'>, media_fields?: Http.Query<Array<"media_key" | "duration_ms" | "height" | "preview_image_url" | "type" | "url" | "width"> & MinimumElements<1> & UniqueElements, 'media.fields'>, place_fields?: Http.Query<Array<"id" | "name" | "country_code" | "place_type" | "full_name" | "country" | "contained_within" | "geo"> & MinimumElements<1> & UniqueElements, 'place.fields'>, poll_fields?: Http.Query<Array<"id" | "options" | "voting_status" | "end_datetime" | "duration_minutes"> & MinimumElements<1> & UniqueElements, 'poll.fields'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/problem+json'>;
    /**
     * Return details for the specified users
     * @description This endpoint returns information about users. Specify users by their username.
     * @since 2.3
     * @http GET /labs/2/users/by
     * @tag Users
     * @param usernames - Required . A list of usernames, comma-separated. You can specify up to 100 usernames.
     * @param expansions - A comma separated list of fields to expand.
     * @param tweet_fields - A comma separated list of Tweet fields to display.
     * @param user_fields - A comma separated list of User fields to display.
     * @param media_fields - A comma separated list of Media fields to display.
     * @param place_fields - A comma separated list of Place fields to display.
     * @param poll_fields - A comma separated list of Poll fields to display.
     * @return 200 - The request was successful
     * @return HttpErrorResponse - The request has failed.
     * @return HttpErrorResponse - The request has failed.
     */
    findUsersByUsername(usernames: Http.Query<Array<UserName> & MaximumElements<100> & MinimumElements<1>>, expansions?: Http.Query<Array<"pinned_tweet_id"> & MinimumElements<1> & UniqueElements>, tweet_fields?: Http.Query<Array<"id" | "created_at" | "text" | "author_id" | "in_reply_to_user_id" | "referenced_tweets" | "attachments" | "withheld" | "geo" | "entities" | "public_metrics" | "possibly_sensitive" | "source" | "lang" | "context_annotations"> & MinimumElements<1> & UniqueElements, 'tweet.fields'>, user_fields?: Http.Query<Array<"id" | "created_at" | "name" | "username" | "protected" | "verified" | "withheld" | "profile_image_url" | "location" | "url" | "description" | "entities" | "pinned_tweet_id" | "public_metrics"> & MinimumElements<1> & UniqueElements, 'user.fields'>, media_fields?: Http.Query<Array<"media_key" | "duration_ms" | "height" | "preview_image_url" | "type" | "url" | "width"> & MinimumElements<1> & UniqueElements, 'media.fields'>, place_fields?: Http.Query<Array<"id" | "name" | "country_code" | "place_type" | "full_name" | "country" | "contained_within" | "geo"> & MinimumElements<1> & UniqueElements, 'place.fields'>, poll_fields?: Http.Query<Array<"id" | "options" | "voting_status" | "end_datetime" | "duration_minutes"> & MinimumElements<1> & UniqueElements, 'poll.fields'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/problem+json'>;
    /**
     * Return details for the specified users
     * @description This endpoint returns information about a user. Specify user by username.
     * @since 2.3
     * @http GET /labs/2/users/by/username/{username}
     * @tag Users
     * @param username - Required. A username.
     * @param expansions - A comma separated list of fields to expand.
     * @param tweet_fields - A comma separated list of Tweet fields to display.
     * @param user_fields - A comma separated list of User fields to display.
     * @param media_fields - A comma separated list of Media fields to display.
     * @param place_fields - A comma separated list of Place fields to display.
     * @param poll_fields - A comma separated list of Poll fields to display.
     * @return 200 - The request was successful
     * @return HttpErrorResponse - The request has failed.
     * @return HttpErrorResponse - The request has failed.
     */
    findUserByUsername(username: Http.Path<UserName>, expansions?: Http.Query<Array<"pinned_tweet_id"> & MinimumElements<1> & UniqueElements>, tweet_fields?: Http.Query<Array<"id" | "created_at" | "text" | "author_id" | "in_reply_to_user_id" | "referenced_tweets" | "attachments" | "withheld" | "geo" | "entities" | "public_metrics" | "possibly_sensitive" | "source" | "lang" | "context_annotations"> & MinimumElements<1> & UniqueElements, 'tweet.fields'>, user_fields?: Http.Query<Array<"id" | "created_at" | "name" | "username" | "protected" | "verified" | "withheld" | "profile_image_url" | "location" | "url" | "description" | "entities" | "pinned_tweet_id" | "public_metrics"> & MinimumElements<1> & UniqueElements, 'user.fields'>, media_fields?: Http.Query<Array<"media_key" | "duration_ms" | "height" | "preview_image_url" | "type" | "url" | "width"> & MinimumElements<1> & UniqueElements, 'media.fields'>, place_fields?: Http.Query<Array<"id" | "name" | "country_code" | "place_type" | "full_name" | "country" | "contained_within" | "geo"> & MinimumElements<1> & UniqueElements, 'place.fields'>, poll_fields?: Http.Query<Array<"id" | "options" | "voting_status" | "end_datetime" | "duration_minutes"> & MinimumElements<1> & UniqueElements, 'poll.fields'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/problem+json'>;
    /**
     * Return details for the specified users
     * @description This endpoint returns information about a user. Specify user by ID.
     * @since 2.3
     * @http GET /labs/2/users/{id}
     * @tag Users
     * @param id - Required. A User ID.
     * @param expansions - A comma separated list of fields to expand.
     * @param tweet_fields - A comma separated list of Tweet fields to display.
     * @param user_fields - A comma separated list of User fields to display.
     * @param media_fields - A comma separated list of Media fields to display.
     * @param place_fields - A comma separated list of Place fields to display.
     * @param poll_fields - A comma separated list of Poll fields to display.
     * @return 200 - The request was successful
     * @return HttpErrorResponse - The request has failed.
     * @return HttpErrorResponse - The request has failed.
     */
    findUserById(id: Http.Path<UserID>, expansions?: Http.Query<Array<"pinned_tweet_id"> & MinimumElements<1> & UniqueElements>, tweet_fields?: Http.Query<Array<"id" | "created_at" | "text" | "author_id" | "in_reply_to_user_id" | "referenced_tweets" | "attachments" | "withheld" | "geo" | "entities" | "public_metrics" | "possibly_sensitive" | "source" | "lang" | "context_annotations"> & MinimumElements<1> & UniqueElements, 'tweet.fields'>, user_fields?: Http.Query<Array<"id" | "created_at" | "name" | "username" | "protected" | "verified" | "withheld" | "profile_image_url" | "location" | "url" | "description" | "entities" | "pinned_tweet_id" | "public_metrics"> & MinimumElements<1> & UniqueElements, 'user.fields'>, media_fields?: Http.Query<Array<"media_key" | "duration_ms" | "height" | "preview_image_url" | "type" | "url" | "width"> & MinimumElements<1> & UniqueElements, 'media.fields'>, place_fields?: Http.Query<Array<"id" | "name" | "country_code" | "place_type" | "full_name" | "country" | "contained_within" | "geo"> & MinimumElements<1> & UniqueElements, 'place.fields'>, poll_fields?: Http.Query<Array<"id" | "options" | "voting_status" | "end_datetime" | "duration_minutes"> & MinimumElements<1> & UniqueElements, 'poll.fields'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/json'> | Http.Response<'HttpErrorResponse', [object, Object], 'application/problem+json'>;
}
