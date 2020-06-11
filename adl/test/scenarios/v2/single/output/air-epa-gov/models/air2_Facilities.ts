
/**
 * @description Facilities Object
 * @since 0.0.0
 */
export interface air2_Facilities {
    /**
     * 3-Year Compliance Status History
     * @description The facility's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
     * _ - No Violation Identified
     * V - Violation Identified
     * S - High Priority Violation
     * U - Undetermined
     * @since 0.0.0
     */
    AIR3yrComplQtrsHistory: string;
    /**
     * @description Space-delimited list of AIR cases associated with the facility.
     * @since 0.0.0
     */
    AIRCaseIDs: string;
    /**
     * City
     * @description The city where the AIR facility is located.
     * @since 0.0.0
     */
    AIRCity: string;
    /**
     * Compliance Status
     * @description The facility's recent violation status under the Clean Air Act.
     * @since 0.0.0
     */
    AIRComplStatus: string;
    /**
     * @description The name of the county where the AIR facility is located.
     * @since 0.0.0
     */
    AIRCounty: string;
    /**
     * Days Since Last Compliance Evaluation
     * @description The number of days since the most recent compliance evaluation of the facility.
     * @since 0.0.0
     */
    AIRDaysLastEval: string;
    /**
     * @description The EPA region where the AIR facility is located.
     * @since 0.0.0
     */
    AIREPARegion: string;
    /**
     * Compliance Evaluation Count
     * @description The number of compliance evaluations, under the Clean Air Act, occurring at the facility within the last five years.
     * @since 0.0.0
     */
    AIREvalCnt: string;
    /**
     * State County FIPS Code
     * @description A 5 digit combination of the 2 digit Federal Information Processing Standards (FIPS) code for the state and the 3 digit FIPS code of the county that a facility is located in.
     * @since 0.0.0
     */
    AIRFIPSCode: string;
    /**
     * Facility Type Code
     * @description A three-character code indicating if plant is government facility.
     * COR - Corporation
     * CNG - County Government
     * DIS - District
     * FDF - Federal Facility (U.S. Government)
     * GOC - GOCO (Gov Owned/Contractor Operated)
     * IND - Individual
     * MXO - Mixed Ownership (e.g., Public/Private)
     * MWD - Municipal or Water District
     * CTG	- Municipality
     * NON - Non-Government
     * POF - Privately Owned Facility
     * SDT - School District
     * STF - State Government
     * TRB - Tribal Government
     * UNK - Unknown
     * @since 0.0.0
     */
    AIRFacilityTypeCode: string;
    /**
     * Formal Enforcement Action Count
     * @description The total number of formal enforcement actions taken against the facility within the last five years.
     * @since 0.0.0
     */
    AIRFeaCnt: string;
    /**
     * HPV Status
     * @description Indicates whether the facility currently has an unresolved High Priority Violation (HPV) under the Clean Air Act.
     * @since 0.0.0
     */
    AIRHpvStatus: string;
    /**
     * AIR Facility System ID
     * @description Air Facility System (AFS) ID.
     * @since 0.0.0
     */
    AIRIDs: string;
    /**
     * Informal Enforcement Action Count
     * @description The total number of informal enforcement actions taken against the facility within the last five years.
     * @since 0.0.0
     */
    AIRIeaCnt: string;
    /**
     * AIR Facility Indian Country Flag
     * @description Flag indicating whether the AIR facility is located in Indian country.
     * @since 0.0.0
     */
    AIRIndianCntryFlg: string;
    /**
     * Last Compliance Evaluation Date
     * @description The date on which the most recent Full Compliance Evaluation (FCE) of the facility by EPA or a state agency was completed.
     * @since 0.0.0
     */
    AIRLastEvalDate: string;
    /**
     * Air Last EPA Inspection Date
     * @description The last Air Inspection Date performed by EPA.
     * @since 0.0.0
     */
    AIRLastEvalDateEPA: string;
    /**
     * Air Last State Insprection Date
     * @description The last Air Inspection Date performed by State or local authorities.
     * @since 0.0.0
     */
    AIRLastEvalDateState: string;
    /**
     * Last Formal Enforcement Action Date
     * @description The effective date of the most recent listed formal enforcement action taken against the facility.
     * @since 0.0.0
     */
    AIRLastFeaDate: string;
    /**
     * Air Last EPA Formal Enforcement Action Date
     * @description The last Air Formal Enforcement Action Date take by EPA.
     * @since 0.0.0
     */
    AIRLastFeaDateEPA: string;
    /**
     * Air Last State Formal Enforcement Action Date
     * @description The last Air Formal Enforcement Action Date take by State or Local authorities.
     * @since 0.0.0
     */
    AIRLastFeaDateState: string;
    /**
     * Last Informal Enforcement Action Date
     * @description The effective date of the most recent listed informal enforcement action taken against the facility.
     * @since 0.0.0
     */
    AIRLastIeaDate: string;
    /**
     * Last EPA Informal Enforcement Action Date
     * @description The effective date of the most recent listed informal enforcement action taken against the facility by EPA.
     * @since 0.0.0
     */
    AIRLastIeaDateEPA: string;
    /**
     * Last State Informal Enforcement Action Date
     * @description The effective date of the most recent listed informal enforcement action taken against the facility by a state agency.
     * @since 0.0.0
     */
    AIRLastIeaDateState: string;
    /**
     * Air Last Penalty Date
     * @description Indicates the date on which the most recent assessed (or final) penalty was taken against the facility for AIR.
     * @since 0.0.0
     */
    AIRLastPenaltyDate: string;
    /**
     * Last EPA Stack Test Date
     * @description The date on which the most recent stack test by EPA occurred.
     * @since 0.0.0
     */
    AIRLastStckDateEPA: string;
    /**
     * Last State Stack Test Date
     * @description The date on which the most recent stack test by a state agency occurred.
     * @since 0.0.0
     */
    AIRLastStckDateState: string;
    /**
     * Last Stack Test Date
     * @description The date on which the most recent stack test occurred.
     * @since 0.0.0
     */
    AIRLastStckTestDate: string;
    /**
     * Last Stack Test Results
     * @description The result of the most recent stack test (Pass, Fail, Pending, or Blank).
     * @since 0.0.0
     */
    AIRLastStckTestResults: string;
    /**
     * Last Violation Date
     * @description The date on which the most recent violation was reported.
     * @since 0.0.0
     */
    AIRLastViolDate: string;
    /**
     * MACT Subparts
     * @description The Maximum Achievable Control Technology (MACT) Subpart associated with the facility.
     * @since 0.0.0
     */
    AIRMacts: string;
    /**
     * Major Flag
     * @description Indicated whether the facility is designated as a major facilitiy.
     * @since 0.0.0
     */
    AIRMajorFlag: string;
    /**
     * Months with HPV
     * @description The number of months in the last three years in which the permit or site is considered in High Priority Violation (HPV) status
     * @since 0.0.0
     */
    AIRMnthsWithHpv: string;
    /**
     * NAICS Codes
     * @description The facility’s or permit's primary North American Industry Classification System (NAICS) Code.
     * @since 0.0.0
     */
    AIRNAICS: string;
    /**
     * Air Facility Name
     * @description The name of the AIR Facility.
     * @since 0.0.0
     */
    AIRName: string;
    /**
     * NSPS Subpart
     * @description The New Source Performance Standards (NSPS) Subpart associated with the facility.
     * @since 0.0.0
     */
    AIRNsps: string;
    /**
     * NSPS Subpart (Non-Major)
     * @description The Non-Major New Source Performance Standards (NSPS) Subpart associated with the facility.
     * @since 0.0.0
     */
    AIRNspsm: string;
    /**
     * Penalties
     * @description The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Air Act. This value only includes penalties that have been entered in the national program database, ICIS-Air.
     * @since 0.0.0
     */
    AIRPenalties: string;
    /**
     * Pollutants with Recent Violation
     * @description The names of pollutants or pollutant categories with violations reported in the last year.
     * @since 0.0.0
     */
    AIRPollRecentViol: string;
    /**
     * Air Programs
     * @description Comma-delimited list of AIR programs.
     * @since 0.0.0
     */
    AIRPrograms: string;
    /**
     * Quarters with HPV
     * @description The number of quarters in the last three years in which the permit or site is considered in High Priority Violation (HPV) status.
     * @since 0.0.0
     */
    AIRQtrsWithHpv: string;
    /**
     * Quarters with Violation Reported
     * @description The number of quarters in the last three years in which the permit or site has had unresolved violation(s) reported.
     * @since 0.0.0
     */
    AIRQtrsWithViol: string;
    /**
     * Recent Violation Count
     * @description The number of violations reported in the last year.
     * @since 0.0.0
     */
    AIRRecentViolCnt: string;
    /**
     * AIR Facility State
     * @description The state where the AIR facility is located.
     * @since 0.0.0
     */
    AIRState: string;
    /**
     * Air Facility Status
     * @description The status of the AIR facility location.
     * @since 0.0.0
     */
    AIRStatus: string;
    /**
     * AIR Facility Street Address
     * @description The street address of the AIR facility location.
     * @since 0.0.0
     */
    AIRStreet: string;
    /**
     * Tribal EPA IDs
     * @description The EPA Tribal or Native Alaskan Village Identifier for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
     * @since 0.0.0
     */
    AIRTRIbalEPAids: string;
    /**
     * Tribal Names
     * @description The EPA Tribal or Native Alaskan Village Name for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
     * @since 0.0.0
     */
    AIRTRIbalNames: string;
    /**
     * AIR Universe
     * @description The program office defines each CAA Source ID and the associated permits as being Federally Reportable or Non-Federally Reportable. Under the CAA, federally reportable source include majors, synthetic minors, NESHAP Part 61 minors, minors with an unresolved High Priority Violation (HPV), with recent enforcement action, or included on a Compliance Monitoring Strategy plan.
     * @since 0.0.0
     */
    AIRUniverse: string;
    /**
     * AIR Facility Zip Code
     * @description The five-digit zip code of the AIR facility.
     * @since 0.0.0
     */
    AIRZip: string;
    /**
     * @description A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
     * @since 0.0.0
     */
    ActiveLower48: string;
    /**
     * CWA IDs
     * @description A unique  ID assigned for each record/permit/site/facility within ICIS-NPDES. These identifiers are for used tracking purposes in the individual data systems.
     * @since 0.0.0
     */
    CWAIDs: string;
    /**
     * Calculated Accuracy in Meters
     * @description The estimated accuracy in Meters for the facility's geospatial coordinate.
     * @since 0.0.0
     */
    CalculatedAccuracyMeters: string;
    /**
     * Clean Air Markets Division Identifiers
     * @description Facility identifiers for the Clean Air Markets Division database.
     * @since 0.0.0
     */
    CamdIDs: string;
    /**
     * Census Block Group
     * @description A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
     * @since 0.0.0
     */
    CensusBlockGroup: string;
    /**
     * Chesapeake Bay Flag
     * @description Displays "Y" if the facility is located within the Chesapeake Bay watershed.
     * @since 0.0.0
     */
    ChesapeakeBayFlag: string;
    /**
     * Collection Method
     * @description ??
     * @since 0.0.0
     */
    CollectionMethod: string;
    /**
     * Current Significant Violation Flag
     * @description Indicates if the facility has a current significant violation. 1 = Yes
     * @since 0.0.0
     */
    CurrSvFlag: string;
    /**
     * Current Violation Flag
     * @description Indicates if the facility has a current violation. 1 = Yes
     * @since 0.0.0
     */
    CurrVioFlag: string;
    /**
     * EPA Data System
     * @description The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report:
     *
     * - AFS: Air Facility System for Clean Air Act stationary source programs.
     * - ICP: Integrated Compliance Information System for Clean Water Act programs monitoring National Pollutant Discharge Elimination System (NPDES) permits.
     * - RCR: Resource Conservation and Recovery Act Information System (RCRAInfo) for tracking the Resource Conservation and Recovery Act (RCRA) programs.
     * - NCDB: National Compliance Database System for monitoring national performance of the Toxic Substance Control Act (TSCA); the Emergency Planning and Right-to-Know Act, Section 313 (EPCRA); the Asbestos Hazard Emergency Response (AHERA); and the Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA).
     * - TRI: Toxics Release Inventory for Emergency Planning and Community Right-to-Know Act, Section 313 submissions.
     * - NEI: National Emissions Inventory database contains information on stationary and mobile sources that emit criteria air pollutants and their precursors, as well as hazardous air pollutants (HAPs). The database includes estimates of annual emissions, by source, of air pollutants in each area of the country, on an annual basis.
     * - TSCA: Toxic Substances Control Act addressing the production, importation, use, and disposal of specific chemicals.
     * @since 0.0.0
     */
    EPASystem: string;
    /**
     * @description Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
     * @since 0.0.0
     */
    Ea5yrFlag: string;
    /**
     * EIS IDs
     * @description A unique ID assigned for each facility within EPA’s Emissions Inventory System (EIS) Database.
     * @since 0.0.0
     */
    EisIDs: string;
    /**
     * EJ Screen Flag
     * @description A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
     * @since 0.0.0
     */
    EjscreenFlag: string;
    /**
     * EJ Screen Flag (US)
     * @description A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
     * @since 0.0.0
     */
    EjscreenFlagUs: string;
    /**
     * CAMD Reporter
     * @description Indicates whether the facility reports to the Clean Air Markets Division (CAMD).
     * @since 0.0.0
     */
    FacCamdReporter: string;
    /**
     * FRS Facility County Name
     * @description The facility county name from EPA's Facility Registry System
     * @since 0.0.0
     */
    FacCountyName: string;
    /**
     * Watershed (HUC Code)
     * @description The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
     * @since 0.0.0
     */
    FacDerivedHuc: string;
    /**
     * FRS Spatially Derived Tribe
     * @description The tribes or tribal territories located within 25 miles of the facility's location.
     * @since 0.0.0
     */
    FacDerivedTRIbes: string;
    /**
     * 12-Digit WBD HUC
     * @description The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
     * @since 0.0.0
     */
    FacDerivedWBD: string;
    /**
     * FRS Derived Watershed Boundary Dataset (WBD) Name
     * @description The 12 digit Watershed Boundary Dataset Name derived from the FRS Best Pick Coordinate
     * @since 0.0.0
     */
    FacDerivedWBDName: string;
    /**
     * EIS Releases
     * @description The amount of hazardous air pollutants released to air in tons per year, as reported in the most recent National Emissions Inventory (NEI).
     * @since 0.0.0
     */
    FacEisAIRReleases: string;
    /**
     * EIS Reporter
     * @description Indicates whether the facility reports to the Emissions Inventory System (EIS).
     * @since 0.0.0
     */
    FacEisReporter: string;
    /**
     * FIPS Code
     * @description The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
     * @since 0.0.0
     */
    FacFIPSCode: string;
    /**
     * Facility Federal Agency Code
     * @description Indicates the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government. The five-character code consists of a letter followed by four numbers. There are four possible letters that can occupy the first character position: C = Civilian Federal Agency; D = Department of Defense; E = Department of Energy; X = Unknown. The second and third characters represent the agency code, while the fourth and fifth characters represent the bureau code.
     * @since 0.0.0
     */
    FacFederalAgencyCode: string;
    /**
     * Federal Agency Name
     * @description Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
     * @since 0.0.0
     */
    FacFederalAgencyName: string;
    /**
     * GHG CO2 Releases
     * @description The annual sum of total release amounts and "associated quantities" of all linked Greenhouse Gas IDs from the Office of Air and Radiation "Summary 2010 Greenhouse Gas Data." Units are reported as metric tons of CO2 equivalents per year (MTCO2e/year).
     * @since 0.0.0
     */
    FacGHGCO2Releases: string;
    /**
     * GHG Reporter
     * @description Indicates whether the facility reports to the Greenhouse Gas Reporting Program (GHGRP)
     * @since 0.0.0
     */
    FacGHGReporter: string;
    /**
     * Facility Indian Country Flag
     * @description Flag showing Y/N whether the facility is located in Indian Country.
     * @since 0.0.0
     */
    FacIndianCntryFlg: string;
    /**
     * Indian Spatial Flag
     * @description Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
     * @since 0.0.0
     */
    FacIndianSpatialFlg: string;
    /**
     * Latitude
     * @description The latitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
     * @since 0.0.0
     */
    FacLat: string;
    /**
     * Longitude
     * @description The longitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
     * @since 0.0.0
     */
    FacLong: string;
    /**
     * Facility Mapped Flag
     * @description Graphical indicator denoting whether geographical data required to map a facility are available.
     * @since 0.0.0
     */
    FacMapFlg: string;
    /**
     * Facility Map Icon
     * @description The default map icon image file calculated for the facility by the ECHO program.
     * @since 0.0.0
     */
    FacMapIcon: string;
    /**
     * NAA Flag
     * @description Indicates whether the facility is located in a nonattainment area of the country, where air pollution levels persistently exceed the national ambient air quality standards. This flag does not indicate whether or not the facility has violated national ambient area quality standards.
     * @since 0.0.0
     */
    FacNaaFlag: string;
    /**
     * Facility Percent Minority
     * @description Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
     * @since 0.0.0
     */
    FacPercentMinority: string;
    /**
     * Population Density
     * @description The number of persons per square mile in the profiled area.
     * @since 0.0.0
     */
    FacPopulationDensity: string;
    /**
     * SIC Codes
     * @description Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
     * @since 0.0.0
     */
    FacSICCodes: string;
    /**
     * FRS Standardized Facility County Name
     * @description The standardized  facility county name from EPA's Facility Registry System
     * @since 0.0.0
     */
    FacStdCountyName: string;
    /**
     * TRI Releases
     * @description The total chemical releases to air, in pounds, as reported to TRI by the facility for the most recent reporting year.
     * @since 0.0.0
     */
    FacTRIAIRReleases: string;
    /**
     * TRI Carcinogen Releases
     * @description The pounds of chemicals considered to be carcinogens released to air, as reported to TRI for the most recent reporting year. Chemicals are classified as carcinogens under the requirements of the Occupational Safety and Health Administration (OSHA).
     * @since 0.0.0
     */
    FacTRICarcAIRReleases: string;
    /**
     * TRI HAPS Releases
     * @description The pounds of chemicals classified as hazardous air pollutants (HAPS) released to air in pounds per year, as reported to TRI for the most recent reporting year.
     * @since 0.0.0
     */
    FacTRIHapsReleases: string;
    /**
     * Facility TRI Reporter
     * @description Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
     * @since 0.0.0
     */
    FacTRIReporter: string;
    /**
     * Near US-Mexico Border
     * @description A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
     * @since 0.0.0
     */
    FacUsMexBorderFlg: string;
    /**
     * GHG IDs
     * @description A unique ID assigned for each facility within EPA’s Greenhouse Gas Reporting Program (GHGRP) Emissions Data Sets.
     * @since 0.0.0
     */
    GHGIDs: string;
    /**
     * @description ???
     * @since 0.0.0
     */
    HasPollRpt: string;
    /**
     * @description Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
     * @since 0.0.0
     */
    Infea5yrFlag: string;
    /**
     * Inspected Within Last Five Years Flag
     * @description Indicates if the facility has an inspection within the last 5 years. 1 = Yes
     * @since 0.0.0
     */
    Insp5yrFlag: string;
    /**
     * Date of Last Partial Compliance Evaluation
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA or a state agency was completed.
     * @since 0.0.0
     */
    LastDatePce: string;
    /**
     * Date of Last Partial Compliance Evaluation by EPA
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA was completed.
     * @since 0.0.0
     */
    LastDatePceEPA: string;
    /**
     * Date of Last Partial Compliance Evaluation by State
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by a state agency was completed.
     * @since 0.0.0
     */
    LastDatePceSta: string;
    /**
     * Local Control Region Code
     * @description Code for regions within a state. Search criteria for DFR in OTIS.
     * @since 0.0.0
     */
    LocalControlRegionCode: string;
    /**
     * Local Control Region Name
     * @description Regions within a state. Search criteria for DFR in OTIS.
     * @since 0.0.0
     */
    LocalControlRegionName: string;
    /**
     * Contiguous United States Flag
     * @description Flag showing Y/N whether location is within the contiguous (lower 48) United States.
     * @since 0.0.0
     */
    Lower48: string;
    /**
     * Map
     * @description No Longer Used.
     * @since 0.0.0
     */
    Map: string;
    /**
     * @description The maximum percentile from all individual EJSCREEN indicators.
     * @since 0.0.0
     */
    MaxPctileUs: string;
    /**
     * Max Score
     * @description A sorting score for internal use.
     * @since 0.0.0
     */
    MaxScore: string;
    /**
     * NAA Categories
     * @description The nonattainment area categories that the facility is in, derived spatially based on the facility's geographic coordinates in FRS.
     * @since 0.0.0
     */
    NaaCategories: string;
    /**
     * NAA Pollutants
     * @description All criteria pollutants that the facility is in nonattainment for.
     * @since 0.0.0
     */
    NaaPollutants: string;
    /**
     * EJ Indexes Above 80th Percentile
     * @description The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
     * @since 0.0.0
     */
    Over80CountUs: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN NATA air toxics cancer risk indicator.
     * @since 0.0.0
     */
    PctileCancerUs: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN diesel particulate matter indicator.
     * @since 0.0.0
     */
    PctileDpmUs: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN ozone indicator.
     * @since 0.0.0
     */
    PctileO3Us: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN Lead paint indicator.
     * @since 0.0.0
     */
    PctilePctpre1960Us: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN particulate matter indicator.
     * @since 0.0.0
     */
    PctilePmUs: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to major direct water dischargers indicator.
     * @since 0.0.0
     */
    PctileProximityNPDESUs: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to National Priorities List (NPL) sites indicator.
     * @since 0.0.0
     */
    PctileProximityNplUs: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to Risk Management Plan (RMP) sites indicator.
     * @since 0.0.0
     */
    PctileProximityRmpUs: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to Treatment Storage and Disposal Facilities (TSDFs) indicator.
     * @since 0.0.0
     */
    PctileProximityTsdfUs: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN NATA respiratory hazard index indicator.
     * @since 0.0.0
     */
    PctileRespUs: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN Traffic proximity and volume indicator.
     * @since 0.0.0
     */
    PctileTrafficScoreUs: string;
    /**
     * Resource Conservation and Recovery Act IDs
     * @description A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
     * @since 0.0.0
     */
    RCRAIDs: string;
    /**
     * Reference Point
     * @description ??
     * @since 0.0.0
     */
    ReferencePoint: string;
    /**
     * FRS ID
     * @description An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
     * @since 0.0.0
     */
    RegistryID: string;
    /**
     * RMP IDs
     * @description A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
     * @since 0.0.0
     */
    RmpIDs: string;
    /**
     * @description A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
     * @since 0.0.0
     */
    SDWAIDs: string;
    /**
     * Score
     * @since 0.0.0
     */
    Score: string;
    /**
     * EPA Source Identifier
     * @description Unique Identifier assigned by EPA.
     * @since 0.0.0
     */
    SourceID: string;
    /**
     * Regulatory Statute
     * @description The name of the statute associated with each of the permits and identifiers linked to the facility:
     * - CAA = the Clean Air Act
     * - CWA = the Clean Water Act
     * - RCRA = the Resource Conservation and Recovery Act
     * - EP313 = the Emergency Planning and Community Right-to-Know Act, Section 313 (also known as the Toxics Release Inventory Program)
     * - TSCA = the Toxic Substances Control Act
     * - SDWA = the Safe Drinking Water Act
     * @since 0.0.0
     */
    Statute: string;
    /**
     * Toxics Release Inventory Program IDs
     * @description A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
     * @since 0.0.0
     */
    TRIIDs: string;
    /**
     * Tribal Lands Flag
     * @description A flag indicating that the facility is within a tribal area.
     * @since 0.0.0
     */
    TRIbalFlag: string;
    /**
     * Violation Flag
     * @description Indicates if the facility had a violation within the last 3 years. 1 = Yes
     * @since 0.0.0
     */
    ViolFlag: string;
    /**
     * Web Documents
     * @description Contains flags that identify what web accessible documents are available for the facility.
     * @since 0.0.0
     */
    WebDocs: string;
}
