import { ExportResultFormat } from '../enums/ExportResultFormat';
/**
 * @description API Export result.
 * @since 2019-12-01
 */
export interface ApiExportResult {
    /**
     * @description ResourceId of the API which was exported.
     * @since 2019-12-01
     */
    id?: string;
    /**
     * @description Format in which the Api Details are exported to the Storage Blob with Sas Key valid for 5 minutes.
     * @clientName ExportResultFormat
     * @since 2019-12-01
     */
    format?: ExportResultFormat;
    /**
     * @description The object defining the schema of the exported Api Detail
     * @since 2019-12-01
     */
    value?: {
        /**
         * @description Link to the Storage Blob containing the result of the export operation. The Blob Uri is only valid for 5 minutes.
         * @since 2019-12-01
         */
        link?: string;
    };
}
