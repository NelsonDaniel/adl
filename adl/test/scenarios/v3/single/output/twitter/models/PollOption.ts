
/**
 * @description Describes a choice in a Poll object.
 * @since 2.3
 */
export interface PollOption {
    /**
     * @description The text of a poll choice.
     * @since 2.3
     */
    label: string;
    /**
     * @description Position of this choice in the poll.
     * @since 2.3
     */
    position: int64;
    /**
     * @description Number of users who voted for this choice.
     * @since 2.3
     */
    votes: int64;
}
