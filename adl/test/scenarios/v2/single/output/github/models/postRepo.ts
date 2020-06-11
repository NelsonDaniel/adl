
/**
 *
 * @since v3
 */
export interface postRepo {
    /**
     * @description True to create an initial commit with empty README. Default is false.
     * @since v3
     */
    auto_init?: boolean;
    /**
     *
     * @since v3
     */
    description?: string;
    /**
     * @description Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, "Haskell" Ignored if auto_init parameter is not provided.
     * @since v3
     */
    gitignore_template?: string;
    /**
     * @description True to enable downloads for this repository, false to disable them. Default is true.
     * @since v3
     */
    has_downloads?: boolean;
    /**
     * @description True to enable issues for this repository, false to disable them. Default is true.
     * @since v3
     */
    has_issues?: boolean;
    /**
     * @description True to enable the wiki for this repository, false to disable it. Default is true.
     * @since v3
     */
    has_wiki?: boolean;
    /**
     *
     * @since v3
     */
    homepage?: string;
    /**
     *
     * @since v3
     */
    name: string;
    /**
     * @description True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account.
     * @since v3
     */
    private?: boolean;
    /**
     * @description The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
     * @since v3
     */
    team_id?: int64;
}
