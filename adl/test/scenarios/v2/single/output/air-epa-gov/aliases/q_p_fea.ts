
/**
 * Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
 * - W = within date range
 * - N = not within date range
 */
export type q_p_fea = Query<"W" | "N", "p_fea">;
