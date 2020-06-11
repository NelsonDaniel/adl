import { met2 } from './met2';
/**
 * @description Results Object
 * @since 0.0.0
 */
export interface met1 {
    /**
     * Message
     * @description Field to record messages (typically performance-related) about packet processing
     * @since 0.0.0
     */
    Message: string;
    /**
     * Result Columns
     * @since 0.0.0
     */
    ResultColumns?: Array<met2>;
}
