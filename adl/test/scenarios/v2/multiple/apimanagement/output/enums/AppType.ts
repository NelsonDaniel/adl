
/**
 * @extensible
 * @description Determines the type of application which send the create user request. Default is old publisher portal.
 * @since 2019-12-01
 */
export enum AppType {
    /**
     *
     * @description User create request was sent by new developer portal.
     */
    developerPortal = 'developerPortal'
}
