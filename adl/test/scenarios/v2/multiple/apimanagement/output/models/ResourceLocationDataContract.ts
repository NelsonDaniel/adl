
/**
 * @description Resource location data properties.
 * @since 2019-12-01
 */
export interface ResourceLocationDataContract {
    /**
     * @description A canonical name for the geographic or physical location.
     * @since 2019-12-01
     */
    name: string & MaxLength<256>;
    /**
     * @description The city or locality where the resource is located.
     * @since 2019-12-01
     */
    city?: string & MaxLength<256>;
    /**
     * @description The district, state, or province where the resource is located.
     * @since 2019-12-01
     */
    district?: string & MaxLength<256>;
    /**
     * @description The country or region where the resource is located.
     * @since 2019-12-01
     */
    countryOrRegion?: string & MaxLength<256>;
}
