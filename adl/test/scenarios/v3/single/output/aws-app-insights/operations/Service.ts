export interface Service {
    /**
     * @description Adds an application that is created from a resource group.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.CreateApplication
     * @return 200 - Success
     * @return 480 - ResourceInUseException
     * @return 481 - ResourceNotFoundException
     * @return 482 - ValidationException
     * @return 483 - InternalServerException
     * @return 484 - TagsAlreadyExistException
     */
    CreateApplication(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.CreateApplication", 'X-Amz-Target'>, body: Http.Body<CreateApplicationRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'> | Http.Response<'483', [object, Object], 'application/json'> | Http.Response<'484', [object, Object], 'application/json'>;
    /**
     * @description Creates a custom component by grouping similar standalone instances to monitor.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.CreateComponent
     * @return 200 - Success
     * @return 480 - ResourceInUseException
     * @return 481 - ResourceNotFoundException
     * @return 482 - ValidationException
     * @return 483 - InternalServerException
     */
    CreateComponent(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.CreateComponent", 'X-Amz-Target'>, body: Http.Body<CreateComponentRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'> | Http.Response<'483', [object, Object], 'application/json'>;
    /**
     * @description Adds an log pattern to a <code>LogPatternSet</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern
     * @return 200 - Success
     * @return 480 - ResourceInUseException
     * @return 481 - ResourceNotFoundException
     * @return 482 - ValidationException
     * @return 483 - InternalServerException
     */
    CreateLogPattern(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.CreateLogPattern", 'X-Amz-Target'>, body: Http.Body<CreateLogPatternRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'> | Http.Response<'483', [object, Object], 'application/json'>;
    /**
     * @description Removes the specified application from monitoring. Does not delete the application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - BadRequestException
     * @return 483 - InternalServerException
     */
    DeleteApplication(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DeleteApplication", 'X-Amz-Target'>, body: Http.Body<DeleteApplicationRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'> | Http.Response<'483', [object, Object], 'application/json'>;
    /**
     * @description Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - InternalServerException
     */
    DeleteComponent(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DeleteComponent", 'X-Amz-Target'>, body: Http.Body<DeleteComponentRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Removes the specified log pattern from a <code>LogPatternSet</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - BadRequestException
     * @return 483 - InternalServerException
     */
    DeleteLogPattern(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DeleteLogPattern", 'X-Amz-Target'>, body: Http.Body<DeleteLogPatternRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'> | Http.Response<'483', [object, Object], 'application/json'>;
    /**
     * @description Describes the application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - InternalServerException
     */
    DescribeApplication(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeApplication", 'X-Amz-Target'>, body: Http.Body<DescribeApplicationRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Describes a component and lists the resources that are grouped together in a component.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - InternalServerException
     */
    DescribeComponent(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeComponent", 'X-Amz-Target'>, body: Http.Body<DescribeComponentRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Describes the monitoring configuration of the component.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - InternalServerException
     */
    DescribeComponentConfiguration(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeComponentConfiguration", 'X-Amz-Target'>, body: Http.Body<DescribeComponentConfigurationRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Describes the recommended monitoring configuration of the component.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - InternalServerException
     */
    DescribeComponentConfigurationRecommendation(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation", 'X-Amz-Target'>, body: Http.Body<DescribeComponentConfigurationRecommendationRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Describe a specific log pattern from a <code>LogPatternSet</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - InternalServerException
     */
    DescribeLogPattern(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeLogPattern", 'X-Amz-Target'>, body: Http.Body<DescribeLogPatternRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Describes an anomaly or error with the application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation
     * @return 200 - Success
     * @return 480 - InternalServerException
     * @return 481 - ValidationException
     * @return 482 - ResourceNotFoundException
     */
    DescribeObservation(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeObservation", 'X-Amz-Target'>, body: Http.Body<DescribeObservationRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Describes an application problem.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem
     * @return 200 - Success
     * @return 480 - InternalServerException
     * @return 481 - ValidationException
     * @return 482 - ResourceNotFoundException
     */
    DescribeProblem(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeProblem", 'X-Amz-Target'>, body: Http.Body<DescribeProblemRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Describes the anomalies or errors associated with the problem.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations
     * @return 200 - Success
     * @return 480 - InternalServerException
     * @return 481 - ValidationException
     * @return 482 - ResourceNotFoundException
     */
    DescribeProblemObservations(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeProblemObservations", 'X-Amz-Target'>, body: Http.Body<DescribeProblemObservationsRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Lists the IDs of the applications that you are monitoring.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListApplications
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200 - Success
     * @return 480 - ValidationException
     * @return 481 - InternalServerException
     */
    ListApplications(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListApplications", 'X-Amz-Target'>, body: Http.Body<ListApplicationsRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'>;
    /**
     * @description Lists the auto-grouped, standalone, and custom components of the application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListComponents
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - InternalServerException
     */
    ListComponents(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListComponents", 'X-Amz-Target'>, body: Http.Body<ListComponentsRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200 - Success
     * @return 480 - ValidationException
     * @return 481 - ResourceNotFoundException
     * @return 482 - InternalServerException
     */
    ListConfigurationHistory(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListConfigurationHistory", 'X-Amz-Target'>, body: Http.Body<ListConfigurationHistoryRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Lists the log pattern sets in the specific application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - InternalServerException
     */
    ListLogPatternSets(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListLogPatternSets", 'X-Amz-Target'>, body: Http.Body<ListLogPatternSetsRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Lists the log patterns in the specific log <code>LogPatternSet</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - InternalServerException
     */
    ListLogPatterns(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListLogPatterns", 'X-Amz-Target'>, body: Http.Body<ListLogPatternsRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Lists the problems with your application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListProblems
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200 - Success
     * @return 480 - ValidationException
     * @return 481 - ResourceNotFoundException
     * @return 482 - InternalServerException
     */
    ListProblems(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListProblems", 'X-Amz-Target'>, body: Http.Body<ListProblemsRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     */
    ListTagsForResource(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListTagsForResource", 'X-Amz-Target'>, body: Http.Body<ListTagsForResourceRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'>;
    /**
     * @description <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.TagResource
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - TooManyTagsException
     * @return 482 - ValidationException
     */
    TagResource(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.TagResource", 'X-Amz-Target'>, body: Http.Body<TagResourceRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Remove one or more tags (keys and values) from a specified application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UntagResource
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     */
    UntagResource(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.UntagResource", 'X-Amz-Target'>, body: Http.Body<UntagResourceRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'>;
    /**
     * @description Updates the application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication
     * @return 200 - Success
     * @return 480 - InternalServerException
     * @return 481 - ResourceNotFoundException
     * @return 482 - ValidationException
     */
    UpdateApplication(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.UpdateApplication", 'X-Amz-Target'>, body: Http.Body<UpdateApplicationRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Updates the custom component name and/or the list of resources that make up the component.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent
     * @return 200 - Success
     * @return 480 - ResourceInUseException
     * @return 481 - ResourceNotFoundException
     * @return 482 - ValidationException
     * @return 483 - InternalServerException
     */
    UpdateComponent(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.UpdateComponent", 'X-Amz-Target'>, body: Http.Body<UpdateComponentRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'> | Http.Response<'483', [object, Object], 'application/json'>;
    /**
     * @description Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration
     * @return 200 - Success
     * @return 480 - ResourceNotFoundException
     * @return 481 - ValidationException
     * @return 482 - InternalServerException
     */
    UpdateComponentConfiguration(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.UpdateComponentConfiguration", 'X-Amz-Target'>, body: Http.Body<UpdateComponentConfigurationRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'>;
    /**
     * @description Adds a log pattern to a <code>LogPatternSet</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern
     * @return 200 - Success
     * @return 480 - ResourceInUseException
     * @return 481 - ResourceNotFoundException
     * @return 482 - ValidationException
     * @return 483 - InternalServerException
     */
    UpdateLogPattern(X_Amz_Content_Sha256?: Http.Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Http.Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Http.Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Http.Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Http.Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Http.Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.UpdateLogPattern", 'X-Amz-Target'>, body: Http.Body<UpdateLogPatternRequest, 'application/json'>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<'480', [object, Object], 'application/json'> | Http.Response<'481', [object, Object], 'application/json'> | Http.Response<'482', [object, Object], 'application/json'> | Http.Response<'483', [object, Object], 'application/json'>;
}
