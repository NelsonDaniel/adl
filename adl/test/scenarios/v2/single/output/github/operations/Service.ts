export interface Service {
    /**
     * @description Lists all the emojis available to use on GitHub.
     * @since v3
     * @http GET /emojis
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    emojis(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: emojis;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List public events.
     * @since v3
     * @http GET /events
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    events(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: events;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List Feeds.
     * GitHub provides several timeline resources in Atom format. The Feeds API
     *  lists all the feeds available to the authenticating user.
     *
     * @since v3
     * @http GET /feeds
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    feeds(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: feeds;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List the authenticated user's gists or if called anonymously, this will
     * return all public gists.
     *
     * @since v3
     * @http GET /gists
     * @param since - Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * Only gists updated at or after this time are returned.
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    gists(since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gists;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a gist.
     * @since v3
     * @http POST /gists
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    gists(Accept?: Header<string>, body: Body<postGist, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: gist;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List all public gists.
     * @since v3
     * @http GET /gists/public
     * @param since - Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * Only gists updated at or after this time are returned.
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    public(since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gists;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List the authenticated user's starred gists.
     * @since v3
     * @http GET /gists/starred
     * @param since - Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * Only gists updated at or after this time are returned.
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    starred(since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gists;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single gist.
     * @since v3
     * @http GET /gists/{id}
     * @param id - Id of gist.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    gists(id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gist;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a gist.
     * @since v3
     * @http DELETE /gists/{id}
     * @param id - Id of gist.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    gists(id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Edit a gist.
     * @since v3
     * @http PATCH /gists/{id}
     * @param id - Id of gist.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    gists(id: int64, Accept?: Header<string>, body: Body<patchGist, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gist;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List comments on a gist.
     * @since v3
     * @http GET /gists/{id}/comments
     * @param id - Id of gist.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: comments;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a commen
     * @since v3
     * @http POST /gists/{id}/comments
     * @param id - Id of gist.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(id: int64, Accept?: Header<string>, body: Body<commentBody, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: comment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single comment.
     * @since v3
     * @http GET /gists/{id}/comments/{commentId}
     * @param id - Id of gist.
     * @param commentId - Id of comment.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(id: int64, commentId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: comment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a comment.
     * @since v3
     * @http DELETE /gists/{id}/comments/{commentId}
     * @param id - Id of gist.
     * @param commentId - Id of comment.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(id: int64, commentId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Edit a comment.
     * @since v3
     * @http PATCH /gists/{id}/comments/{commentId}
     * @param id - Id of gist.
     * @param commentId - Id of comment.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(id: int64, commentId: int64, Accept?: Header<string>, body: Body<comment, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: comment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Fork a gist.
     * @since v3
     * @http POST /gists/{id}/forks
     * @param id - Id of gist.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Exists.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - Not exists.
     */
    forks(id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Check if a gist is starred.
     * @since v3
     * @http GET /gists/{id}/star
     * @param id - Id of gist.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Exists.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - Not exists.
     */
    star(id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Star a gist.
     * @since v3
     * @http PUT /gists/{id}/star
     * @param id - Id of gist.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Starred.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    star(id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Unstar a gist.
     * @since v3
     * @http DELETE /gists/{id}/star
     * @param id - Id of gist.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Item removed.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    star(id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Listing available templates.
     * List all templates available to pass as an option when creating a repository.
     *
     * @since v3
     * @http GET /gitignore/templates
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    templates(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gitignore;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single template.
     * @since v3
     * @http GET /gitignore/templates/{language}
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    templates(language: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gitignore_lang;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List issues.
     * List all issues across all the authenticated user's visible repositories.
     *
     * @since v3
     * @http GET /issues
     * @param filter - Issues assigned to you / created by you / mentioning you / you're
     * subscribed to updates for / All issues the authenticated user can see
     *
     * @param labels - String list of comma separated Label names. Example - bug,ui,@high.
     * @param since - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Only issues updated at or after this time are returned.
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    issues(filter: Query<"assigned" | "created" | "mentioned" | "subscribed" | "all">, state: Query<"open" | "closed">, labels: Query<string>, sort: Query<"created" | "updated" | "comments">, direction: Query<"asc" | "desc">, since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issues;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Find issues by state and keyword.
     * @since v3
     * @deprecated v3
     * @http GET /legacy/issues/search/{owner}/{repository}/{state}/{keyword}
     * @param keyword - The search term.
     * @param state - Indicates the state of the issues to return. Can be either open or closed.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    search(keyword: string, state: "open" | "closed", owner: string, repository: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: search_issues_by_keyword;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter.
     * @since v3
     * @deprecated v3
     * @http GET /legacy/repos/search/{keyword}
     * @param keyword - The search term
     * @param order - The sort field. if sort param is provided. Can be either asc or desc.
     * @param language - Filter results by language
     * @param start_page - The page number to fetch
     * @param sort - The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    search(keyword: string, order?: Query<"desc" | "asc">, language?: Query<string>, start_page?: Query<string>, sort?: Query<"updated" | "stars" | "forks">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: search_repositories_by_keyword;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description This API call is added for compatibility reasons only.
     * @since v3
     * @deprecated v3
     * @http GET /legacy/user/email/{email}
     * @param email - The email address
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    email(email: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: search_user_by_email;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Find users by keyword.
     * @since v3
     * @deprecated v3
     * @http GET /legacy/user/search/{keyword}
     * @param keyword - The search term
     * @param order - The sort field. if sort param is provided. Can be either asc or desc.
     * @param start_page - The page number to fetch
     * @param sort - The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    search(keyword: string, order?: Query<"desc" | "asc">, start_page?: Query<string>, sort?: Query<"updated" | "stars" | "forks">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: search_users_by_keyword;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Render an arbitrary Markdown document
     * @since v3
     * @http POST /markdown
     * @param Accept - Is used to set specified media type.
     * @return 200|text/html - OK
     * @return 403|text/html - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    markdown(Accept?: Header<string>, body: Body<markdown, 'application/json'>): [(code: 200, mediaType: "text/html") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "text/html") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Render a Markdown document in raw mode
     * @since v3
     * @http POST /markdown/raw
     * @param Accept - Is used to set specified media type.
     * @return 200|text/html - OK
     * @return 403|text/html - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    raw(Accept?: Header<string>, body?: Body<file, 'text/plain'>): [(code: 200, mediaType: "text/html") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "text/html") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description This gives some information about GitHub.com, the service.
     * @since v3
     * @http GET /meta
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    meta(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: meta;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List public events for a network of repositories.
     * @since v3
     * @http GET /networks/{owner}/{repo}/events
     * @param owner - Name of the owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    events(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: events;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List your notifications.
     * List all notifications for the current user, grouped by repository.
     *
     * @since v3
     * @http GET /notifications
     * @param all - True to show notifications marked as read.
     * @param participating - True to show only notifications in which the user is directly participating
     * or mentioned.
     *
     * @param since - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Example: "2012-10-09T23:39:01Z".
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    notifications(all?: Query<boolean>, participating?: Query<boolean>, since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: notifications;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Mark as read.
     * Marking a notification as "read" removes it from the default view on GitHub.com.
     *
     * @since v3
     * @http PUT /notifications
     * @param Accept - Is used to set specified media type.
     * @return 205|application/json - Marked as read.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    notifications(Accept?: Header<string>, body: Body<notificationMarkRead, 'application/json'>): [(code: 205, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description View a single thread.
     * @since v3
     * @http GET /notifications/threads/{id}
     * @param id - Id of thread.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    threads(id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: notifications;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Mark a thread as read
     * @since v3
     * @http PATCH /notifications/threads/{id}
     * @param id - Id of thread.
     * @param Accept - Is used to set specified media type.
     * @return 205|application/json - Thread marked as read.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    threads(id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 205, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a Thread Subscription.
     * @since v3
     * @http GET /notifications/threads/{id}/subscription
     * @param id - Id of thread.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    subscription(id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: subscription;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Set a Thread Subscription.
     * This lets you subscribe to a thread, or ignore it. Subscribing to a thread
     * is unnecessary if the user is already subscribed to the repository. Ignoring
     * a thread will mute all future notifications (until you comment or get @mentioned).
     *
     * @since v3
     * @http PUT /notifications/threads/{id}/subscription
     * @param id - Id of thread.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    subscription(id: int64, Accept?: Header<string>, body: Body<putSubscription, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: subscription;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a Thread Subscription.
     * @since v3
     * @http DELETE /notifications/threads/{id}/subscription
     * @param id - Id of thread.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No Content
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    subscription(id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get an Organization.
     * @since v3
     * @http GET /orgs/{org}
     * @param org - Name of organisation.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    orgs(org: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: organization;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Edit an Organization.
     * @since v3
     * @http PATCH /orgs/{org}
     * @param org - Name of organisation.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    orgs(org: string, Accept?: Header<string>, body: Body<patchOrg, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: organization;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List public events for an organization.
     * @since v3
     * @http GET /orgs/{org}/events
     * @param org - Name of organisation.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    events(org: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: events;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List issues.
     * List all issues for a given organization for the authenticated user.
     *
     * @since v3
     * @http GET /orgs/{org}/issues
     * @param org - Name of organisation.
     * @param filter - Issues assigned to you / created by you / mentioning you / you're
     * subscribed to updates for / All issues the authenticated user can see
     *
     * @param labels - String list of comma separated Label names. Example - bug,ui,@high.
     * @param since - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Only issues updated at or after this time are returned.
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    issues(org: string, filter: Query<"assigned" | "created" | "mentioned" | "subscribed" | "all">, state: Query<"open" | "closed">, labels: Query<string>, sort: Query<"created" | "updated" | "comments">, direction: Query<"asc" | "desc">, since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issues;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Members list.
     * List all users who are members of an organization. A member is a user tha
     * belongs to at least 1 team in the organization. If the authenticated user
     * is also an owner of this organization then both concealed and public members
     * will be returned. If the requester is not an owner of the organization the
     * query will be redirected to the public members list.
     *
     * @since v3
     * @http GET /orgs/{org}/members
     * @param org - Name of organisation.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 302|application/json - Response if requester is not an organization member.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    members(org: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 302, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Check if a user is, publicly or privately, a member of the organization.
     * @since v3
     * @http GET /orgs/{org}/members/{username}
     * @param org - Name of organisation.
     * @param username - Name of the user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content. Response if requester is an organization member and user is a member
     *
     * @return 302|application/json - Found. Response if requester is not an organization member
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - Not Found.
     * a. Response if requester is an organization member and user is not a member
     * b. Response if requester is not an organization member and is inquiring about themselves
     *
     */
    members(org: string, username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 302, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Remove a member.
     * Removing a user from this list will remove them from all teams and they
     * will no longer have any access to the organization's repositories.
     *
     * @since v3
     * @http DELETE /orgs/{org}/members/{username}
     * @param org - Name of organisation.
     * @param username - Name of the user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    members(org: string, username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Public members list.
     * Members of an organization can choose to have their membership publicized
     * or not.
     *
     * @since v3
     * @http GET /orgs/{org}/public_members
     * @param org - Name of organisation.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    public_members(org: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Check public membership.
     * @since v3
     * @http GET /orgs/{org}/public_members/{username}
     * @param org - Name of organisation.
     * @param username - Name of the user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - User is a public member.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - User is not a public member.
     */
    public_members(org: string, username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Publicize a user's membership.
     * @since v3
     * @http PUT /orgs/{org}/public_members/{username}
     * @param org - Name of organisation.
     * @param username - Name of the user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Publicized.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    public_members(org: string, username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Conceal a user's membership.
     * @since v3
     * @http DELETE /orgs/{org}/public_members/{username}
     * @param org - Name of organisation.
     * @param username - Name of the user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Concealed.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    public_members(org: string, username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List repositories for the specified org.
     * @since v3
     * @http GET /orgs/{org}/repos
     * @param org - Name of organisation.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(org: string, type?: Query<"all" | "public" | "private" | "forks" | "sources" | "member">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repos;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a new repository for the authenticated user. OAuth users must supply
     * repo scope.
     *
     * @since v3
     * @http POST /orgs/{org}/repos
     * @param org - Name of organisation.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(org: string, Accept?: Header<string>, body: Body<postRepo, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: repos;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List teams.
     * @since v3
     * @http GET /orgs/{org}/teams
     * @param org - Name of organisation.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    teams(org: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: teams;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create team.
     * In order to create a team, the authenticated user must be an owner of organization.
     *
     * @since v3
     * @http POST /orgs/{org}/teams
     * @param org - Name of organisation.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    teams(org: string, Accept?: Header<string>, body: Body<orgTeamsPost, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: team;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get your current rate limit status
     * Note: Accessing this endpoint does not count against your rate limit.
     *
     * @since v3
     * @http GET /rate_limit
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    rate_limit(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: rate_limit;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get repository.
     * @since v3
     * @http GET /repos/{owner}/{repo}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repo;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a Repository.
     * Deleting a repository requires admin access. If OAuth is used, the delete_repo
     * scope is required.
     *
     * @since v3
     * @http DELETE /repos/{owner}/{repo}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Item removed.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Edit repository.
     * @since v3
     * @http PATCH /repos/{owner}/{repo}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(owner: string, repo: string, Accept?: Header<string>, body: Body<repoEdit, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repo;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List assignees.
     * This call lists all the available assignees (owner + collaborators) to which
     * issues may be assigned.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/assignees
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    assignees(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: assignees;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Check assignee.
     * You may also check to see if a particular user is an assignee for a repository.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/assignees/{assignee}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param assignee - Login of the assignee.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - User is an assignee.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - User isn't an assignee.
     */
    assignees(owner: string, repo: string, assignee: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get list of branches
     * @since v3
     * @http GET /repos/{owner}/{repo}/branches
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    branches(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: branches;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get Branch
     * @since v3
     * @http GET /repos/{owner}/{repo}/branches/{branch}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param branch - Name of the branch.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    branches(owner: string, repo: string, branch: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: branch;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List.
     * When authenticating as an organization owner of an organization-owned
     * repository, all organization owners are included in the list of
     * collaborators. Otherwise, only users with access to the repository are
     * returned in the collaborators list.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/collaborators
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    collaborators(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Check if user is a collaborator
     * @since v3
     * @http GET /repos/{owner}/{repo}/collaborators/{user}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param user - Login of the user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - User is a collaborator.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - User is not a collaborator.
     */
    collaborators(owner: string, repo: string, user: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Add collaborator.
     * @since v3
     * @http PUT /repos/{owner}/{repo}/collaborators/{user}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param user - Login of the user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Collaborator added.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    collaborators(owner: string, repo: string, user: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Remove collaborator.
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/collaborators/{user}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param user - Login of the user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Collaborator removed.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    collaborators(owner: string, repo: string, user: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List commit comments for a repository.
     * Comments are ordered by ascending ID.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/comments
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repoComments;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single commit comment.
     * @since v3
     * @http GET /repos/{owner}/{repo}/comments/{commentId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param commentId - Id of comment.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, commentId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: commitComment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a commit comment
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/comments/{commentId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param commentId - Id of comment.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, commentId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Update a commit comment.
     * @since v3
     * @http PATCH /repos/{owner}/{repo}/comments/{commentId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param commentId - Id of comment.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, commentId: int64, Accept?: Header<string>, body: Body<commentBody, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: commitComment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List commits on a repository.
     * @since v3
     * @http GET /repos/{owner}/{repo}/commits
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param since - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Example: "2012-10-09T23:39:01Z".
     *
     * @param sha - Sha or branch to start listing commits from.
     * @param path - Only commits containing this file path will be returned.
     * @param author - GitHub login, name, or email by which to filter by commit author.
     * @param until - ISO 8601 Date - Only commits before this date will be returned.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    commits(owner: string, repo: string, since?: Query<string>, sha?: Query<string>, path?: Query<string>, author?: Query<string>, until?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: commits;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get the combined Status for a specific Ref
     * The Combined status endpoint is currently available for developers to preview. During the preview period, the API may change without advance notice. Please see the blog post for full details.
     * To access this endpoint during the preview period, you must provide a custom media type in the Accept header:
     * application/vnd.github.she-hulk-preview+json
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/commits/{ref}/status
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    status(owner: string, repo: string, ref: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: refStatus;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single commit.
     * @since v3
     * @http GET /repos/{owner}/{repo}/commits/{shaCode}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param shaCode - SHA-1 code of the commit.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    commits(owner: string, repo: string, shaCode: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: commit;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List comments for a single commitList comments for a single commit.
     * @since v3
     * @http GET /repos/{owner}/{repo}/commits/{shaCode}/comments
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param shaCode - SHA-1 code of the commit.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, shaCode: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repoComments;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a commit comment.
     * @since v3
     * @http POST /repos/{owner}/{repo}/commits/{shaCode}/comments
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param shaCode - SHA-1 code of the commit.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, shaCode: string, Accept?: Header<string>, body: Body<commitCommentBody, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: commitComment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Compare two commits
     * @since v3
     * @http GET /repos/{owner}/{repo}/compare/{baseId}...{headId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    '...'(owner: string, repo: string, baseId: string, headId: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: compare_commits;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get contents.
     * This method returns the contents of a file or directory in a repository.
     * Files and symlinks support a custom media type for getting the raw content.
     * Directories and submodules do not support custom media types.
     * Note: This API supports files up to 1 megabyte in size.
     * Here can be many outcomes. For details see "http://developer.github.com/v3/repos/contents/"
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/contents/{path}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param path - The content path.
     * @param ref - The String name of the Commit/Branch/Tag. Defaults to 'master'.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    contents(owner: string, repo: string, path: string, path?: Query<string>, ref?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: contents_path;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a file.
     * @since v3
     * @http PUT /repos/{owner}/{repo}/contents/{path}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    contents(owner: string, repo: string, path: string, Accept?: Header<string>, body: Body<createFileBody, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: createFile;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a file.
     * This method deletes a file in a repository.
     *
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/contents/{path}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    contents(owner: string, repo: string, path: string, Accept?: Header<string>, body: Body<deleteFileBody, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: deleteFile;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get list of contributors.
     * @since v3
     * @http GET /repos/{owner}/{repo}/contributors
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param anon - Set to 1 or true to include anonymous contributors in results.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    contributors(owner: string, repo: string, anon: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Users with pull access can view deployments for a repository
     * @since v3
     * @http GET /repos/{owner}/{repo}/deployments
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    deployments(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repo_deployments;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Users with push access can create a deployment for a given ref
     * @since v3
     * @http POST /repos/{owner}/{repo}/deployments
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    deployments(owner: string, repo: string, Accept?: Header<string>, body: Body<deployment, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: deployment_resp;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Users with pull access can view deployment statuses for a deployment
     * @since v3
     * @http GET /repos/{owner}/{repo}/deployments/{id}/statuses
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param id - The Deployment ID to list the statuses from.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    statuses(owner: string, repo: string, id: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: deployment_statuses;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a Deployment Status
     * Users with push access can create deployment statuses for a given deployment:
     *
     * @since v3
     * @http POST /repos/{owner}/{repo}/deployments/{id}/statuses
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param id - The Deployment ID to list the statuses from.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - ok
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    statuses(owner: string, repo: string, id: int64, Accept?: Header<string>, body: Body<deployment_statuses_create, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Deprecated. List downloads for a repository.
     * @since v3
     * @deprecated v3
     * @http GET /repos/{owner}/{repo}/downloads
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    downloads(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: downloads;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Deprecated. Get a single download.
     * @since v3
     * @deprecated v3
     * @http GET /repos/{owner}/{repo}/downloads/{downloadId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param downloadId - Id of download.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    downloads(owner: string, repo: string, downloadId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: download;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Deprecated. Delete a download.
     * @since v3
     * @deprecated v3
     * @http DELETE /repos/{owner}/{repo}/downloads/{downloadId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param downloadId - Id of download.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    downloads(owner: string, repo: string, downloadId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get list of repository events.
     * @since v3
     * @http GET /repos/{owner}/{repo}/events
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    events(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: events;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List forks.
     * @since v3
     * @http GET /repos/{owner}/{repo}/forks
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    forks(owner: string, repo: string, sort?: Query<"newes" | "oldes" | "watchers">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: forks;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a fork.
     * Forking a Repository happens asynchronously. Therefore, you may have to wai
     * a short period before accessing the git objects. If this takes longer than 5
     * minutes, be sure to contact Support.
     *
     * @since v3
     * @http POST /repos/{owner}/{repo}/forks
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    forks(owner: string, repo: string, Accept?: Header<string>, body: Body<forkBody, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: repo;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a Blob.
     * @since v3
     * @http POST /repos/{owner}/{repo}/git/blobs
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    blobs(owner: string, repo: string, Accept?: Header<string>, body: Body<blob, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: blobs;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a Blob.
     * Since blobs can be any arbitrary binary data, the input and responses for
     * the blob API takes an encoding parameter that can be either utf-8 or
     * base64. If your data cannot be losslessly sent as a UTF-8 string, you can
     * base64 encode it.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/git/blobs/{shaCode}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param shaCode - SHA-1 code.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    blobs(owner: string, repo: string, shaCode: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: blob;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a Commit.
     * @since v3
     * @http POST /repos/{owner}/{repo}/git/commits
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    commits(owner: string, repo: string, Accept?: Header<string>, body: Body<repoCommitBody, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: gitCommit;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a Commit.
     * @since v3
     * @http GET /repos/{owner}/{repo}/git/commits/{shaCode}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param shaCode - SHA-1 code.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    commits(owner: string, repo: string, shaCode: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repoCommit;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get all References
     * @since v3
     * @http GET /repos/{owner}/{repo}/git/refs
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    refs(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: refs;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a Reference
     * @since v3
     * @http POST /repos/{owner}/{repo}/git/refs
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    refs(owner: string, repo: string, Accept?: Header<string>, body: Body<refsBody, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: headBranch;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a Reference
     * @since v3
     * @http GET /repos/{owner}/{repo}/git/refs/{ref}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    refs(owner: string, repo: string, ref: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: headBranch;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a Reference
     * Example: Deleting a branch: DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a
     * Example: Deleting a tag:        DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0
     *
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/git/refs/{ref}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No Content
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    refs(owner: string, repo: string, ref: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Update a Reference
     * @since v3
     * @http PATCH /repos/{owner}/{repo}/git/refs/{ref}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    refs(owner: string, repo: string, ref: string, Accept?: Header<string>, body: Body<gitRefPatch, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: headBranch;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a Tag Object.
     * Note that creating a tag object does not create the reference that makes a
     * tag in Git. If you want to create an annotated tag in Git, you have to do
     * this call to create the tag object, and then create the refs/tags/[tag]
     * reference. If you want to create a lightweight tag, you only have to create
     * the tag reference - this call would be unnecessary.
     *
     * @since v3
     * @http POST /repos/{owner}/{repo}/git/tags
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    tags(owner: string, repo: string, Accept?: Header<string>, body: Body<tagBody, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: tag;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a Tag.
     * @since v3
     * @http GET /repos/{owner}/{repo}/git/tags/{shaCode}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    tags(owner: string, repo: string, shaCode: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: tag;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a Tree.
     * The tree creation API will take nested entries as well. If both a tree and
     * a nested path modifying that tree are specified, it will overwrite the
     * contents of that tree with the new path contents and write a new tree out.
     *
     * @since v3
     * @http POST /repos/{owner}/{repo}/git/trees
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    trees(owner: string, repo: string, Accept?: Header<string>, body: Body<tree, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: trees;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a Tree.
     * @since v3
     * @http GET /repos/{owner}/{repo}/git/trees/{shaCode}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param shaCode - Tree SHA.
     * @param recursive - Get a Tree Recursively. (0 or 1)
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    trees(owner: string, repo: string, shaCode: string, recursive?: Query<int64>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: tree;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get list of hooks.
     * @since v3
     * @http GET /repos/{owner}/{repo}/hooks
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    hooks(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: hook;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a hook.
     * @since v3
     * @http POST /repos/{owner}/{repo}/hooks
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    hooks(owner: string, repo: string, Accept?: Header<string>, body: Body<hookBody, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: hook;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get single hook.
     * @since v3
     * @http GET /repos/{owner}/{repo}/hooks/{hookId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param hookId - Id of hook.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    hooks(owner: string, repo: string, hookId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: hook;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a hook.
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/hooks/{hookId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param hookId - Id of hook.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    hooks(owner: string, repo: string, hookId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Edit a hook.
     * @since v3
     * @http PATCH /repos/{owner}/{repo}/hooks/{hookId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param hookId - Id of hook.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    hooks(owner: string, repo: string, hookId: int64, Accept?: Header<string>, body: Body<hookBody, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: hook;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Test a push hook.
     * This will trigger the hook with the latest push to the current repository
     * if the hook is subscribed to push events. If the hook is not subscribed
     * to push events, the server will respond with 204 but no test POST will
     * be generated.
     * Note: Previously /repos/:owner/:repo/hooks/:id/tes
     *
     * @since v3
     * @http POST /repos/{owner}/{repo}/hooks/{hookId}/tests
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param hookId - Id of hook.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Hook is triggered.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    tests(owner: string, repo: string, hookId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List issues for a repository.
     * @since v3
     * @http GET /repos/{owner}/{repo}/issues
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param filter - Issues assigned to you / created by you / mentioning you / you're
     * subscribed to updates for / All issues the authenticated user can see
     *
     * @param labels - String list of comma separated Label names. Example - bug,ui,@high.
     * @param since - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Only issues updated at or after this time are returned.
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    issues(owner: string, repo: string, filter: Query<"assigned" | "created" | "mentioned" | "subscribed" | "all">, state: Query<"open" | "closed">, labels: Query<string>, sort: Query<"created" | "updated" | "comments">, direction: Query<"asc" | "desc">, since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issues;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create an issue.
     * Any user with pull access to a repository can create an issue.
     *
     * @since v3
     * @http POST /repos/{owner}/{repo}/issues
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    issues(owner: string, repo: string, Accept?: Header<string>, body: Body<issue, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: issue;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List comments in a repository.
     * @since v3
     * @http GET /repos/{owner}/{repo}/issues/comments
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param direction - Ignored without 'sort' parameter.
     * @param since - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Example: "2012-10-09T23:39:01Z".
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, direction?: Query<string>, sort?: Query<"created" | "updated">, since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issuesComments;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single comment.
     * @since v3
     * @http GET /repos/{owner}/{repo}/issues/comments/{commentId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param commentId - ID of comment.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, commentId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issuesComment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a comment.
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/issues/comments/{commentId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param commentId - ID of comment.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, commentId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Edit a comment.
     * @since v3
     * @http PATCH /repos/{owner}/{repo}/issues/comments/{commentId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param commentId - ID of comment.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, commentId: int64, Accept?: Header<string>, body: Body<commentBody, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issuesComment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List issue events for a repository.
     * @since v3
     * @http GET /repos/{owner}/{repo}/issues/events
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    events(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issueEvents;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single event.
     * @since v3
     * @http GET /repos/{owner}/{repo}/issues/events/{eventId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param eventId - Id of the event.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    events(owner: string, repo: string, eventId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issueEvent;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single issue
     * @since v3
     * @http GET /repos/{owner}/{repo}/issues/{number}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of issue.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    issues(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issue;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Edit an issue.
     * Issue owners and users with push access can edit an issue.
     *
     * @since v3
     * @http PATCH /repos/{owner}/{repo}/issues/{number}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of issue.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    issues(owner: string, repo: string, number: int64, Accept?: Header<string>, body: Body<issue, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issue;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List comments on an issue.
     * @since v3
     * @http GET /repos/{owner}/{repo}/issues/{number}/comments
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of issue.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issuesComments;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a comment.
     * @since v3
     * @http POST /repos/{owner}/{repo}/issues/{number}/comments
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of issue.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, number: int64, Accept?: Header<string>, body: Body<commentBody, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: issuesComment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List events for an issue.
     * @since v3
     * @http GET /repos/{owner}/{repo}/issues/{number}/events
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of issue.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    events(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issueEvents;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List labels on an issue.
     * @since v3
     * @http GET /repos/{owner}/{repo}/issues/{number}/labels
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of issue.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    labels(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: labels;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Replace all labels for an issue.
     * Sending an empty array ([]) will remove all Labels from the Issue.
     *
     * @since v3
     * @http PUT /repos/{owner}/{repo}/issues/{number}/labels
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of issue.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    labels(owner: string, repo: string, number: int64, Accept?: Header<string>, body: Body<emailsPost, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: label;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Add labels to an issue.
     * @since v3
     * @http POST /repos/{owner}/{repo}/issues/{number}/labels
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of issue.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    labels(owner: string, repo: string, number: int64, Accept?: Header<string>, body: Body<emailsPost, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: label;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Remove all labels from an issue.
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/issues/{number}/labels
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of issue.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    labels(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Remove a label from an issue.
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/issues/{number}/labels/{name}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of issue.
     * @param name - Name of the label.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Item removed.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    labels(owner: string, repo: string, number: int64, name: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get list of keys.
     * @since v3
     * @http GET /repos/{owner}/{repo}/keys
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    keys(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: keys;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a key.
     * @since v3
     * @http POST /repos/{owner}/{repo}/keys
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    keys(owner: string, repo: string, Accept?: Header<string>, body: Body<user_keys_post, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: user_keys_keyId;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a key
     * @since v3
     * @http GET /repos/{owner}/{repo}/keys/{keyId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param keyId - Id of key.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    keys(owner: string, repo: string, keyId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: user_keys_keyId;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a key.
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/keys/{keyId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param keyId - Id of key.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    keys(owner: string, repo: string, keyId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List all labels for this repository.
     * @since v3
     * @http GET /repos/{owner}/{repo}/labels
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    labels(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: labels;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a label.
     * @since v3
     * @http POST /repos/{owner}/{repo}/labels
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    labels(owner: string, repo: string, Accept?: Header<string>, body: Body<emailsPost, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: label;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single label.
     * @since v3
     * @http GET /repos/{owner}/{repo}/labels/{name}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param name - Name of the label.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    labels(owner: string, repo: string, name: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: label;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a label.
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/labels/{name}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param name - Name of the label.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    labels(owner: string, repo: string, name: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Update a label.
     * @since v3
     * @http PATCH /repos/{owner}/{repo}/labels/{name}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param name - Name of the label.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    labels(owner: string, repo: string, name: string, Accept?: Header<string>, body: Body<emailsPost, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: label;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List languages.
     * List languages for the specified repository. The value on the right of a
     * language is the number of bytes of code written in that language.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/languages
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    languages(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: languages;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Perform a merge.
     * @since v3
     * @http POST /repos/{owner}/{repo}/merges
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Successful Response (The resulting merge commit)
     * @return 204|application/json - No-op response (base already contains the head, nothing to merge)
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - Missing base response or missing head response
     * @return 409|application/json - Merge conflict response.
     */
    merges(owner: string, repo: string, Accept?: Header<string>, body: Body<mergesBody, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: mergesSuccessful;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        body: mergesConflict;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 409, mediaType: "application/json") => {
        body: mergesConflict;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List milestones for a repository.
     * @since v3
     * @http GET /repos/{owner}/{repo}/milestones
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param state - String to filter by state.
     * @param direction - Ignored without 'sort' parameter.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    milestones(owner: string, repo: string, state?: Query<"open" | "closed">, direction?: Query<string>, sort?: Query<"due_date" | "completeness">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: milestone;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a milestone.
     * @since v3
     * @http POST /repos/{owner}/{repo}/milestones
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    milestones(owner: string, repo: string, Accept?: Header<string>, body: Body<milestoneUpdate, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: milestone;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single milestone.
     * @since v3
     * @http GET /repos/{owner}/{repo}/milestones/{number}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of milestone.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    milestones(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: milestone;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a milestone.
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/milestones/{number}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of milestone.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    milestones(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Update a milestone.
     * @since v3
     * @http PATCH /repos/{owner}/{repo}/milestones/{number}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of milestone.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    milestones(owner: string, repo: string, number: int64, Accept?: Header<string>, body: Body<milestoneUpdate, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: milestone;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get labels for every issue in a milestone.
     * @since v3
     * @http GET /repos/{owner}/{repo}/milestones/{number}/labels
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Number of milestone.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    labels(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: labels;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List your notifications in a repository
     * List all notifications for the current user.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/notifications
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param all - True to show notifications marked as read.
     * @param participating - True to show only notifications in which the user is directly participating
     * or mentioned.
     *
     * @param since - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Example: "2012-10-09T23:39:01Z".
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    notifications(owner: string, repo: string, all?: Query<boolean>, participating?: Query<boolean>, since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: notifications;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Mark notifications as read in a repository.
     * Marking all notifications in a repository as "read" removes them from the
     * default view on GitHub.com.
     *
     * @since v3
     * @http PUT /repos/{owner}/{repo}/notifications
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 205|application/json - Marked as read.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    notifications(owner: string, repo: string, Accept?: Header<string>, body: Body<notificationMarkRead, 'application/json'>): [(code: 205, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List pull requests.
     * @since v3
     * @http GET /repos/{owner}/{repo}/pulls
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param state - String to filter by state.
     * @param head - Filter pulls by head user and branch name in the format of 'user:ref-name'.
     * Example: github:new-script-format.
     *
     * @param base - Filter pulls by base branch name. Example - gh-pages.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    pulls(owner: string, repo: string, state?: Query<"open" | "closed">, head?: Query<string>, base?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: pulls;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a pull request.
     * @since v3
     * @http POST /repos/{owner}/{repo}/pulls
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    pulls(owner: string, repo: string, Accept?: Header<string>, body: Body<pullsPost, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: pulls;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List comments in a repository.
     * By default, Review Comments are ordered by ascending ID.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/pulls/comments
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param direction - Ignored without 'sort' parameter.
     * @param since - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Example: "2012-10-09T23:39:01Z".
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, direction?: Query<string>, sort?: Query<"created" | "updated">, since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issuesComments;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single comment.
     * @since v3
     * @http GET /repos/{owner}/{repo}/pulls/comments/{commentId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param commentId - Id of comment.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, commentId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: pullsComment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a comment.
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/pulls/comments/{commentId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param commentId - Id of comment.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, commentId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Edit a comment.
     * @since v3
     * @http PATCH /repos/{owner}/{repo}/pulls/comments/{commentId}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param commentId - Id of comment.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, commentId: int64, Accept?: Header<string>, body: Body<commentBody, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: pullsComment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single pull request.
     * @since v3
     * @http GET /repos/{owner}/{repo}/pulls/{number}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Id of pull.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    pulls(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: pullRequest;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Update a pull request.
     * @since v3
     * @http PATCH /repos/{owner}/{repo}/pulls/{number}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Id of pull.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    pulls(owner: string, repo: string, number: int64, Accept?: Header<string>, body: Body<pullUpdate, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repo;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List comments on a pull request.
     * @since v3
     * @http GET /repos/{owner}/{repo}/pulls/{number}/comments
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Id of pull.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: pullsComment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a comment.
     *   #TODO Alternative input ( http://developer.github.com/v3/pulls/comments/ )
     *   description: |
     *     Alternative Input.
     *     Instead of passing commit_id, path, and position you can reply to an
     *     existing Pull Request Comment like this:
     *
     *         body
     *            Required string
     *         in_reply_to
     *            Required number - Comment id to reply to.
     *
     * @since v3
     * @http POST /repos/{owner}/{repo}/pulls/{number}/comments
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Id of pull.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    comments(owner: string, repo: string, number: int64, Accept?: Header<string>, body: Body<pullsCommentPost, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: pullsComment;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List commits on a pull request.
     * @since v3
     * @http GET /repos/{owner}/{repo}/pulls/{number}/commits
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Id of pull.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    commits(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: commits;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List pull requests files.
     * @since v3
     * @http GET /repos/{owner}/{repo}/pulls/{number}/files
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Id of pull.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    files(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: pulls;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get if a pull request has been merged.
     * @since v3
     * @http GET /repos/{owner}/{repo}/pulls/{number}/merge
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Id of pull.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Pull request has been merged.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - Pull request has not been merged.
     */
    merge(owner: string, repo: string, number: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Merge a pull request (Merge Button's)
     * @since v3
     * @http PUT /repos/{owner}/{repo}/pulls/{number}/merge
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param number - Id of pull.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - Response if merge was successful.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 405|application/json - Response if merge cannot be performed.
     */
    merge(owner: string, repo: string, number: int64, Accept?: Header<string>, body: Body<mergePullBody, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: merge;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 405, mediaType: "application/json") => {
        body: merge;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get the README.
     * This method returns the preferred README for a repository.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/readme
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param ref - The String name of the Commit/Branch/Tag. Defaults to master.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    readme(owner: string, repo: string, ref?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: contents_path;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Users with push access to the repository will receive all releases (i.e., published releases and draft releases). Users with pull access will receive published releases only
     * @since v3
     * @http GET /repos/{owner}/{repo}/releases
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    releases(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: releases;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a release
     * Users with push access to the repository can create a release.
     *
     * @since v3
     * @http POST /repos/{owner}/{repo}/releases
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    releases(owner: string, repo: string, Accept?: Header<string>, body: Body<release_create, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: release;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single release asset
     * @since v3
     * @http GET /repos/{owner}/{repo}/releases/assets/{id}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    assets(owner: string, repo: string, id: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: asset;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a release asset
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/releases/assets/{id}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No Content
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    assets(owner: string, repo: string, id: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Edit a release asset
     * Users with push access to the repository can edit a release asset.
     *
     * @since v3
     * @http PATCH /repos/{owner}/{repo}/releases/assets/{id}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    assets(owner: string, repo: string, id: string, Accept?: Header<string>, body: Body<assetPatch, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: asset;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single release
     * @since v3
     * @http GET /repos/{owner}/{repo}/releases/{id}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    releases(owner: string, repo: string, id: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: release;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Users with push access to the repository can delete a release.
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/releases/{id}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No Content
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    releases(owner: string, repo: string, id: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Users with push access to the repository can edit a release
     * @since v3
     * @http PATCH /repos/{owner}/{repo}/releases/{id}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    releases(owner: string, repo: string, id: string, Accept?: Header<string>, body: Body<release_create, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: release;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List assets for a release
     * @since v3
     * @http GET /repos/{owner}/{repo}/releases/{id}/assets
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    assets(owner: string, repo: string, id: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: assets;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List Stargazers.
     * @since v3
     * @http GET /repos/{owner}/{repo}/stargazers
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    stargazers(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get the number of additions and deletions per week.
     * Returns a weekly aggregate of the number of additions and deletions pushed
     * to a repository.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/stats/code_frequency
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    code_frequency(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: codeFrequencyStats;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get the last year of commit activity data.
     * Returns the last year of commit activity grouped by week. The days array
     * is a group of commits per day, starting on Sunday.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/stats/commit_activity
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    commit_activity(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: commitActivityStats;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get contributors list with additions, deletions, and commit counts.
     * @since v3
     * @http GET /repos/{owner}/{repo}/stats/contributors
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    contributors(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: contributorsStats;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get the weekly commit count for the repo owner and everyone else.
     * @since v3
     * @http GET /repos/{owner}/{repo}/stats/participation
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    participation(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: participationStats;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get the number of commits per hour in each day.
     * Each array contains the day number, hour number, and number of commits
     * 0-6 Sunday - Saturday
     * 0-23 Hour of day
     * Number of commits
     *
     * For example, [2, 14, 25] indicates that there were 25 total commits, during
     * the 2.00pm hour on Tuesdays. All times are based on the time zone of
     * individual commits.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/stats/punch_card
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    punch_card(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: codeFrequencyStats;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List Statuses for a specific Ref.
     * @since v3
     * @http GET /repos/{owner}/{repo}/statuses/{ref}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param ref - Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    statuses(owner: string, repo: string, ref: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: ref;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a Status.
     * @since v3
     * @http POST /repos/{owner}/{repo}/statuses/{ref}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param ref - Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
     *
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    statuses(owner: string, repo: string, ref: string, Accept?: Header<string>, body: Body<headBranch, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: ref;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List watchers.
     * @since v3
     * @http GET /repos/{owner}/{repo}/subscribers
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    subscribers(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a Repository Subscription.
     * @since v3
     * @http GET /repos/{owner}/{repo}/subscription
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    subscription(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: subscription;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Set a Repository Subscription
     * @since v3
     * @http PUT /repos/{owner}/{repo}/subscription
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    subscription(owner: string, repo: string, Accept?: Header<string>, body: Body<subscriptionBody, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: subscription;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a Repository Subscription.
     * @since v3
     * @http DELETE /repos/{owner}/{repo}/subscription
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    subscription(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get list of tags.
     * @since v3
     * @http GET /repos/{owner}/{repo}/tags
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    tags(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: tags;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get list of teams
     * @since v3
     * @http GET /repos/{owner}/{repo}/teams
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    teams(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: teams;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List Stargazers. New implementation.
     * @since v3
     * @http GET /repos/{owner}/{repo}/watchers
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    watchers(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get archive link.
     * This method will return a 302 to a URL to download a tarball or zipball
     * archive for a repository. Please make sure your HTTP framework is
     * configured to follow redirects or you will need to use the Location header
     * to make a second GET request.
     * Note: For private repositories, these links are temporary and expire quickly.
     *
     * @since v3
     * @http GET /repos/{owner}/{repo}/{archive_format}/{path}
     * @param owner - Name of repository owner.
     * @param repo - Name of repository.
     * @param path - Valid Git reference, defaults to 'master'.
     * @param Accept - Is used to set specified media type.
     * @return 302|application/json - Found.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(owner: string, repo: string, archive_format: "tarball" | "zipball", path: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 302, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List all public repositories.
     * This provides a dump of every public repository, in the order that they
     * were created.
     * Note: Pagination is powered exclusively by the since parameter. is the
     * Link header to get the URL for the next page of repositories.
     *
     * @since v3
     * @http GET /repositories
     * @param since - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Example: "2012-10-09T23:39:01Z".
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repositories(since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repos;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Search code.
     * @since v3
     * @http GET /search/code
     * @param order - The sort field. if sort param is provided. Can be either asc or desc.
     * @param q - The search terms. This can be any combination of the supported code
     * search parameters:
     * 'Search In' Qualifies which fields are searched. With this qualifier
     * you can restrict the search to just the file contents, the file path,
     * or both.
     * 'Languages' Searches code based on the language it's written in.
     * 'Forks' Filters repositories based on the number of forks, and/or
     * whether code from forked repositories should be included in the results
     * at all.
     * 'Size' Finds files that match a certain size (in bytes).
     * 'Path' Specifies the path that the resulting file must be at.
     * 'Extension' Matches files with a certain extension.
     * 'Users' or 'Repositories' Limits searches to a specific user or repository.
     *
     * @param sort - Can only be 'indexed', which indicates how recently a file has been indexed
     * by the GitHub search infrastructure. If not provided, results are sorted
     * by best match.
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    code(order?: Query<"desc" | "asc">, q: Query<string>, sort?: Query<"indexed">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: search_code;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Find issues by state and keyword. (This method returns up to 100 results per page.)
     * @since v3
     * @http GET /search/issues
     * @param order - The sort field. if sort param is provided. Can be either asc or desc.
     * @param q - The q search term can also contain any combination of the supported issue search qualifiers:
     * @param sort - The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    issues(order?: Query<"desc" | "asc">, q: Query<string>, sort?: Query<"updated" | "created" | "comments">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: search_issues;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Search repositories.
     * @since v3
     * @http GET /search/repositories
     * @param order - The sort field. if sort param is provided. Can be either asc or desc.
     * @param q - The search terms. This can be any combination of the supported repository
     * search parameters:
     * 'Search In' Qualifies which fields are searched. With this qualifier you
     * can restrict the search to just the repository name, description, readme,
     * or any combination of these.
     * 'Size' Finds repositories that match a certain size (in kilobytes).
     * 'Forks' Filters repositories based on the number of forks, and/or whether
     * forked repositories should be included in the results at all.
     * 'Created' and 'Last Updated' Filters repositories based on times of
     * creation, or when they were last updated.
     * 'Users or Repositories' Limits searches to a specific user or repository.
     * 'Languages' Searches repositories based on the language they are written in.
     * 'Stars' Searches repositories based on the number of stars.
     *
     * @param sort - If not provided, results are sorted by best match.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repositories(order?: Query<"desc" | "asc">, q: Query<string>, sort?: Query<"stars" | "forks" | "updated">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: search_repositories;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Search users.
     * @since v3
     * @http GET /search/users
     * @param order - The sort field. if sort param is provided. Can be either asc or desc.
     * @param q - The search terms. This can be any combination of the supported user
     * search parameters:
     * 'Search In' Qualifies which fields are searched. With this qualifier you
     * can restrict the search to just the username, public email, full name,
     * location, or any combination of these.
     * 'Repository count' Filters users based on the number of repositories they
     * have.
     * 'Location' Filter users by the location indicated in their profile.
     * 'Language' Search for users that have repositories that match a certain
     * language.
     * 'Created' Filter users based on when they joined.
     * 'Followers' Filter users based on the number of followers they have.
     *
     * @param sort - If not provided, results are sorted by best match.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    users(order?: Query<"desc" | "asc">, q: Query<string>, sort?: Query<"followers" | "repositories" | "joined">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: search_users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get team.
     * @since v3
     * @http GET /teams/{teamId}
     * @param teamId - Id of team.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    teams(teamId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: team;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete team.
     * In order to delete a team, the authenticated user must be an owner of the
     * org that the team is associated with.
     *
     * @since v3
     * @http DELETE /teams/{teamId}
     * @param teamId - Id of team.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    teams(teamId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Edit team.
     * In order to edit a team, the authenticated user must be an owner of the org
     * that the team is associated with.
     *
     * @since v3
     * @http PATCH /teams/{teamId}
     * @param teamId - Id of team.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    teams(teamId: int64, Accept?: Header<string>, body: Body<editTeam, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: team;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List team members.
     * In order to list members in a team, the authenticated user must be a member
     * of the team.
     *
     * @since v3
     * @http GET /teams/{teamId}/members
     * @param teamId - Id of team.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    members(teamId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description The "Get team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Get team membership API instead. It allows you to get both active and pending memberships.
     *
     * Get team member.
     * In order to get if a user is a member of a team, the authenticated user mus
     * be a member of the team.
     *
     * @since v3
     * @deprecated v3
     * @http GET /teams/{teamId}/members/{username}
     * @param teamId - Id of team.
     * @param username - Name of a member.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - User is a member.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - User is not a member.
     */
    members(teamId: int64, username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description The API (described below) is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Add team membership API instead. It allows you to invite new organization members to your teams.
     *
     * Add team member.
     * In order to add a user to a team, the authenticated user must have 'admin'
     * permissions to the team or be an owner of the org that the team is associated
     * with.
     *
     * @since v3
     * @deprecated v3
     * @http PUT /teams/{teamId}/members/{username}
     * @param teamId - Id of team.
     * @param username - Name of a member.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Team member added.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 422|application/json - If you attempt to add an organization to a team, you will get this.
     */
    members(teamId: int64, username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 422, mediaType: "application/json") => {
        body: organizationAsTeamMember;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description The "Remove team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Remove team membership API instead. It allows you to remove both active and pending memberships.
     *
     * Remove team member.
     * In order to remove a user from a team, the authenticated user must have 'admin'
     * permissions to the team or be an owner of the org that the team is associated
     * with.
     * NOTE This does not delete the user, it just remove them from the team.
     *
     * @since v3
     * @deprecated v3
     * @http DELETE /teams/{teamId}/members/{username}
     * @param teamId - Id of team.
     * @param username - Name of a member.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Team member removed.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    members(teamId: int64, username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get team membership.
     * In order to get a user's membership with a team, the authenticated user must be a member of the team or an owner of the team's organization.
     *
     * @since v3
     * @http GET /teams/{teamId}/memberships/{username}
     * @param teamId - Id of team.
     * @param username - Name of a member.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - User is a member.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - User has no membership with team
     */
    memberships(teamId: int64, username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: teamMembership;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Add team membership.
     * In order to add a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with.
     *
     * If the user is already a part of the team's organization (meaning they're on at least one other team in the organization), this endpoint will add the user to the team.
     *
     * If the user is completely unaffiliated with the team's organization (meaning they're on none of the organization's teams), this endpoint will send an invitation to the user via email. This newly-created membership will be in the 'pending' state until the user accepts the invitation, at which point the membership will transition to the 'active' state and the user will be added as a member of the team.
     *
     * @since v3
     * @http PUT /teams/{teamId}/memberships/{username}
     * @param teamId - Id of team.
     * @param username - Name of a member.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - Team member added.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 422|application/json - If you attempt to add an organization to a team, you will get this.
     */
    memberships(teamId: int64, username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: teamMembership;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 422, mediaType: "application/json") => {
        body: organizationAsTeamMember;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Remove team membership.
     * In order to remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.
     *
     * @since v3
     * @http DELETE /teams/{teamId}/memberships/{username}
     * @param teamId - Id of team.
     * @param username - Name of a member.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Team member removed.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    memberships(teamId: int64, username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List team repos
     * @since v3
     * @http GET /teams/{teamId}/repos
     * @param teamId - Id of team.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(teamId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: teamRepos;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Check if a team manages a repository
     * @since v3
     * @http GET /teams/{teamId}/repos/{owner}/{repo}
     * @param teamId - Id of team.
     * @param owner - Name of a repository owner.
     * @param repo - Name of a repository.
     * @param Accept - Is used to set specified media type.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(teamId: int64, owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization.
     * @since v3
     * @http PUT /teams/{teamId}/repos/{owner}/{repo}
     * @param teamId - Id of team.
     * @param owner - Name of a organization.
     * @param repo - Name of a repository.
     * @param Accept - Is used to set specified media type.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(teamId: int64, owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description In order to remove a repository from a team, the authenticated user must be an owner of the org that the team is associated with. NOTE: This does not delete the repository, it just removes it from the team.
     * @since v3
     * @http DELETE /teams/{teamId}/repos/{owner}/{repo}
     * @param teamId - Id of team.
     * @param owner - Name of a repository owner.
     * @param repo - Name of a repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(teamId: int64, owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get the authenticated user.
     * @since v3
     * @http GET /user
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    user(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: user;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Update the authenticated user.
     * @since v3
     * @http PATCH /user
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    user(Accept?: Header<string>, body: Body<user_update, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: user;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List email addresses for a user.
     * In the final version of the API, this method will return an array of hashes
     * with extended information for each email address indicating if the address
     * has been verified and if it's primary email address for GitHub.
     * Until API v3 is finalized, use the application/vnd.github.v3 media type to
     * get other response format.
     *
     * @since v3
     * @http GET /user/emails
     * @param Accept - Is used to set specified media type.
     * @return 200|application/vnd.github.v3 - OK
     * @return 403|application/vnd.github.v3 - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    emails(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/vnd.github.v3") => {
        body: user_emails;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/vnd.github.v3") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Add email address(es).
     * You can post a single email address or an array of addresses.
     *
     * @since v3
     * @http POST /user/emails
     * @param Accept - Is used to set specified media type.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    emails(Accept?: Header<string>, body: Body<emailsPost, 'application/json'>): [(code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete email address(es).
     * You can include a single email address or an array of addresses.
     *
     * @since v3
     * @http DELETE /user/emails
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    emails(Accept?: Header<string>, body: Body<user_emails, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List the authenticated user's followers
     * @since v3
     * @http GET /user/followers
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    followers(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List who the authenticated user is following.
     * @since v3
     * @http GET /user/following
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    following(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Check if you are following a user.
     * @since v3
     * @http GET /user/following/{username}
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Response if you are following this user.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - Response if you are not following this user.
     */
    following(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Follow a user.
     * Following a user requires the user to be logged in and authenticated with
     * basic auth or OAuth with the user:follow scope.
     *
     * @since v3
     * @http PUT /user/following/{username}
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - You are now following the user.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    following(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Unfollow a user.
     * Unfollowing a user requires the user to be logged in and authenticated with
     * basic auth or OAuth with the user:follow scope.
     *
     * @since v3
     * @http DELETE /user/following/{username}
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - User unfollowed.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    following(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List issues.
     * List all issues across owned and member repositories for the authenticated
     * user.
     *
     * @since v3
     * @http GET /user/issues
     * @param filter - Issues assigned to you / created by you / mentioning you / you're
     * subscribed to updates for / All issues the authenticated user can see
     *
     * @param labels - String list of comma separated Label names. Example - bug,ui,@high.
     * @param since - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Only issues updated at or after this time are returned.
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    issues(filter: Query<"assigned" | "created" | "mentioned" | "subscribed" | "all">, state: Query<"open" | "closed">, labels: Query<string>, sort: Query<"created" | "updated" | "comments">, direction: Query<"asc" | "desc">, since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: issues;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List your public keys.
     * Lists the current user's keys. Management of public keys via the API requires
     * that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.
     *
     * @since v3
     * @http GET /user/keys
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    keys(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gitignore;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a public key.
     * @since v3
     * @http POST /user/keys
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    keys(Accept?: Header<string>, body: Body<user_keys_post, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: user_keys_keyId;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single public key.
     * @since v3
     * @http GET /user/keys/{keyId}
     * @param keyId - ID of key.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    keys(keyId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: user_keys_keyId;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.
     * @since v3
     * @http DELETE /user/keys/{keyId}
     * @param keyId - ID of key.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - No content.
     *
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    keys(keyId: int64, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List public and private organizations for the authenticated user.
     * @since v3
     * @http GET /user/orgs
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    orgs(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gitignore;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List repositories for the authenticated user. Note that this does not include
     * repositories owned by organizations which the user can access. You can lis
     * user organizations and list organization repositories separately.
     *
     * @since v3
     * @http GET /user/repos
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(type?: Query<"all" | "public" | "private" | "forks" | "sources" | "member">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repos;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Create a new repository for the authenticated user. OAuth users must supply
     * repo scope.
     *
     * @since v3
     * @http POST /user/repos
     * @param Accept - Is used to set specified media type.
     * @return 201|application/json - Created
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(Accept?: Header<string>, body: Body<postRepo, 'application/json'>): [(code: 201, mediaType: "application/json") => {
        body: repos;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List repositories being starred by the authenticated user.
     * @since v3
     * @http GET /user/starred
     * @param direction - Ignored without 'sort' parameter.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    starred(direction?: Query<string>, sort?: Query<"created" | "updated">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gitignore;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Check if you are starring a repository.
     * @since v3
     * @http GET /user/starred/{owner}/{repo}
     * @param owner - Name of a repository owner.
     * @param repo - Name of a repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - This repository is starred by you.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - This repository is not starred by you.
     */
    starred(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Star a repository.
     * @since v3
     * @http PUT /user/starred/{owner}/{repo}
     * @param owner - Name of a repository owner.
     * @param repo - Name of a repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Repository starred.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    starred(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Unstar a repository
     * @since v3
     * @http DELETE /user/starred/{owner}/{repo}
     * @param owner - Name of a repository owner.
     * @param repo - Name of a repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Unstarred.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    starred(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List repositories being watched by the authenticated user.
     * @since v3
     * @http GET /user/subscriptions
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    subscriptions(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repos;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Check if you are watching a repository.
     * @since v3
     * @deprecated v3
     * @http GET /user/subscriptions/{owner}/{repo}
     * @param owner - Name of the owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Repository is watched by you.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - Repository is not watched by you.
     */
    subscriptions(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Watch a repository.
     * @since v3
     * @deprecated v3
     * @http PUT /user/subscriptions/{owner}/{repo}
     * @param owner - Name of the owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Repository is watched.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    subscriptions(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Stop watching a repository
     * @since v3
     * @deprecated v3
     * @http DELETE /user/subscriptions/{owner}/{repo}
     * @param owner - Name of the owner.
     * @param repo - Name of repository.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Unwatched.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    subscriptions(owner: string, repo: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.
     * @since v3
     * @http GET /user/teams
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    teams(Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: teams_list;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get all users.
     * This provides a dump of every user, in the order that they signed up for GitHub.
     * Note: Pagination is powered exclusively by the since parameter. Use the Link
     * header to get the URL for the next page of users.
     *
     * @since v3
     * @http GET /users
     * @param since - The integer ID of the last user that you've seen.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    users(since?: Query<int64>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Get a single user.
     * @since v3
     * @http GET /users/{username}
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    users(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: user;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
     * @since v3
     * @http GET /users/{username}/events
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    events(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description This is the user's organization dashboard. You must be authenticated as the user to view this.
     * @since v3
     * @http GET /users/{username}/events/orgs/{org}
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    orgs(username: string, org: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List a user's followers
     * @since v3
     * @http GET /users/{username}/followers
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    followers(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: users;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description Check if one user follows another.
     * @since v3
     * @http GET /users/{username}/following/{targetUser}
     * @param username - Name of user.
     * @param targetUser - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 204|application/json - Response if user follows target user.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     * @return 404|application/json - Response if user does not follow target user.
     */
    following(username: string, targetUser: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 204, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }, (code: 404, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List a users gists.
     * @since v3
     * @http GET /users/{username}/gists
     * @param username - Name of user.
     * @param since - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Example: "2012-10-09T23:39:01Z".
     *
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    gists(username: string, since?: Query<string>, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gists;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List public keys for a user.
     * Lists the verified public keys for a user. This is accessible by anyone.
     *
     * @since v3
     * @http GET /users/{username}/keys
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    keys(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gitignore;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List all public organizations for a user.
     * @since v3
     * @http GET /users/{username}/orgs
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    orgs(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: gitignore;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description These are events that you'll only see public events.
     * @since v3
     * @http GET /users/{username}/received_events
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    received_events(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List public events that a user has received
     * @since v3
     * @http GET /users/{username}/received_events/public
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    public(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List public repositories for the specified user.
     * @since v3
     * @http GET /users/{username}/repos
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 200|application/json - OK
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    repos(username: string, type?: Query<"all" | "public" | "private" | "forks" | "sources" | "member">, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: repos;
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
    }, (code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List repositories being starred by a user.
     * @since v3
     * @http GET /users/{username}/starred
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    starred(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
    /**
     * @description List repositories being watched by a user.
     * @since v3
     * @http GET /users/{username}/subscriptions
     * @param username - Name of user.
     * @param Accept - Is used to set specified media type.
     * @return 403|application/json - API rate limit exceeded. See http://developer.github.com/v3/#rate-limiting
     * for details.
     *
     */
    subscriptions(username: string, Accept?: Header<string>, body?: Body<file, 'application/json'>): [(code: 403, mediaType: "application/json") => {
        headers: [Header<string, "X-GitHub-Media-Type">, Header<int64, "X-GitHub-Request-Id">, Header<int64, "X-RateLimit-Limit">, Header<int64, "X-RateLimit-Remaining">, Header<int64, "X-RateLimit-Reset">];
        isException: true;
    }];
}
