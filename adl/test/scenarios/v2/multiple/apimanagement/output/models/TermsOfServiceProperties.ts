
/**
 * @description Terms of service contract properties.
 * @since 2019-12-01
 */
export interface TermsOfServiceProperties {
    /**
     * @description A terms of service text.
     * @since 2019-12-01
     */
    text?: string;
    /**
     * @description Display terms of service during a sign-up process.
     * @since 2019-12-01
     */
    enabled?: boolean;
    /**
     * @description Ask user for consent to the terms of service.
     * @since 2019-12-01
     */
    consentRequired?: boolean;
}
