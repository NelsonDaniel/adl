export type labels = Array<{
    /**
     *
     * @since v3
     */
    color?: string & MaxLength<6> & MinLength<6>;
    /**
     *
     * @since v3
     */
    name?: string;
    /**
     *
     * @since v3
     */
    url?: string;
}>;
