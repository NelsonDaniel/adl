export interface Service {
    /**
     * Clean Air Act Download Data Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return a comma sepated vaule (CSV) file of the facilities found.
     * @since 0.0.0
     * @http GET /air_rest_services.get_download
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - CSV = Facility results formatted as comma delimited file download (default).
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @param qid - Query ID Selector.  Enter the QueryID number from a previously run query.
     * @param qcolumns - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
     * @param p_pretty_print - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.
     * @return 200|application/json - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     * @return 200|application/xml - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     */
    'air_rest_services.get_download'(output?: Query<string>, qid: Query<string>, qcolumns?: Query<string>, p_pretty_print?: Query<double>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: file;
    }, (code: 200, mediaType: "application/xml") => {
        body: file;
    }];
    /**
     * Clean Air Act Download Data Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return a comma sepated vaule (CSV) file of the facilities found.
     * @since 0.0.0
     * @http POST /air_rest_services.get_download
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - CSV = Facility results formatted as comma delimited file download (default).
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @param qid - Query ID Selector.  Enter the QueryID number from a previously run query.
     * @param qcolumns - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
     * @param p_pretty_print - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.
     * @return 200|application/json - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     * @return 200|application/xml - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     */
    'air_rest_services.get_download'(output?: FormData<string>, qid: FormData<string>, qcolumns?: FormData<string>, p_pretty_print?: FormData<double>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: file;
    }, (code: 200, mediaType: "application/xml") => {
        body: file;
    }];
    /**
     * Clean Air Act Facility Search
     * @description Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size
     * @since 0.0.0
     * @http GET /air_rest_services.get_facilities
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @param p_fn - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
     * @param p_sa - Facility street address. Enter a complete or partial street address.
     * @param p_sa1 - Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
     * @param p_ct - Facility City Filter. Enter a single case-insensitive city name to filter results.
     * @param p_co - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
     * @param p_fips - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
     * @param p_st - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_zip - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
     * @param p_lcon - Air Program Local Control Region Code Filter.  Enter one or more local control region codes to filter results.  Provide multiple codes as a comma-delimited list.  Codes where they exist are specific by state.
     * @param p_frs - Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
     * @param p_reg - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
     * @param p_sic - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
     * @param p_ncs - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
     * @param p_qnc - Number of quarters in non-compliance limiter.  Enter an integer value between 1 and 4 to limit results.
     * @param p_pen - Last Penality Date Qualifier Filter.  Enter one of the following:
     * - NEVER = No Penalties
     * - ANY = Any Penalty
     * - LEXX = Less than or equal to XX months.  Provide a number in place of XX, e.g. "LE5" for a facility with a penalty within previous 5 months.
     * - GTXX = Greater than XX months.  Provide a number in place of XX, eg. GT12, for a facility with the last penalty greater than 12 months ago.
     * @param p_opst - Operating status filter.  Enter one or more operating status codes to limit results.   Provide multiple codes as a comma-delimited list.
     * @param p_c1lat - In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param p_c1lon - In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param p_c2lat - In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param p_c2lon - In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param p_usmex - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
     * @param p_sic2 - Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
     * @param p_sic4 - Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
     * @param p_fa - Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
     * @param p_act - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
     * @param p_maj - Major Facility Flag.  Enter Y to restrict results to Major facilities only.
     * @param p_mact - CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
     * @param p_nsps - Air Programl New Source Performance Standards (NSPS)  Subpart Code Search.  One or more valid Air Program NSPS Program codes cand be passed.
     * @param p_nspsm - Air Programl New Source Performance Standards Minors (NSPSM) Subpart Code Search.  One or more valid Air Program NSPSM Subpart codes can be passed.
     * @param p_prog - Air Program Code Filter.  Enter one or more Air program codes to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_fea - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
     * - W = within date range
     * - N = not within date range
     * @param p_feay - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
     * @param p_feaa - Agency associated with Formal Enforcement Actions:
     * - E = EPA
     * - S = State
     * - A = All
     * @param p_iea - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
     * - W = within date range
     * - N = not within date range
     * @param p_ieay - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
     * @param p_ieaa - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
     * - E = EPA
     * - S = State
     * @param p_qiv - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
     * - Z = Zero quarters in noncompliance.
     * - GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.
     * - GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.
     * @param p_naa - Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
     * @param p_impw - Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
     * @param p_trep - Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
     * - NONE = Never has reported to TRI.
     * - CURR = Current TRI reporter.
     * - NONCURR = Has reported to TRI in the past but not for the current reporting year.
     * @param p_tri_cat - Toxic Release Inventory Released To Air Chemical Identifier Category Filter.  Enter the chemical identifier category code to limit results. Note when filtering by TRI chemical identifier categories one may not also filter by specific chemical identifiers via p_tri_pol.  You must also specify a release amount using p_tri_amt or p_tri_any_amt.
     * - TOTAL = Total Released to Air
     * - CARC = Total Carcinogens Released to Air
     * - HAP = Total Hazardous Air Pollutants Released to Air
     * @param p_tri_amt - Toxic Release Inventory Release Amount Filter.  Enter a value in pounds to limit results to facilities releasing this amount or greateer of TRI releases.  Valid values are 0, GT0, GT1000, GT5000, GT10000 and GT50000. Note when filtering by TRI release amounts one may only use either p_tri_amt or p_tri_any_amt.
     * @param p_tri_any_amt - Toxic Release Inventory Release Of Any Kind Above Value Filter.  Enter a value to limit results to facilities releasing this amount or more of TRI releases.  Note when filtering by TRI releases one may only use p_tri_any_amt or p_tri_amt and not both.
     * @param p_tri_pol - Toxic Release Inventory Chemical Identifier Filter.  Enter one or more chemical identifier codes to limit results. Note when filtering by specific TRI chemical identifiers one may not also filter by chemical identifier categories via p_tri_cat.
     * @param p_ghg_cat - Green House Gas (GHG) Gas Code Category.  Must be used with either a formatted (p_ghg_amt) or custom (p_ghg_any_amt) release amount.
     * @param p_ghg_amt - Green House Gas (GHG) CO2 Equivalent Formatted Release Amount.  First 2 characters must contain GT (greater than) followed by a number.
     * @param p_ghg_any_amt - Green House Gas (GHG) C02 Equivalent Custom Amount.  The C02E value reported for the provided category, will be greater or equal to the amount provided.
     * @param p_ghg_yr - Green House Gas (GHG) Reporting Year. (2010 through 2015)
     * @param p_nei_pol - National Emissions Inventory (NEI) Pollutant Identifier.  When a pollutant identifer is entered a corresponding formatted amount or custom amount must be entered.
     * @param p_nei_amt - National Emissions Inventory (NEI) Formatted Pollutant Amount.  A formatted value where the 1st two characters must start with GT or LT followed by a number.  Identifies facilities that have a NEI Pollutant Emission  where the supplied value is > or < the pollutant emission amount.
     * @param p_nei_any_amt - National Emissions Inventory (NEI) Custom Pollutant Amount.  Only a number can be entered.  Identifies facilities with where the NEI Pollutant Emission Amount is greater than the number entered.
     * @param p_nei_yr - National Emissions Inventory (NEI) year:  2014 or 2011
     * @param p_nei_cat - National Emissions Inventory (NEI) Pollutant Category.  When a pollutant category is entered, a corresponding formatted pollutant amount or custom amount must be entered.
     * @param p_pm - Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
     * - NONE = 0%
     * - GT5 = greater than 5%
     * - GT10 = greater than 10%
     * - GT25 = greater than 25%
     * - GT50 = greater than 50%
     * - GT75 = greater than 75%
     * @param p_pd - Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
     * - NONE = 0 population density per square mile
     * - GT100 = More than 100 population density per square mile
     * - GT500 = More than 500 population density per square mile
     * - GT1000 = More than 1000 population density per square mile
     * - GT5000 = More than 5000 population density per square mile
     * - GT10000 = More than 10000 population density per square mile
     * - GT20000 = More than 20000 population density per square mile
     * @param p_ico - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
     * @param p_huc - 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
     * @param p_wbd - 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
     * @param p_pid - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
     * @param p_med - Filter Results by Media.
     * - M = RMP (Risk Management Plan)
     * - R = RCRA (Hazardous Waste)
     * - S = SDWA (Public Drinking Water Systems)
     * - W = Water
     * - ALL = Water and RCRA and SDWA
     * @param p_ysl - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
     * - W = within date range
     * - N = not within date range
     * @param p_ysly - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
     * @param p_ysla - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
     * - E = EPA
     * - S = State
     * @param p_stsl - Last Stack Test [within / not within] Specified Date Range Indicator.
     * - W = within date range
     * - N = not within date range
     * @param p_stsly - Number of years (1 to 5) since date of last stack test. A value of 1 means it has been inspected within the year.
     * @param p_stsla - Stack Last Test Code Filter.  Enter a value to limit results:
     * - A = All
     * - E = EPA
     * - S = State
     * @param p_stres - Air Stack Test Status Description Filter.  Enter one or more test status descriptions to filter results.  Enter multiple values as a comma-delimited list.
     * @param p_sttyp - Air Conductor Type Code Filter.  Enter one or more conductor type codes to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_qs - Quick Search. Allows entry for city, state, and/or zip code.
     * @param p_sfs - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
     * @param p_tribeid - Numeric code for tribe (or list of tribes).
     * @param p_tribename - Tribe Name Filter.  Enter a single tribe name to filter results.
     * @param p_tribedist - Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
     * @param p_owop - Owner/Operator code filter.  Enter one or more codes to limit results.
     * - CNG
     * - COR
     * - CTG
     * - DIS
     * - FDF
     * - MWD
     * - MXO
     * - NON
     * - POF
     * - SDT
     * - STF
     * - TRB
     * @param p_agoo - Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
     * @param p_idt1 - Beginning of date range of most recent facility inspection.
     * @param p_idt2 - End of date range of most recent facility inspection.
     * @param p_stdt1 - Beginning of date range of most recent stack test.
     * @param p_stdt2 - End of date range of most recent stack test.
     * @param p_pityp - Inspection Type:
     * - CAC = Corrective Action Inspection
     * - CAV = Compliance Assistance Visit
     * - CDI = Case Development Inspection
     * - CEI = Inspection Inspection
     * - CSE = Compliance Schedule Evaluation
     * - FCI = Focused Compliance
     * - FRR = Financial Record Review
     * - FSD = Facility Self Disclosure
     * - FUI = Follow-Up Inspection
     * - GME = Groundwater Monitoring Evaluation
     * - NRR = Non-Financial Record Review
     * - OAM = Operation and Maintenance Inspection
     * May contain multiple comma-separated values.
     * @param p_cifdi - Compliance issuess found during inspection.
     * @param p_pfead1 - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
     * @param p_pfead2 - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
     * @param p_pfeat - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
     * @param p_psncq - Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
     * - Z = Zero quarters in significant noncompliance.
     * - GEXX = Replacing XX with a numeric value, that number of quarterd or more in significant noncompliance.
     * - GTXX = Replacing XX with a numeric value, more than that number of quarters in significant noncompliance.
     * @param p_pctrack - Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
     * - Off
     * - Partial
     * - On
     * @param p_swpa - Source water protection area
     * @param p_des - Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
     * @param p_fntype - Controls type of text search performed on facility name with parameter p_fn.
     * - EXACT = Find facilities having the exact provided name(s).
     * - BEGINS = Find facilities with names starting with the provided term(s).
     * - ALL = Find facilities using Oracle text search terms.
     * - CONTAINS =
     * @param p_hpvmth - Months in high priority violation status out of the previous three years limiter.  Provide a number of months in the past three years.  Results will limited to facilities in high priority violation status during that time.
     * @param p_recvio - Recent Violation Status Filter.  Enter one or more recent violation codes to limit results.  Provide multiple values as a comma-delimited list.
     * - NO VIOL = Selects facilities with no recent violations.
     * - ANY HPV = Selects facilities with either addressed or unaddressed high priority violations.
     * - ADDRS-EPA - Select facilities with recent EPA addressed violations.
     * - ADDRS-LOCAL - Select facilities with recent locally addressed violations.
     * - ADDRS-STATE - Select facilities with recent state addressed violations.
     * - UNADDR-EPA - Select facilities with recent EPA unaddressed violations.
     * - UNADDR-LOCAL - Select facilities with recent locally unaddressed violations.
     * - UNADDR-STATE - Select facilities with recent state unaddressed violations.
     * - FRV VIOL = Selects facilities with a recent federally reportable violation without a high priority violation.
     * @param p_pollvio - Air Pollutant Code For A Recent Violation Filter.  Provide one or more pollutant codes to select facilities with one or more of the entered pollutant codes for a recent air violation.  Provide multiple values as a comma-delimited list.
     * @param p_ar - Associated EPA Air Reports Program Filter.  Enter multiple values as a comma-delimited list.  Valid values are:
     * - TRI = Toxic Release Inventory.
     * - GHG = Green House Gas Reporter.
     * - EIS = Emission Inventory System.
     * - CAMD = Clean Air Markets Program Reporter.
     * @param p_tri_yr - Toxic Release Inventory Reporting Year Filter.  Enter one or more year values to filter results by the TRI reporting year.  Provide multiple years as a comma-delimited list.
     * @param p_pidall - Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
     * @param p_fac_ico - FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
     * @param p_icoo - Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
     * @param p_fac_icos - FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
     * @param p_ejscreen - Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
     * @param p_limit_addr - Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.
     * @param p_lat - Latitude location in decimal degrees.
     * @param p_long - Longitude location in decimal degrees.
     * @param p_radius - Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
     * @param p_decouple - Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
     * @param p_ejscreen_over80cnt - The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
     * @param queryset - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
     * @param responseset - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
     * @param tablelist - Table List Flag. Enter a Y to display the first page of facility results.
     * @param maplist - Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
     * @param summarylist - Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @param qcolumns - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
     * @return 200|application/json - Results are summary statistics for the query and a query identifier (QID).
     * @return 200|application/xml - Results are summary statistics for the query and a query identifier (QID).
     */
    'air_rest_services.get_facilities'(output?: Query<"JSONP" | "JSON" | "XML">, p_fn?: Query<string>, p_sa?: Query<string>, p_sa1?: Query<string>, p_ct?: Query<string>, p_co?: Query<string>, p_fips?: Query<string>, p_st?: Query<string>, p_zip?: Query<string>, p_lcon?: Query<string>, p_frs?: Query<string>, p_reg?: Query<"01" | "02" | "03" | "04" | "05" | "06" | "07" | 8 | 9 | "10">, p_sic?: Query<string>, p_ncs?: Query<string>, p_qnc?: Query<double>, p_pen?: Query<string>, p_opst?: Query<string>, p_c1lat?: Query<double>, p_c1lon?: Query<double>, p_c2lat?: Query<double>, p_c2lon?: Query<double>, p_usmex?: Query<"Y" | "N">, p_sic2?: Query<string>, p_sic4?: Query<string>, p_fa?: Query<string>, p_act?: Query<"Y" | "N" | "A">, p_maj?: Query<"Y" | "N">, p_mact?: Query<string>, p_nsps?: Query<string>, p_nspsm?: Query<string>, p_prog?: Query<string>, p_fea?: Query<"W" | "N">, p_feay?: Query<1 | 2 | 3 | 4 | 5>, p_feaa?: Query<"A" | "E" | "S">, p_iea?: Query<"W" | "N">, p_ieay?: Query<1 | 2 | 3 | 4 | 5>, p_ieaa?: Query<"E" | "S">, p_qiv?: Query<"0" | "GT1" | "GT2" | "GT4" | "GT8" | "12">, p_naa?: Query<string>, p_impw?: Query<"Y" | "N">, p_trep?: Query<"NONE" | "CURR" | "NOTCURR">, p_tri_cat?: Query<"TOTAL" | "CARC" | "HAP">, p_tri_amt?: Query<"0" | "GT0" | "GT1000" | "GT5000" | "GT10000" | "GT50000">, p_tri_any_amt?: Query<double>, p_tri_pol?: Query<string>, p_ghg_cat?: Query<"ALL" | "BIOCO2" | "CH4" | "CO2" | "HFC" | "N2O" | "NF3" | "OTHER_L" | "PFC" | "SF6">, p_ghg_amt?: Query<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_ghg_any_amt?: Query<double>, p_ghg_yr?: Query<string>, p_nei_pol?: Query<string>, p_nei_amt?: Query<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_nei_any_amt?: Query<double>, p_nei_yr?: Query<string>, p_nei_cat?: Query<string>, p_pm?: Query<"NONE" | "GT5" | "GT10" | "GT25" | "GT50" | "GT75">, p_pd?: Query<"NONE" | "GT100" | "GT500" | "GT1000" | "GT5000" | "GT10000" | "GT20000">, p_ico?: Query<"Y" | "N">, p_huc?: Query<string>, p_wbd?: Query<string>, p_pid?: Query<string>, p_med?: Query<"M" | "R" | "S" | "W" | "ALL">, p_ysl?: Query<"W" | "N" | "NV">, p_ysly?: Query<1 | 2 | 3 | 4 | 5>, p_ysla?: Query<"E" | "S" | "A">, p_stsl?: Query<"W" | "N">, p_stsly?: Query<1 | 2 | 3 | 4 | 5>, p_stsla?: Query<"A" | "E" | "S">, p_stres?: Query<string>, p_sttyp?: Query<string>, p_qs?: Query<string>, p_sfs?: Query<string>, p_tribeid?: Query<double>, p_tribename?: Query<string>, p_tribedist?: Query<double>, p_owop?: Query<string>, p_agoo?: Query<"AND" | "OR">, p_idt1?: Query<string>, p_idt2?: Query<string>, p_stdt1?: Query<string>, p_stdt2?: Query<string>, p_pityp?: Query<string>, p_cifdi?: Query<"Any" | "Yes" | "No" | "Undetermined">, p_pfead1?: Query<string>, p_pfead2?: Query<string>, p_pfeat?: Query<string>, p_psncq?: Query<"GT1" | "GE1" | "GT2" | "GE2" | "GT4" | "GE4" | "GT8" | "GE8" | "GT12" | "GE12">, p_pctrack?: Query<"Off" | "Partial" | "On">, p_swpa?: Query<"source water" | "surface water" | "ground water" | "waiting for SSO">, p_des?: Query<string>, p_fntype?: Query<"ALL" | "CONTAINS" | "EXACT" | "BEGINS">, p_hpvmth?: Query<string>, p_recvio?: Query<string>, p_pollvio?: Query<string>, p_ar?: Query<string>, p_tri_yr?: Query<string>, p_pidall?: Query<"Y" | "N">, p_fac_ico?: Query<"Y" | "N">, p_icoo?: Query<string>, p_fac_icos?: Query<string>, p_ejscreen?: Query<string>, p_limit_addr?: Query<"Y" | "N">, p_lat?: Query<double>, p_long?: Query<double>, p_radius?: Query<double>, p_decouple?: Query<"Y" | "N">, p_ejscreen_over80cnt?: Query<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11">, queryset?: Query<double>, responseset?: Query<double>, tablelist?: Query<"Y" | "N">, maplist?: Query<"Y" | "N">, summarylist?: Query<"Y" | "N">, callback?: Query<string>, qcolumns?: Query<string>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air2_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air2_Results;
        };
    }];
    /**
     * Clean Air Act Facility Search
     * @description Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size
     * @since 0.0.0
     * @http POST /air_rest_services.get_facilities
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @param p_fn - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
     * @param p_sa - Facility street address. Enter a complete or partial street address.
     * @param p_sa1 - Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
     * @param p_ct - Facility City Filter. Enter a single case-insensitive city name to filter results.
     * @param p_co - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
     * @param p_fips - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
     * @param p_st - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_zip - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
     * @param p_lcon - Air Program Local Control Region Code Filter.  Enter one or more local control region codes to filter results.  Provide multiple codes as a comma-delimited list.  Codes where they exist are specific by state.
     * @param p_frs - Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
     * @param p_reg - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
     * @param p_sic - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
     * @param p_ncs - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
     * @param p_qnc - Number of quarters in non-compliance limiter.  Enter an integer value between 1 and 4 to limit results.
     * @param p_pen - Last Penality Date Qualifier Filter.  Enter one of the following:
     * - NEVER = No Penalties
     * - ANY = Any Penalty
     * - LEXX = Less than or equal to XX months.  Provide a number in place of XX, e.g. "LE5" for a facility with a penalty within previous 5 months.
     * - GTXX = Greater than XX months.  Provide a number in place of XX, eg. GT12, for a facility with the last penalty greater than 12 months ago.
     * @param p_opst - Operating status filter.  Enter one or more operating status codes to limit results.   Provide multiple codes as a comma-delimited list.
     * @param p_c1lat - In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param p_c1lon - In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param p_c2lat - In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param p_c2lon - In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param p_usmex - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
     * @param p_sic2 - Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
     * @param p_sic4 - Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
     * @param p_fa - Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
     * @param p_act - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
     * @param p_maj - Major Facility Flag.  Enter Y to restrict results to Major facilities only.
     * @param p_mact - CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
     * @param p_nsps - Air Programl New Source Performance Standards (NSPS)  Subpart Code Search.  One or more valid Air Program NSPS Program codes cand be passed.
     * @param p_nspsm - Air Programl New Source Performance Standards Minors (NSPSM) Subpart Code Search.  One or more valid Air Program NSPSM Subpart codes can be passed.
     * @param p_prog - Air Program Code Filter.  Enter one or more Air program codes to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_fea - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
     * - W = within date range
     * - N = not within date range
     * @param p_feay - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
     * @param p_feaa - Agency associated with Formal Enforcement Actions:
     * - E = EPA
     * - S = State
     * - A = All
     * @param p_iea - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
     * - W = within date range
     * - N = not within date range
     * @param p_ieay - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
     * @param p_ieaa - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
     * - E = EPA
     * - S = State
     * @param p_qiv - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
     * - Z = Zero quarters in noncompliance.
     * - GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.
     * - GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.
     * @param p_naa - Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
     * @param p_impw - Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
     * @param p_trep - Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
     * - NONE = Never has reported to TRI.
     * - CURR = Current TRI reporter.
     * - NONCURR = Has reported to TRI in the past but not for the current reporting year.
     * @param p_tri_cat - Toxic Release Inventory Released To Air Chemical Identifier Category Filter.  Enter the chemical identifier category code to limit results. Note when filtering by TRI chemical identifier categories one may not also filter by specific chemical identifiers via p_tri_pol.  You must also specify a release amount using p_tri_amt or p_tri_any_amt.
     * - TOTAL = Total Released to Air
     * - CARC = Total Carcinogens Released to Air
     * - HAP = Total Hazardous Air Pollutants Released to Air
     * @param p_tri_amt - Toxic Release Inventory Release Amount Filter.  Enter a value in pounds to limit results to facilities releasing this amount or greateer of TRI releases.  Valid values are 0, GT0, GT1000, GT5000, GT10000 and GT50000. Note when filtering by TRI release amounts one may only use either p_tri_amt or p_tri_any_amt.
     * @param p_tri_any_amt - Toxic Release Inventory Release Of Any Kind Above Value Filter.  Enter a value to limit results to facilities releasing this amount or more of TRI releases.  Note when filtering by TRI releases one may only use p_tri_any_amt or p_tri_amt and not both.
     * @param p_tri_pol - Toxic Release Inventory Chemical Identifier Filter.  Enter one or more chemical identifier codes to limit results. Note when filtering by specific TRI chemical identifiers one may not also filter by chemical identifier categories via p_tri_cat.
     * @param p_ghg_cat - Green House Gas (GHG) Gas Code Category.  Must be used with either a formatted (p_ghg_amt) or custom (p_ghg_any_amt) release amount.
     * @param p_ghg_amt - Green House Gas (GHG) CO2 Equivalent Formatted Release Amount.  First 2 characters must contain GT (greater than) followed by a number.
     * @param p_ghg_any_amt - Green House Gas (GHG) C02 Equivalent Custom Amount.  The C02E value reported for the provided category, will be greater or equal to the amount provided.
     * @param p_ghg_yr - Green House Gas (GHG) Reporting Year. (2010 through 2015)
     * @param p_nei_pol - National Emissions Inventory (NEI) Pollutant Identifier.  When a pollutant identifer is entered a corresponding formatted amount or custom amount must be entered.
     * @param p_nei_amt - National Emissions Inventory (NEI) Formatted Pollutant Amount.  A formatted value where the 1st two characters must start with GT or LT followed by a number.  Identifies facilities that have a NEI Pollutant Emission  where the supplied value is > or < the pollutant emission amount.
     * @param p_nei_any_amt - National Emissions Inventory (NEI) Custom Pollutant Amount.  Only a number can be entered.  Identifies facilities with where the NEI Pollutant Emission Amount is greater than the number entered.
     * @param p_nei_yr - National Emissions Inventory (NEI) year:  2014 or 2011
     * @param p_nei_cat - National Emissions Inventory (NEI) Pollutant Category.  When a pollutant category is entered, a corresponding formatted pollutant amount or custom amount must be entered.
     * @param p_pm - Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
     * - NONE = 0%
     * - GT5 = greater than 5%
     * - GT10 = greater than 10%
     * - GT25 = greater than 25%
     * - GT50 = greater than 50%
     * - GT75 = greater than 75%
     * @param p_pd - Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
     * - NONE = 0 population density per square mile
     * - GT100 = More than 100 population density per square mile
     * - GT500 = More than 500 population density per square mile
     * - GT1000 = More than 1000 population density per square mile
     * - GT5000 = More than 5000 population density per square mile
     * - GT10000 = More than 10000 population density per square mile
     * - GT20000 = More than 20000 population density per square mile
     * @param p_ico - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
     * @param p_huc - 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
     * @param p_wbd - 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
     * @param p_pid - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
     * @param p_med - Filter Results by Media.
     * - M = RMP (Risk Management Plan)
     * - R = RCRA (Hazardous Waste)
     * - S = SDWA (Public Drinking Water Systems)
     * - W = Water
     * - ALL = Water and RCRA and SDWA
     * @param p_ysl - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
     * - W = within date range
     * - N = not within date range
     * @param p_ysly - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
     * @param p_ysla - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
     * - E = EPA
     * - S = State
     * @param p_stsl - Last Stack Test [within / not within] Specified Date Range Indicator.
     * - W = within date range
     * - N = not within date range
     * @param p_stsly - Number of years (1 to 5) since date of last stack test. A value of 1 means it has been inspected within the year.
     * @param p_stsla - Stack Last Test Code Filter.  Enter a value to limit results:
     * - A = All
     * - E = EPA
     * - S = State
     * @param p_stres - Air Stack Test Status Description Filter.  Enter one or more test status descriptions to filter results.  Enter multiple values as a comma-delimited list.
     * @param p_sttyp - Air Conductor Type Code Filter.  Enter one or more conductor type codes to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_qs - Quick Search. Allows entry for city, state, and/or zip code.
     * @param p_sfs - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
     * @param p_tribeid - Numeric code for tribe (or list of tribes).
     * @param p_tribename - Tribe Name Filter.  Enter a single tribe name to filter results.
     * @param p_tribedist - Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
     * @param p_owop - Owner/Operator code filter.  Enter one or more codes to limit results.
     * - CNG
     * - COR
     * - CTG
     * - DIS
     * - FDF
     * - MWD
     * - MXO
     * - NON
     * - POF
     * - SDT
     * - STF
     * - TRB
     * @param p_agoo - Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
     * @param p_idt1 - Beginning of date range of most recent facility inspection.
     * @param p_idt2 - End of date range of most recent facility inspection.
     * @param p_stdt1 - Beginning of date range of most recent stack test.
     * @param p_stdt2 - End of date range of most recent stack test.
     * @param p_pityp - Inspection Type:
     * - CAC = Corrective Action Inspection
     * - CAV = Compliance Assistance Visit
     * - CDI = Case Development Inspection
     * - CEI = Inspection Inspection
     * - CSE = Compliance Schedule Evaluation
     * - FCI = Focused Compliance
     * - FRR = Financial Record Review
     * - FSD = Facility Self Disclosure
     * - FUI = Follow-Up Inspection
     * - GME = Groundwater Monitoring Evaluation
     * - NRR = Non-Financial Record Review
     * - OAM = Operation and Maintenance Inspection
     * May contain multiple comma-separated values.
     * @param p_cifdi - Compliance issuess found during inspection.
     * @param p_pfead1 - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
     * @param p_pfead2 - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
     * @param p_pfeat - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
     * @param p_psncq - Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
     * - Z = Zero quarters in significant noncompliance.
     * - GEXX = Replacing XX with a numeric value, that number of quarterd or more in significant noncompliance.
     * - GTXX = Replacing XX with a numeric value, more than that number of quarters in significant noncompliance.
     * @param p_pctrack - Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
     * - Off
     * - Partial
     * - On
     * @param p_swpa - Source water protection area
     * @param p_des - Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
     * @param p_fntype - Controls type of text search performed on facility name with parameter p_fn.
     * - EXACT = Find facilities having the exact provided name(s).
     * - BEGINS = Find facilities with names starting with the provided term(s).
     * - ALL = Find facilities using Oracle text search terms.
     * - CONTAINS =
     * @param p_hpvmth - Months in high priority violation status out of the previous three years limiter.  Provide a number of months in the past three years.  Results will limited to facilities in high priority violation status during that time.
     * @param p_recvio - Recent Violation Status Filter.  Enter one or more recent violation codes to limit results.  Provide multiple values as a comma-delimited list.
     * - NO VIOL = Selects facilities with no recent violations.
     * - ANY HPV = Selects facilities with either addressed or unaddressed high priority violations.
     * - ADDRS-EPA - Select facilities with recent EPA addressed violations.
     * - ADDRS-LOCAL - Select facilities with recent locally addressed violations.
     * - ADDRS-STATE - Select facilities with recent state addressed violations.
     * - UNADDR-EPA - Select facilities with recent EPA unaddressed violations.
     * - UNADDR-LOCAL - Select facilities with recent locally unaddressed violations.
     * - UNADDR-STATE - Select facilities with recent state unaddressed violations.
     * - FRV VIOL = Selects facilities with a recent federally reportable violation without a high priority violation.
     * @param p_pollvio - Air Pollutant Code For A Recent Violation Filter.  Provide one or more pollutant codes to select facilities with one or more of the entered pollutant codes for a recent air violation.  Provide multiple values as a comma-delimited list.
     * @param p_ar - Associated EPA Air Reports Program Filter.  Enter multiple values as a comma-delimited list.  Valid values are:
     * - TRI = Toxic Release Inventory.
     * - GHG = Green House Gas Reporter.
     * - EIS = Emission Inventory System.
     * - CAMD = Clean Air Markets Program Reporter.
     * @param p_tri_yr - Toxic Release Inventory Reporting Year Filter.  Enter one or more year values to filter results by the TRI reporting year.  Provide multiple years as a comma-delimited list.
     * @param p_pidall - Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
     * @param p_fac_ico - FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
     * @param p_icoo - Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
     * @param p_fac_icos - FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
     * @param p_ejscreen - Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
     * @param p_limit_addr - Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.
     * @param p_lat - Latitude location in decimal degrees.
     * @param p_long - Longitude location in decimal degrees.
     * @param p_radius - Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
     * @param p_decouple - Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
     * @param p_ejscreen_over80cnt - The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
     * @param queryset - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
     * @param responseset - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
     * @param tablelist - Table List Flag. Enter a Y to display the first page of facility results.
     * @param maplist - Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
     * @param summarylist - Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @param qcolumns - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
     * @return 200|application/json - Results are summary statistics for the query and a query identifier (QID).
     * @return 200|application/xml - Results are summary statistics for the query and a query identifier (QID).
     */
    'air_rest_services.get_facilities'(output?: FormData<"JSONP" | "JSON" | "XML">, p_fn?: FormData<string>, p_sa?: FormData<string>, p_sa1?: FormData<string>, p_ct?: FormData<string>, p_co?: FormData<string>, p_fips?: FormData<string>, p_st?: FormData<string>, p_zip?: FormData<string>, p_lcon?: FormData<string>, p_frs?: FormData<string>, p_reg?: FormData<"01" | "02" | "03" | "04" | "05" | "06" | "07" | 8 | 9 | "10">, p_sic?: FormData<string>, p_ncs?: FormData<string>, p_qnc?: FormData<double>, p_pen?: FormData<string>, p_opst?: FormData<string>, p_c1lat?: FormData<double>, p_c1lon?: FormData<double>, p_c2lat?: FormData<double>, p_c2lon?: FormData<double>, p_usmex?: FormData<"Y" | "N">, p_sic2?: FormData<string>, p_sic4?: FormData<string>, p_fa?: FormData<string>, p_act?: FormData<"Y" | "N" | "A">, p_maj?: FormData<"Y" | "N">, p_mact?: FormData<string>, p_nsps?: FormData<string>, p_nspsm?: FormData<string>, p_prog?: FormData<string>, p_fea?: FormData<"W" | "N">, p_feay?: FormData<1 | 2 | 3 | 4 | 5>, p_feaa?: FormData<"A" | "E" | "S">, p_iea?: FormData<"W" | "N">, p_ieay?: FormData<1 | 2 | 3 | 4 | 5>, p_ieaa?: FormData<"E" | "S">, p_qiv?: FormData<"0" | "GT1" | "GT2" | "GT4" | "GT8" | "12">, p_naa?: FormData<string>, p_impw?: FormData<"Y" | "N">, p_trep?: FormData<"NONE" | "CURR" | "NOTCURR">, p_tri_cat?: FormData<"TOTAL" | "CARC" | "HAP">, p_tri_amt?: FormData<"0" | "GT0" | "GT1000" | "GT5000" | "GT10000" | "GT50000">, p_tri_any_amt?: FormData<double>, p_tri_pol?: FormData<string>, p_ghg_cat?: FormData<"ALL" | "BIOCO2" | "CH4" | "CO2" | "HFC" | "N2O" | "NF3" | "OTHER_L" | "PFC" | "SF6">, p_ghg_amt?: FormData<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_ghg_any_amt?: FormData<double>, p_ghg_yr?: FormData<string>, p_nei_pol?: FormData<string>, p_nei_amt?: FormData<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_nei_any_amt?: FormData<double>, p_nei_yr?: FormData<string>, p_nei_cat?: FormData<string>, p_pm?: FormData<"NONE" | "GT5" | "GT10" | "GT25" | "GT50" | "GT75">, p_pd?: FormData<"NONE" | "GT100" | "GT500" | "GT1000" | "GT5000" | "GT10000" | "GT20000">, p_ico?: FormData<"Y" | "N">, p_huc?: FormData<string>, p_wbd?: FormData<string>, p_pid?: FormData<string>, p_med?: FormData<"M" | "R" | "S" | "W" | "ALL">, p_ysl?: FormData<"W" | "N" | "NV">, p_ysly?: FormData<1 | 2 | 3 | 4 | 5>, p_ysla?: FormData<"E" | "S" | "A">, p_stsl?: FormData<"W" | "N">, p_stsly?: FormData<1 | 2 | 3 | 4 | 5>, p_stsla?: FormData<"A" | "E" | "S">, p_stres?: FormData<string>, p_sttyp?: FormData<string>, p_qs?: FormData<string>, p_sfs?: FormData<string>, p_tribeid?: FormData<double>, p_tribename?: FormData<string>, p_tribedist?: FormData<double>, p_owop?: FormData<string>, p_agoo?: FormData<"AND" | "OR">, p_idt1?: FormData<string>, p_idt2?: FormData<string>, p_stdt1?: FormData<string>, p_stdt2?: FormData<string>, p_pityp?: FormData<string>, p_cifdi?: FormData<"Any" | "Yes" | "No" | "Undetermined">, p_pfead1?: FormData<string>, p_pfead2?: FormData<string>, p_pfeat?: FormData<string>, p_psncq?: FormData<"GT1" | "GE1" | "GT2" | "GE2" | "GT4" | "GE4" | "GT8" | "GE8" | "GT12" | "GE12">, p_pctrack?: FormData<"Off" | "Partial" | "On">, p_swpa?: FormData<"source water" | "surface water" | "ground water" | "waiting for SSO">, p_des?: FormData<string>, p_fntype?: FormData<"ALL" | "CONTAINS" | "EXACT" | "BEGINS">, p_hpvmth?: FormData<string>, p_recvio?: FormData<string>, p_pollvio?: FormData<string>, p_ar?: FormData<string>, p_tri_yr?: FormData<string>, p_pidall?: FormData<"Y" | "N">, p_fac_ico?: FormData<"Y" | "N">, p_icoo?: FormData<string>, p_fac_icos?: FormData<string>, p_ejscreen?: FormData<string>, p_limit_addr?: FormData<"Y" | "N">, p_lat?: FormData<double>, p_long?: FormData<double>, p_radius?: FormData<double>, p_decouple?: FormData<"Y" | "N">, p_ejscreen_over80cnt?: FormData<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11">, queryset?: FormData<double>, responseset?: FormData<double>, tablelist?: FormData<"Y" | "N">, maplist?: FormData<"Y" | "N">, summarylist?: FormData<"Y" | "N">, callback?: FormData<string>, qcolumns?: FormData<string>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air2_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air2_Results;
        };
    }];
    /**
     * Clean Air Act Facility Enhanced Search
     * @description Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.
     * @since 0.0.0
     * @http GET /air_rest_services.get_facility_info
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * - CSV = Facility results formatted as comma delimited file download.
     * - GEOJSON = Facility results formatted as GeoJSON feature collection.
     * - GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @param p_fn - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
     * @param p_sa - Facility street address. Enter a complete or partial street address.
     * @param p_sa1 - Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
     * @param p_ct - Facility City Filter. Enter a single case-insensitive city name to filter results.
     * @param p_co - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
     * @param p_fips - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
     * @param p_st - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_zip - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
     * @param p_lcon - Air Program Local Control Region Code Filter.  Enter one or more local control region codes to filter results.  Provide multiple codes as a comma-delimited list.  Codes where they exist are specific by state.
     * @param p_frs - Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
     * @param p_reg - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
     * @param p_sic - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
     * @param p_ncs - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
     * @param p_qnc - Number of quarters in non-compliance limiter.  Enter an integer value between 1 and 4 to limit results.
     * @param p_pen - Last Penality Date Qualifier Filter.  Enter one of the following:
     * - NEVER = No Penalties
     * - ANY = Any Penalty
     * - LEXX = Less than or equal to XX months.  Provide a number in place of XX, e.g. "LE5" for a facility with a penalty within previous 5 months.
     * - GTXX = Greater than XX months.  Provide a number in place of XX, eg. GT12, for a facility with the last penalty greater than 12 months ago.
     * @param p_opst - Operating status filter.  Enter one or more operating status codes to limit results.   Provide multiple codes as a comma-delimited list.
     * @param xmin - Minimum longitude value in decimal degrees.
     * @param ymin - Minimum latitude value in decimal degrees.
     * @param xmax - Maximum longitude value in decimal degrees.
     * @param ymax - Maximum latitude value in decimal degrees.
     * @param p_usmex - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
     * @param p_sic2 - Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
     * @param p_sic4 - Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
     * @param p_fa - Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
     * @param p_act - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
     * @param p_maj - Major Facility Flag.  Enter Y to restrict results to Major facilities only.
     * @param p_mact - CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
     * @param p_nsps - Air Programl New Source Performance Standards (NSPS)  Subpart Code Search.  One or more valid Air Program NSPS Program codes cand be passed.
     * @param p_nspsm - Air Programl New Source Performance Standards Minors (NSPSM) Subpart Code Search.  One or more valid Air Program NSPSM Subpart codes can be passed.
     * @param p_prog - Air Program Code Filter.  Enter one or more Air program codes to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_fea - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
     * - W = within date range
     * - N = not within date range
     * @param p_feay - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
     * @param p_feaa - Agency associated with Formal Enforcement Actions:
     * - E = EPA
     * - S = State
     * - A = All
     * @param p_iea - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
     * - W = within date range
     * - N = not within date range
     * @param p_ieay - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
     * @param p_ieaa - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
     * - E = EPA
     * - S = State
     * @param p_qiv - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
     * - Z = Zero quarters in noncompliance.
     * - GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.
     * - GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.
     * @param p_naa - Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
     * @param p_impw - Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
     * @param p_trep - Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
     * - NONE = Never has reported to TRI.
     * - CURR = Current TRI reporter.
     * - NONCURR = Has reported to TRI in the past but not for the current reporting year.
     * @param p_tri_cat - Toxic Release Inventory Released To Air Chemical Identifier Category Filter.  Enter the chemical identifier category code to limit results. Note when filtering by TRI chemical identifier categories one may not also filter by specific chemical identifiers via p_tri_pol.  You must also specify a release amount using p_tri_amt or p_tri_any_amt.
     * - TOTAL = Total Released to Air
     * - CARC = Total Carcinogens Released to Air
     * - HAP = Total Hazardous Air Pollutants Released to Air
     * @param p_tri_amt - Toxic Release Inventory Release Amount Filter.  Enter a value in pounds to limit results to facilities releasing this amount or greateer of TRI releases.  Valid values are 0, GT0, GT1000, GT5000, GT10000 and GT50000. Note when filtering by TRI release amounts one may only use either p_tri_amt or p_tri_any_amt.
     * @param p_tri_any_amt - Toxic Release Inventory Release Of Any Kind Above Value Filter.  Enter a value to limit results to facilities releasing this amount or more of TRI releases.  Note when filtering by TRI releases one may only use p_tri_any_amt or p_tri_amt and not both.
     * @param p_tri_pol - Toxic Release Inventory Chemical Identifier Filter.  Enter one or more chemical identifier codes to limit results. Note when filtering by specific TRI chemical identifiers one may not also filter by chemical identifier categories via p_tri_cat.
     * @param p_ghg_cat - Green House Gas (GHG) Gas Code Category.  Must be used with either a formatted (p_ghg_amt) or custom (p_ghg_any_amt) release amount.
     * @param p_ghg_amt - Green House Gas (GHG) CO2 Equivalent Formatted Release Amount.  First 2 characters must contain GT (greater than) followed by a number.
     * @param p_ghg_any_amt - Green House Gas (GHG) C02 Equivalent Custom Amount.  The C02E value reported for the provided category, will be greater or equal to the amount provided.
     * @param p_ghg_yr - Green House Gas (GHG) Reporting Year. (2010 through 2015)
     * @param p_nei_pol - National Emissions Inventory (NEI) Pollutant Identifier.  When a pollutant identifer is entered a corresponding formatted amount or custom amount must be entered.
     * @param p_nei_amt - National Emissions Inventory (NEI) Formatted Pollutant Amount.  A formatted value where the 1st two characters must start with GT or LT followed by a number.  Identifies facilities that have a NEI Pollutant Emission  where the supplied value is > or < the pollutant emission amount.
     * @param p_nei_any_amt - National Emissions Inventory (NEI) Custom Pollutant Amount.  Only a number can be entered.  Identifies facilities with where the NEI Pollutant Emission Amount is greater than the number entered.
     * @param p_nei_yr - National Emissions Inventory (NEI) year:  2014 or 2011
     * @param p_nei_cat - National Emissions Inventory (NEI) Pollutant Category.  When a pollutant category is entered, a corresponding formatted pollutant amount or custom amount must be entered.
     * @param p_pm - Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
     * - NONE = 0%
     * - GT5 = greater than 5%
     * - GT10 = greater than 10%
     * - GT25 = greater than 25%
     * - GT50 = greater than 50%
     * - GT75 = greater than 75%
     * @param p_pd - Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
     * - NONE = 0 population density per square mile
     * - GT100 = More than 100 population density per square mile
     * - GT500 = More than 500 population density per square mile
     * - GT1000 = More than 1000 population density per square mile
     * - GT5000 = More than 5000 population density per square mile
     * - GT10000 = More than 10000 population density per square mile
     * - GT20000 = More than 20000 population density per square mile
     * @param p_ico - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
     * @param p_huc - 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
     * @param p_wbd - 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
     * @param p_pid - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
     * @param p_med - Filter Results by Media.
     * - M = RMP (Risk Management Plan)
     * - R = RCRA (Hazardous Waste)
     * - S = SDWA (Public Drinking Water Systems)
     * - W = Water
     * - ALL = Water and RCRA and SDWA
     * @param p_ysl - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
     * - W = within date range
     * - N = not within date range
     * @param p_ysly - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
     * @param p_ysla - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
     * - E = EPA
     * - S = State
     * @param p_stsl - Last Stack Test [within / not within] Specified Date Range Indicator.
     * - W = within date range
     * - N = not within date range
     * @param p_stsly - Number of years (1 to 5) since date of last stack test. A value of 1 means it has been inspected within the year.
     * @param p_stsla - Stack Last Test Code Filter.  Enter a value to limit results:
     * - A = All
     * - E = EPA
     * - S = State
     * @param p_stres - Air Stack Test Status Description Filter.  Enter one or more test status descriptions to filter results.  Enter multiple values as a comma-delimited list.
     * @param p_sttyp - Air Conductor Type Code Filter.  Enter one or more conductor type codes to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_qs - Quick Search. Allows entry for city, state, and/or zip code.
     * @param p_sfs - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
     * @param p_tribeid - Numeric code for tribe (or list of tribes).
     * @param p_tribename - Tribe Name Filter.  Enter a single tribe name to filter results.
     * @param p_tribedist - Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
     * @param p_owop - Owner/Operator code filter.  Enter one or more codes to limit results.
     * - CNG
     * - COR
     * - CTG
     * - DIS
     * - FDF
     * - MWD
     * - MXO
     * - NON
     * - POF
     * - SDT
     * - STF
     * - TRB
     * @param p_agoo - Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
     * @param p_idt1 - Beginning of date range of most recent facility inspection.
     * @param p_idt2 - End of date range of most recent facility inspection.
     * @param p_stdt1 - Beginning of date range of most recent stack test.
     * @param p_stdt2 - End of date range of most recent stack test.
     * @param p_pityp - Inspection Type:
     * - CAC = Corrective Action Inspection
     * - CAV = Compliance Assistance Visit
     * - CDI = Case Development Inspection
     * - CEI = Inspection Inspection
     * - CSE = Compliance Schedule Evaluation
     * - FCI = Focused Compliance
     * - FRR = Financial Record Review
     * - FSD = Facility Self Disclosure
     * - FUI = Follow-Up Inspection
     * - GME = Groundwater Monitoring Evaluation
     * - NRR = Non-Financial Record Review
     * - OAM = Operation and Maintenance Inspection
     * May contain multiple comma-separated values.
     * @param p_cifdi - Compliance issuess found during inspection.
     * @param p_pfead1 - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
     * @param p_pfead2 - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
     * @param p_pfeat - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
     * @param p_psncq - Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
     * - Z = Zero quarters in significant noncompliance.
     * - GEXX = Replacing XX with a numeric value, that number of quarterd or more in significant noncompliance.
     * - GTXX = Replacing XX with a numeric value, more than that number of quarters in significant noncompliance.
     * @param p_pctrack - Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
     * - Off
     * - Partial
     * - On
     * @param p_swpa - Source water protection area
     * @param p_des - Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
     * @param p_fntype - Controls type of text search performed on facility name with parameter p_fn.
     * - EXACT = Find facilities having the exact provided name(s).
     * - BEGINS = Find facilities with names starting with the provided term(s).
     * - ALL = Find facilities using Oracle text search terms.
     * - CONTAINS =
     * @param p_hpvmth - Months in high priority violation status out of the previous three years limiter.  Provide a number of months in the past three years.  Results will limited to facilities in high priority violation status during that time.
     * @param p_recvio - Recent Violation Status Filter.  Enter one or more recent violation codes to limit results.  Provide multiple values as a comma-delimited list.
     * - NO VIOL = Selects facilities with no recent violations.
     * - ANY HPV = Selects facilities with either addressed or unaddressed high priority violations.
     * - ADDRS-EPA - Select facilities with recent EPA addressed violations.
     * - ADDRS-LOCAL - Select facilities with recent locally addressed violations.
     * - ADDRS-STATE - Select facilities with recent state addressed violations.
     * - UNADDR-EPA - Select facilities with recent EPA unaddressed violations.
     * - UNADDR-LOCAL - Select facilities with recent locally unaddressed violations.
     * - UNADDR-STATE - Select facilities with recent state unaddressed violations.
     * - FRV VIOL = Selects facilities with a recent federally reportable violation without a high priority violation.
     * @param p_pollvio - Air Pollutant Code For A Recent Violation Filter.  Provide one or more pollutant codes to select facilities with one or more of the entered pollutant codes for a recent air violation.  Provide multiple values as a comma-delimited list.
     * @param p_ar - Associated EPA Air Reports Program Filter.  Enter multiple values as a comma-delimited list.  Valid values are:
     * - TRI = Toxic Release Inventory.
     * - GHG = Green House Gas Reporter.
     * - EIS = Emission Inventory System.
     * - CAMD = Clean Air Markets Program Reporter.
     * @param p_tri_yr - Toxic Release Inventory Reporting Year Filter.  Enter one or more year values to filter results by the TRI reporting year.  Provide multiple years as a comma-delimited list.
     * @param p_pidall - Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
     * @param p_fac_ico - FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
     * @param p_icoo - Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
     * @param p_fac_icos - FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
     * @param p_ejscreen - Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
     * @param p_limit_addr - Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.
     * @param p_lat - Latitude location in decimal degrees.
     * @param p_long - Longitude location in decimal degrees.
     * @param p_radius - Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
     * @param p_decouple - Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
     * @param p_ejscreen_over80cnt - The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
     * @param queryset - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
     * @param responseset - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
     * @param summarylist - Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @param qcolumns - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
     * @param p_pretty_print - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.
     * @return 200|application/json - Results will either be an array of Facilities or an array of Clusters. The search will return clusters if the number of facilities returned is greater than the resposeset size, otherwise individual facility records will be returned.
     * @return 200|application/xml - Results will either be an array of Facilities or an array of Clusters. The search will return clusters if the number of facilities returned is greater than the resposeset size, otherwise individual facility records will be returned.
     */
    'air_rest_services.get_facility_info'(output?: Query<string>, p_fn?: Query<string>, p_sa?: Query<string>, p_sa1?: Query<string>, p_ct?: Query<string>, p_co?: Query<string>, p_fips?: Query<string>, p_st?: Query<string>, p_zip?: Query<string>, p_lcon?: Query<string>, p_frs?: Query<string>, p_reg?: Query<"01" | "02" | "03" | "04" | "05" | "06" | "07" | 8 | 9 | "10">, p_sic?: Query<string>, p_ncs?: Query<string>, p_qnc?: Query<double>, p_pen?: Query<string>, p_opst?: Query<string>, xmin?: Query<double>, ymin?: Query<double>, xmax?: Query<double>, ymax?: Query<double>, p_usmex?: Query<"Y" | "N">, p_sic2?: Query<string>, p_sic4?: Query<string>, p_fa?: Query<string>, p_act?: Query<"Y" | "N" | "A">, p_maj?: Query<"Y" | "N">, p_mact?: Query<string>, p_nsps?: Query<string>, p_nspsm?: Query<string>, p_prog?: Query<string>, p_fea?: Query<"W" | "N">, p_feay?: Query<1 | 2 | 3 | 4 | 5>, p_feaa?: Query<"A" | "E" | "S">, p_iea?: Query<"W" | "N">, p_ieay?: Query<1 | 2 | 3 | 4 | 5>, p_ieaa?: Query<"E" | "S">, p_qiv?: Query<"0" | "GT1" | "GT2" | "GT4" | "GT8" | "12">, p_naa?: Query<string>, p_impw?: Query<"Y" | "N">, p_trep?: Query<"NONE" | "CURR" | "NOTCURR">, p_tri_cat?: Query<"TOTAL" | "CARC" | "HAP">, p_tri_amt?: Query<"0" | "GT0" | "GT1000" | "GT5000" | "GT10000" | "GT50000">, p_tri_any_amt?: Query<double>, p_tri_pol?: Query<string>, p_ghg_cat?: Query<"ALL" | "BIOCO2" | "CH4" | "CO2" | "HFC" | "N2O" | "NF3" | "OTHER_L" | "PFC" | "SF6">, p_ghg_amt?: Query<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_ghg_any_amt?: Query<double>, p_ghg_yr?: Query<string>, p_nei_pol?: Query<string>, p_nei_amt?: Query<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_nei_any_amt?: Query<double>, p_nei_yr?: Query<string>, p_nei_cat?: Query<string>, p_pm?: Query<"NONE" | "GT5" | "GT10" | "GT25" | "GT50" | "GT75">, p_pd?: Query<"NONE" | "GT100" | "GT500" | "GT1000" | "GT5000" | "GT10000" | "GT20000">, p_ico?: Query<"Y" | "N">, p_huc?: Query<string>, p_wbd?: Query<string>, p_pid?: Query<string>, p_med?: Query<"M" | "R" | "S" | "W" | "ALL">, p_ysl?: Query<"W" | "N" | "NV">, p_ysly?: Query<1 | 2 | 3 | 4 | 5>, p_ysla?: Query<"E" | "S" | "A">, p_stsl?: Query<"W" | "N">, p_stsly?: Query<1 | 2 | 3 | 4 | 5>, p_stsla?: Query<"A" | "E" | "S">, p_stres?: Query<string>, p_sttyp?: Query<string>, p_qs?: Query<string>, p_sfs?: Query<string>, p_tribeid?: Query<double>, p_tribename?: Query<string>, p_tribedist?: Query<double>, p_owop?: Query<string>, p_agoo?: Query<"AND" | "OR">, p_idt1?: Query<string>, p_idt2?: Query<string>, p_stdt1?: Query<string>, p_stdt2?: Query<string>, p_pityp?: Query<string>, p_cifdi?: Query<"Any" | "Yes" | "No" | "Undetermined">, p_pfead1?: Query<string>, p_pfead2?: Query<string>, p_pfeat?: Query<string>, p_psncq?: Query<"GT1" | "GE1" | "GT2" | "GE2" | "GT4" | "GE4" | "GT8" | "GE8" | "GT12" | "GE12">, p_pctrack?: Query<"Off" | "Partial" | "On">, p_swpa?: Query<"source water" | "surface water" | "ground water" | "waiting for SSO">, p_des?: Query<string>, p_fntype?: Query<"ALL" | "CONTAINS" | "EXACT" | "BEGINS">, p_hpvmth?: Query<string>, p_recvio?: Query<string>, p_pollvio?: Query<string>, p_ar?: Query<string>, p_tri_yr?: Query<string>, p_pidall?: Query<"Y" | "N">, p_fac_ico?: Query<"Y" | "N">, p_icoo?: Query<string>, p_fac_icos?: Query<string>, p_ejscreen?: Query<string>, p_limit_addr?: Query<"Y" | "N">, p_lat?: Query<double>, p_long?: Query<double>, p_radius?: Query<double>, p_decouple?: Query<"Y" | "N">, p_ejscreen_over80cnt?: Query<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11">, queryset?: Query<double>, responseset?: Query<double>, summarylist?: Query<"Y" | "N">, callback?: Query<string>, qcolumns?: Query<string>, p_pretty_print?: Query<double>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air3_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air3_Results;
        };
    }];
    /**
     * Clean Air Act Facility Enhanced Search
     * @description Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.
     * @since 0.0.0
     * @http POST /air_rest_services.get_facility_info
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * - CSV = Facility results formatted as comma delimited file download.
     * - GEOJSON = Facility results formatted as GeoJSON feature collection.
     * - GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @param p_fn - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
     * @param p_sa - Facility street address. Enter a complete or partial street address.
     * @param p_sa1 - Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
     * @param p_ct - Facility City Filter. Enter a single case-insensitive city name to filter results.
     * @param p_co - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
     * @param p_fips - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
     * @param p_st - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_zip - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
     * @param p_lcon - Air Program Local Control Region Code Filter.  Enter one or more local control region codes to filter results.  Provide multiple codes as a comma-delimited list.  Codes where they exist are specific by state.
     * @param p_frs - Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
     * @param p_reg - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
     * @param p_sic - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
     * @param p_ncs - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
     * @param p_qnc - Number of quarters in non-compliance limiter.  Enter an integer value between 1 and 4 to limit results.
     * @param p_pen - Last Penality Date Qualifier Filter.  Enter one of the following:
     * - NEVER = No Penalties
     * - ANY = Any Penalty
     * - LEXX = Less than or equal to XX months.  Provide a number in place of XX, e.g. "LE5" for a facility with a penalty within previous 5 months.
     * - GTXX = Greater than XX months.  Provide a number in place of XX, eg. GT12, for a facility with the last penalty greater than 12 months ago.
     * @param p_opst - Operating status filter.  Enter one or more operating status codes to limit results.   Provide multiple codes as a comma-delimited list.
     * @param xmin - Minimum longitude value in decimal degrees.
     * @param ymin - Minimum latitude value in decimal degrees.
     * @param xmax - Maximum longitude value in decimal degrees.
     * @param ymax - Maximum latitude value in decimal degrees.
     * @param p_usmex - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
     * @param p_sic2 - Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
     * @param p_sic4 - Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
     * @param p_fa - Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
     * @param p_act - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
     * @param p_maj - Major Facility Flag.  Enter Y to restrict results to Major facilities only.
     * @param p_mact - CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
     * @param p_nsps - Air Programl New Source Performance Standards (NSPS)  Subpart Code Search.  One or more valid Air Program NSPS Program codes cand be passed.
     * @param p_nspsm - Air Programl New Source Performance Standards Minors (NSPSM) Subpart Code Search.  One or more valid Air Program NSPSM Subpart codes can be passed.
     * @param p_prog - Air Program Code Filter.  Enter one or more Air program codes to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_fea - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
     * - W = within date range
     * - N = not within date range
     * @param p_feay - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
     * @param p_feaa - Agency associated with Formal Enforcement Actions:
     * - E = EPA
     * - S = State
     * - A = All
     * @param p_iea - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
     * - W = within date range
     * - N = not within date range
     * @param p_ieay - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
     * @param p_ieaa - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
     * - E = EPA
     * - S = State
     * @param p_qiv - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
     * - Z = Zero quarters in noncompliance.
     * - GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.
     * - GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.
     * @param p_naa - Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
     * @param p_impw - Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
     * @param p_trep - Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
     * - NONE = Never has reported to TRI.
     * - CURR = Current TRI reporter.
     * - NONCURR = Has reported to TRI in the past but not for the current reporting year.
     * @param p_tri_cat - Toxic Release Inventory Released To Air Chemical Identifier Category Filter.  Enter the chemical identifier category code to limit results. Note when filtering by TRI chemical identifier categories one may not also filter by specific chemical identifiers via p_tri_pol.  You must also specify a release amount using p_tri_amt or p_tri_any_amt.
     * - TOTAL = Total Released to Air
     * - CARC = Total Carcinogens Released to Air
     * - HAP = Total Hazardous Air Pollutants Released to Air
     * @param p_tri_amt - Toxic Release Inventory Release Amount Filter.  Enter a value in pounds to limit results to facilities releasing this amount or greateer of TRI releases.  Valid values are 0, GT0, GT1000, GT5000, GT10000 and GT50000. Note when filtering by TRI release amounts one may only use either p_tri_amt or p_tri_any_amt.
     * @param p_tri_any_amt - Toxic Release Inventory Release Of Any Kind Above Value Filter.  Enter a value to limit results to facilities releasing this amount or more of TRI releases.  Note when filtering by TRI releases one may only use p_tri_any_amt or p_tri_amt and not both.
     * @param p_tri_pol - Toxic Release Inventory Chemical Identifier Filter.  Enter one or more chemical identifier codes to limit results. Note when filtering by specific TRI chemical identifiers one may not also filter by chemical identifier categories via p_tri_cat.
     * @param p_ghg_cat - Green House Gas (GHG) Gas Code Category.  Must be used with either a formatted (p_ghg_amt) or custom (p_ghg_any_amt) release amount.
     * @param p_ghg_amt - Green House Gas (GHG) CO2 Equivalent Formatted Release Amount.  First 2 characters must contain GT (greater than) followed by a number.
     * @param p_ghg_any_amt - Green House Gas (GHG) C02 Equivalent Custom Amount.  The C02E value reported for the provided category, will be greater or equal to the amount provided.
     * @param p_ghg_yr - Green House Gas (GHG) Reporting Year. (2010 through 2015)
     * @param p_nei_pol - National Emissions Inventory (NEI) Pollutant Identifier.  When a pollutant identifer is entered a corresponding formatted amount or custom amount must be entered.
     * @param p_nei_amt - National Emissions Inventory (NEI) Formatted Pollutant Amount.  A formatted value where the 1st two characters must start with GT or LT followed by a number.  Identifies facilities that have a NEI Pollutant Emission  where the supplied value is > or < the pollutant emission amount.
     * @param p_nei_any_amt - National Emissions Inventory (NEI) Custom Pollutant Amount.  Only a number can be entered.  Identifies facilities with where the NEI Pollutant Emission Amount is greater than the number entered.
     * @param p_nei_yr - National Emissions Inventory (NEI) year:  2014 or 2011
     * @param p_nei_cat - National Emissions Inventory (NEI) Pollutant Category.  When a pollutant category is entered, a corresponding formatted pollutant amount or custom amount must be entered.
     * @param p_pm - Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
     * - NONE = 0%
     * - GT5 = greater than 5%
     * - GT10 = greater than 10%
     * - GT25 = greater than 25%
     * - GT50 = greater than 50%
     * - GT75 = greater than 75%
     * @param p_pd - Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
     * - NONE = 0 population density per square mile
     * - GT100 = More than 100 population density per square mile
     * - GT500 = More than 500 population density per square mile
     * - GT1000 = More than 1000 population density per square mile
     * - GT5000 = More than 5000 population density per square mile
     * - GT10000 = More than 10000 population density per square mile
     * - GT20000 = More than 20000 population density per square mile
     * @param p_ico - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
     * @param p_huc - 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
     * @param p_wbd - 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
     * @param p_pid - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
     * @param p_med - Filter Results by Media.
     * - M = RMP (Risk Management Plan)
     * - R = RCRA (Hazardous Waste)
     * - S = SDWA (Public Drinking Water Systems)
     * - W = Water
     * - ALL = Water and RCRA and SDWA
     * @param p_ysl - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
     * - W = within date range
     * - N = not within date range
     * @param p_ysly - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
     * @param p_ysla - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
     * - E = EPA
     * - S = State
     * @param p_stsl - Last Stack Test [within / not within] Specified Date Range Indicator.
     * - W = within date range
     * - N = not within date range
     * @param p_stsly - Number of years (1 to 5) since date of last stack test. A value of 1 means it has been inspected within the year.
     * @param p_stsla - Stack Last Test Code Filter.  Enter a value to limit results:
     * - A = All
     * - E = EPA
     * - S = State
     * @param p_stres - Air Stack Test Status Description Filter.  Enter one or more test status descriptions to filter results.  Enter multiple values as a comma-delimited list.
     * @param p_sttyp - Air Conductor Type Code Filter.  Enter one or more conductor type codes to filter results.  Provide multiple values as a comma-delimited list.
     * @param p_qs - Quick Search. Allows entry for city, state, and/or zip code.
     * @param p_sfs - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
     * @param p_tribeid - Numeric code for tribe (or list of tribes).
     * @param p_tribename - Tribe Name Filter.  Enter a single tribe name to filter results.
     * @param p_tribedist - Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
     * @param p_owop - Owner/Operator code filter.  Enter one or more codes to limit results.
     * - CNG
     * - COR
     * - CTG
     * - DIS
     * - FDF
     * - MWD
     * - MXO
     * - NON
     * - POF
     * - SDT
     * - STF
     * - TRB
     * @param p_agoo - Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
     * @param p_idt1 - Beginning of date range of most recent facility inspection.
     * @param p_idt2 - End of date range of most recent facility inspection.
     * @param p_stdt1 - Beginning of date range of most recent stack test.
     * @param p_stdt2 - End of date range of most recent stack test.
     * @param p_pityp - Inspection Type:
     * - CAC = Corrective Action Inspection
     * - CAV = Compliance Assistance Visit
     * - CDI = Case Development Inspection
     * - CEI = Inspection Inspection
     * - CSE = Compliance Schedule Evaluation
     * - FCI = Focused Compliance
     * - FRR = Financial Record Review
     * - FSD = Facility Self Disclosure
     * - FUI = Follow-Up Inspection
     * - GME = Groundwater Monitoring Evaluation
     * - NRR = Non-Financial Record Review
     * - OAM = Operation and Maintenance Inspection
     * May contain multiple comma-separated values.
     * @param p_cifdi - Compliance issuess found during inspection.
     * @param p_pfead1 - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
     * @param p_pfead2 - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
     * @param p_pfeat - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
     * @param p_psncq - Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
     * - Z = Zero quarters in significant noncompliance.
     * - GEXX = Replacing XX with a numeric value, that number of quarterd or more in significant noncompliance.
     * - GTXX = Replacing XX with a numeric value, more than that number of quarters in significant noncompliance.
     * @param p_pctrack - Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
     * - Off
     * - Partial
     * - On
     * @param p_swpa - Source water protection area
     * @param p_des - Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
     * @param p_fntype - Controls type of text search performed on facility name with parameter p_fn.
     * - EXACT = Find facilities having the exact provided name(s).
     * - BEGINS = Find facilities with names starting with the provided term(s).
     * - ALL = Find facilities using Oracle text search terms.
     * - CONTAINS =
     * @param p_hpvmth - Months in high priority violation status out of the previous three years limiter.  Provide a number of months in the past three years.  Results will limited to facilities in high priority violation status during that time.
     * @param p_recvio - Recent Violation Status Filter.  Enter one or more recent violation codes to limit results.  Provide multiple values as a comma-delimited list.
     * - NO VIOL = Selects facilities with no recent violations.
     * - ANY HPV = Selects facilities with either addressed or unaddressed high priority violations.
     * - ADDRS-EPA - Select facilities with recent EPA addressed violations.
     * - ADDRS-LOCAL - Select facilities with recent locally addressed violations.
     * - ADDRS-STATE - Select facilities with recent state addressed violations.
     * - UNADDR-EPA - Select facilities with recent EPA unaddressed violations.
     * - UNADDR-LOCAL - Select facilities with recent locally unaddressed violations.
     * - UNADDR-STATE - Select facilities with recent state unaddressed violations.
     * - FRV VIOL = Selects facilities with a recent federally reportable violation without a high priority violation.
     * @param p_pollvio - Air Pollutant Code For A Recent Violation Filter.  Provide one or more pollutant codes to select facilities with one or more of the entered pollutant codes for a recent air violation.  Provide multiple values as a comma-delimited list.
     * @param p_ar - Associated EPA Air Reports Program Filter.  Enter multiple values as a comma-delimited list.  Valid values are:
     * - TRI = Toxic Release Inventory.
     * - GHG = Green House Gas Reporter.
     * - EIS = Emission Inventory System.
     * - CAMD = Clean Air Markets Program Reporter.
     * @param p_tri_yr - Toxic Release Inventory Reporting Year Filter.  Enter one or more year values to filter results by the TRI reporting year.  Provide multiple years as a comma-delimited list.
     * @param p_pidall - Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
     * @param p_fac_ico - FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
     * @param p_icoo - Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
     * @param p_fac_icos - FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
     * @param p_ejscreen - Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
     * @param p_limit_addr - Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.
     * @param p_lat - Latitude location in decimal degrees.
     * @param p_long - Longitude location in decimal degrees.
     * @param p_radius - Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
     * @param p_decouple - Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
     * @param p_ejscreen_over80cnt - The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
     * @param queryset - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
     * @param responseset - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
     * @param summarylist - Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @param qcolumns - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
     * @param p_pretty_print - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.
     * @return 200|application/json - Results will either be an array of Facilities or an array of Clusters. The search will return clusters if the number of facilities returned is greater than the resposeset size, otherwise individual facility records will be returned.
     * @return 200|application/xml - Results will either be an array of Facilities or an array of Clusters. The search will return clusters if the number of facilities returned is greater than the resposeset size, otherwise individual facility records will be returned.
     */
    'air_rest_services.get_facility_info'(output?: FormData<string>, p_fn?: FormData<string>, p_sa?: FormData<string>, p_sa1?: FormData<string>, p_ct?: FormData<string>, p_co?: FormData<string>, p_fips?: FormData<string>, p_st?: FormData<string>, p_zip?: FormData<string>, p_lcon?: FormData<string>, p_frs?: FormData<string>, p_reg?: FormData<"01" | "02" | "03" | "04" | "05" | "06" | "07" | 8 | 9 | "10">, p_sic?: FormData<string>, p_ncs?: FormData<string>, p_qnc?: FormData<double>, p_pen?: FormData<string>, p_opst?: FormData<string>, xmin?: FormData<double>, ymin?: FormData<double>, xmax?: FormData<double>, ymax?: FormData<double>, p_usmex?: FormData<"Y" | "N">, p_sic2?: FormData<string>, p_sic4?: FormData<string>, p_fa?: FormData<string>, p_act?: FormData<"Y" | "N" | "A">, p_maj?: FormData<"Y" | "N">, p_mact?: FormData<string>, p_nsps?: FormData<string>, p_nspsm?: FormData<string>, p_prog?: FormData<string>, p_fea?: FormData<"W" | "N">, p_feay?: FormData<1 | 2 | 3 | 4 | 5>, p_feaa?: FormData<"A" | "E" | "S">, p_iea?: FormData<"W" | "N">, p_ieay?: FormData<1 | 2 | 3 | 4 | 5>, p_ieaa?: FormData<"E" | "S">, p_qiv?: FormData<"0" | "GT1" | "GT2" | "GT4" | "GT8" | "12">, p_naa?: FormData<string>, p_impw?: FormData<"Y" | "N">, p_trep?: FormData<"NONE" | "CURR" | "NOTCURR">, p_tri_cat?: FormData<"TOTAL" | "CARC" | "HAP">, p_tri_amt?: FormData<"0" | "GT0" | "GT1000" | "GT5000" | "GT10000" | "GT50000">, p_tri_any_amt?: FormData<double>, p_tri_pol?: FormData<string>, p_ghg_cat?: FormData<"ALL" | "BIOCO2" | "CH4" | "CO2" | "HFC" | "N2O" | "NF3" | "OTHER_L" | "PFC" | "SF6">, p_ghg_amt?: FormData<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_ghg_any_amt?: FormData<double>, p_ghg_yr?: FormData<string>, p_nei_pol?: FormData<string>, p_nei_amt?: FormData<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_nei_any_amt?: FormData<double>, p_nei_yr?: FormData<string>, p_nei_cat?: FormData<string>, p_pm?: FormData<"NONE" | "GT5" | "GT10" | "GT25" | "GT50" | "GT75">, p_pd?: FormData<"NONE" | "GT100" | "GT500" | "GT1000" | "GT5000" | "GT10000" | "GT20000">, p_ico?: FormData<"Y" | "N">, p_huc?: FormData<string>, p_wbd?: FormData<string>, p_pid?: FormData<string>, p_med?: FormData<"M" | "R" | "S" | "W" | "ALL">, p_ysl?: FormData<"W" | "N" | "NV">, p_ysly?: FormData<1 | 2 | 3 | 4 | 5>, p_ysla?: FormData<"E" | "S" | "A">, p_stsl?: FormData<"W" | "N">, p_stsly?: FormData<1 | 2 | 3 | 4 | 5>, p_stsla?: FormData<"A" | "E" | "S">, p_stres?: FormData<string>, p_sttyp?: FormData<string>, p_qs?: FormData<string>, p_sfs?: FormData<string>, p_tribeid?: FormData<double>, p_tribename?: FormData<string>, p_tribedist?: FormData<double>, p_owop?: FormData<string>, p_agoo?: FormData<"AND" | "OR">, p_idt1?: FormData<string>, p_idt2?: FormData<string>, p_stdt1?: FormData<string>, p_stdt2?: FormData<string>, p_pityp?: FormData<string>, p_cifdi?: FormData<"Any" | "Yes" | "No" | "Undetermined">, p_pfead1?: FormData<string>, p_pfead2?: FormData<string>, p_pfeat?: FormData<string>, p_psncq?: FormData<"GT1" | "GE1" | "GT2" | "GE2" | "GT4" | "GE4" | "GT8" | "GE8" | "GT12" | "GE12">, p_pctrack?: FormData<"Off" | "Partial" | "On">, p_swpa?: FormData<"source water" | "surface water" | "ground water" | "waiting for SSO">, p_des?: FormData<string>, p_fntype?: FormData<"ALL" | "CONTAINS" | "EXACT" | "BEGINS">, p_hpvmth?: FormData<string>, p_recvio?: FormData<string>, p_pollvio?: FormData<string>, p_ar?: FormData<string>, p_tri_yr?: FormData<string>, p_pidall?: FormData<"Y" | "N">, p_fac_ico?: FormData<"Y" | "N">, p_icoo?: FormData<string>, p_fac_icos?: FormData<string>, p_ejscreen?: FormData<string>, p_limit_addr?: FormData<"Y" | "N">, p_lat?: FormData<double>, p_long?: FormData<double>, p_radius?: FormData<double>, p_decouple?: FormData<"Y" | "N">, p_ejscreen_over80cnt?: FormData<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11">, queryset?: FormData<double>, responseset?: FormData<double>, summarylist?: FormData<"Y" | "N">, callback?: FormData<string>, qcolumns?: FormData<string>, p_pretty_print?: FormData<double>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air3_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air3_Results;
        };
    }];
    /**
     * Clean Air Act GeoJSON Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.
     * @since 0.0.0
     * @http GET /air_rest_services.get_geojson
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - GEOJSON = Facility results formatted as GeoJSON feature collection (default).
     * - GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @param qid - Query ID Selector.  Enter the QueryID number from a previously run query.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @param newsort - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
     * @param descending - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
     * @param qcolumns - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
     * @param p_pretty_print - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.
     * @return 200|application/json - Results are formatted as a GeoJSON feature collection.
     * @return 200|application/xml - Results are formatted as a GeoJSON feature collection.
     */
    'air_rest_services.get_geojson'(output?: Query<string>, qid: Query<string>, callback?: Query<string>, newsort?: Query<double>, descending?: Query<"Y" | "N">, qcolumns?: Query<string>, p_pretty_print?: Query<double>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             * Features Array
             * @description Array of features in the feature collection.
             * @since 0.0.0
             */
            features: Array<air6_Feature>;
            /**
             * Feature Collection
             * @description Static marker indicating object is a GeoJSON Feature Collection.
             * @since 0.0.0
             */
            type: string;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             * Features Array
             * @description Array of features in the feature collection.
             * @since 0.0.0
             */
            features: Array<air6_Feature>;
            /**
             * Feature Collection
             * @description Static marker indicating object is a GeoJSON Feature Collection.
             * @since 0.0.0
             */
            type: string;
        };
    }];
    /**
     * Clean Air Act GeoJSON Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.
     * @since 0.0.0
     * @http POST /air_rest_services.get_geojson
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - GEOJSON = Facility results formatted as GeoJSON feature collection (default).
     * - GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @param qid - Query ID Selector.  Enter the QueryID number from a previously run query.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @param newsort - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
     * @param descending - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
     * @param qcolumns - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
     * @param p_pretty_print - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.
     * @return 200|application/json - Results are formatted as a GeoJSON feature collection.
     * @return 200|application/xml - Results are formatted as a GeoJSON feature collection.
     */
    'air_rest_services.get_geojson'(output?: FormData<string>, qid: FormData<string>, callback?: FormData<string>, newsort?: FormData<double>, descending?: FormData<"Y" | "N">, qcolumns?: FormData<string>, p_pretty_print?: FormData<double>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             * Features Array
             * @description Array of features in the feature collection.
             * @since 0.0.0
             */
            features: Array<air6_Feature>;
            /**
             * Feature Collection
             * @description Static marker indicating object is a GeoJSON Feature Collection.
             * @since 0.0.0
             */
            type: string;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             * Features Array
             * @description Array of features in the feature collection.
             * @since 0.0.0
             */
            features: Array<air6_Feature>;
            /**
             * Feature Collection
             * @description Static marker indicating object is a GeoJSON Feature Collection.
             * @since 0.0.0
             */
            type: string;
        };
    }];
    /**
     * Clean Air Act Info Clusters Service
     * @description Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.
     * @since 0.0.0
     * @http GET /air_rest_services.get_info_clusters
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - CSV = Facility results formatted as comma delimited file download (default).
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @param p_qid - Query ID Selector.  Enter the QueryID number from a previously run query.
     * @param p_pretty_print - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.
     * @return 200|application/json - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     * @return 200|application/xml - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     */
    'air_rest_services.get_info_clusters'(output?: Query<string>, p_qid: Query<string>, p_pretty_print?: Query<double>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: file;
    }, (code: 200, mediaType: "application/xml") => {
        body: file;
    }];
    /**
     * Clean Air Act Info Clusters Service
     * @description Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.
     * @since 0.0.0
     * @http POST /air_rest_services.get_info_clusters
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - CSV = Facility results formatted as comma delimited file download (default).
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @param p_qid - Query ID Selector.  Enter the QueryID number from a previously run query.
     * @param p_pretty_print - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.
     * @return 200|application/json - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     * @return 200|application/xml - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     */
    'air_rest_services.get_info_clusters'(output?: FormData<string>, p_qid: FormData<string>, p_pretty_print?: FormData<double>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: file;
    }, (code: 200, mediaType: "application/xml") => {
        body: file;
    }];
    /**
     * Clean Air Act Map Service
     * @description The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.
     * @since 0.0.0
     * @http GET /air_rest_services.get_map
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @param qid - Query ID Selector.  Enter the QueryID number from a previously run query.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @param tablelist - Table List Flag. Enter a Y to display the first page of facility results.
     * @param c1_lat - Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param c1_long - Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param c2_lat - Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param c2_long - Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param p_id - Identifier for the service.
     * @return 200|application/json - Results are either an array of State, County, Zip Code facility cluster map coordinates or individual facility coordinates.  Coordinates provided are in WGS84.
     * @return 200|application/xml - Results are either an array of State, County, Zip Code facility cluster map coordinates or individual facility coordinates.  Coordinates provided are in WGS84.
     */
    'air_rest_services.get_map'(output?: Query<"JSONP" | "JSON" | "XML">, qid: Query<string>, callback?: Query<string>, tablelist?: Query<"Y" | "N">, c1_lat?: Query<double>, c1_long?: Query<double>, c2_lat?: Query<double>, c2_long?: Query<double>, p_id: Query<string>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            MapOutput: air4_MapOutput;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            MapOutput: air4_MapOutput;
        };
    }];
    /**
     * Clean Air Act Map Service
     * @description The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.
     * @since 0.0.0
     * @http POST /air_rest_services.get_map
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @param qid - Query ID Selector.  Enter the QueryID number from a previously run query.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @param tablelist - Table List Flag. Enter a Y to display the first page of facility results.
     * @param c1_lat - Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param c1_long - Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param c2_lat - Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param c2_long - Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
     * @param p_id - Identifier for the service.
     * @return 200|application/json - Results are either an array of State, County, Zip Code facility cluster map coordinates or individual facility coordinates.  Coordinates provided are in WGS84.
     * @return 200|application/xml - Results are either an array of State, County, Zip Code facility cluster map coordinates or individual facility coordinates.  Coordinates provided are in WGS84.
     */
    'air_rest_services.get_map'(output?: FormData<"JSONP" | "JSON" | "XML">, qid: FormData<string>, callback?: FormData<string>, tablelist?: FormData<"Y" | "N">, c1_lat?: FormData<double>, c1_long?: FormData<double>, c2_lat?: FormData<double>, c2_long?: FormData<double>, p_id: FormData<string>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            MapOutput: air4_MapOutput;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            MapOutput: air4_MapOutput;
        };
    }];
    /**
     * Clean Air Act Search by Query ID
     * @description GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.
     * @since 0.0.0
     * @http GET /air_rest_services.get_qid
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @param qid - Query ID Selector.  Enter the QueryID number from a previously run query.
     * @param pageno - Indicates the number of the page to display. It is used only when the results are paginated.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @param newsort - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
     * @param descending - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
     * @param qcolumns - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
     * @return 200|application/json - Results are an array (page)  of CAA (ICIS Air) Facilities with the number of facilities equal to the responseset (page size).
     * @return 200|application/xml - Results are an array (page)  of CAA (ICIS Air) Facilities with the number of facilities equal to the responseset (page size).
     */
    'air_rest_services.get_qid'(output?: Query<"JSONP" | "JSON" | "XML">, qid: Query<string>, pageno?: Query<double /* todo: add defaultValue '1' */>, callback?: Query<string>, newsort?: Query<double>, descending?: Query<"Y" | "N">, qcolumns?: Query<string>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air5_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air5_Results;
        };
    }];
    /**
     * Clean Air Act Search by Query ID
     * @description GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.
     * @since 0.0.0
     * @http POST /air_rest_services.get_qid
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @param qid - Query ID Selector.  Enter the QueryID number from a previously run query.
     * @param pageno - Indicates the number of the page to display. It is used only when the results are paginated.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @param newsort - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
     * @param descending - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
     * @param qcolumns - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
     * @return 200|application/json - Results are an array (page)  of CAA (ICIS Air) Facilities with the number of facilities equal to the responseset (page size).
     * @return 200|application/xml - Results are an array (page)  of CAA (ICIS Air) Facilities with the number of facilities equal to the responseset (page size).
     */
    'air_rest_services.get_qid'(output?: FormData<"JSONP" | "JSON" | "XML">, qid: FormData<string>, pageno?: FormData<double /* todo: add defaultValue '1' */>, callback?: FormData<string>, newsort?: FormData<double>, descending?: FormData<"Y" | "N">, qcolumns?: FormData<string>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air5_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air5_Results;
        };
    }];
    /**
     * Clean Air Act Metadata Service
     * @description Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.
     * @since 0.0.0
     * @http GET /air_rest_services.metadata
     * @tag Metadata
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @return 200|application/json - Results are an array of columns/objects.
     * @return 200|application/xml - Results are an array of columns/objects.
     */
    'air_rest_services.metadata'(output?: Query<"JSONP" | "JSON" | "XML">, callback?: Query<string>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: met1;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: met1;
        };
    }];
    /**
     * Clean Air Act Metadata Service
     * @description Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.
     * @since 0.0.0
     * @http POST /air_rest_services.metadata
     * @tag Metadata
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @param callback - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
     * @return 200|application/json - Results are an array of columns/objects.
     * @return 200|application/xml - Results are an array of columns/objects.
     */
    'air_rest_services.metadata'(output?: FormData<"JSONP" | "JSON" | "XML">, callback?: FormData<string>, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: met1;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: met1;
        };
    }];
}
