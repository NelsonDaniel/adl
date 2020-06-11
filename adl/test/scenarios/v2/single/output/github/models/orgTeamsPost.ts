
/**
 *
 * @since v3
 */
export interface orgTeamsPost {
    /**
     *
     * @since v3
     */
    name: string;
    /**
     *
     * @since v3
     */
    permission?: "pull" | "push" | "admin";
    /**
     *
     * @since v3
     */
    repo_names?: Array<string>;
}
