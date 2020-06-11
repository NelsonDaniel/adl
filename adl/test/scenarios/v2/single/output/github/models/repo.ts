import { organization } from './organization';
import { actor } from './actor';
/**
 *
 * @since v3
 */
export interface repo {
    /**
     *
     * @since v3
     */
    clone_url?: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    description?: string;
    /**
     *
     * @since v3
     */
    fork?: boolean;
    /**
     *
     * @since v3
     */
    forks?: int64;
    /**
     *
     * @since v3
     */
    forks_count?: int64;
    /**
     *
     * @since v3
     */
    full_name?: string;
    /**
     *
     * @since v3
     */
    git_url?: string;
    /**
     *
     * @since v3
     */
    has_downloads?: boolean;
    /**
     *
     * @since v3
     */
    has_issues?: boolean;
    /**
     *
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
    html_url?: string;
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     *
     * @since v3
     */
    language?: string;
    /**
     *
     * @since v3
     */
    master_branch?: string;
    /**
     *
     * @since v3
     */
    mirror_url?: string;
    /**
     *
     * @since v3
     */
    name?: string;
    /**
     *
     * @since v3
     */
    open_issues?: int64;
    /**
     *
     * @since v3
     */
    open_issues_count?: int64;
    /**
     *
     * @since v3
     */
    organization?: organization;
    /**
     *
     * @since v3
     */
    owner?: actor;
    /**
     *
     * @since v3
     */
    parent?: {};
    /**
     *
     * @since v3
     */
    private?: boolean;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    pushed_at?: string;
    /**
     *
     * @since v3
     */
    size?: int64;
    /**
     *
     * @since v3
     */
    source?: {};
    /**
     *
     * @since v3
     */
    ssh_url?: string;
    /**
     *
     * @since v3
     */
    svn_url?: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    updated_at?: string;
    /**
     *
     * @since v3
     */
    url?: string;
    /**
     *
     * @since v3
     */
    watchers?: int64;
    /**
     *
     * @since v3
     */
    watchers_count?: int64;
}
