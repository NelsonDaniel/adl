
/**
 * @description Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.
 * @since 2.3
 */
export interface EntityIndices {
    /**
     * @description Index (zero-based) at which position this entity ends.
     * @since 2.3
     */
    end: int64 & Minimum<0>;
    /**
     * @description Index (zero-based) at which position this entity starts.
     * @since 2.3
     */
    start: int64 & Minimum<0>;
}
