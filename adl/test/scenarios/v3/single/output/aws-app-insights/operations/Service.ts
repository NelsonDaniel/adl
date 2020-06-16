export interface Service {
    /**
     * @description Adds an application that is created from a resource group.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.CreateApplication
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceInUseException
     * @return 481|application/json - ResourceNotFoundException
     * @return 482|application/json - ValidationException
     * @return 483|application/json - InternalServerException
     * @return 484|application/json - TagsAlreadyExistException
     */
    CreateApplication(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.CreateApplication", 'X-Amz-Target'>, body: Body<CreateApplicationRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: CreateApplicationResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 483, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 484, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Creates a custom component by grouping similar standalone instances to monitor.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.CreateComponent
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceInUseException
     * @return 481|application/json - ResourceNotFoundException
     * @return 482|application/json - ValidationException
     * @return 483|application/json - InternalServerException
     */
    CreateComponent(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.CreateComponent", 'X-Amz-Target'>, body: Body<CreateComponentRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: CreateComponentResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 483, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Adds an log pattern to a <code>LogPatternSet</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceInUseException
     * @return 481|application/json - ResourceNotFoundException
     * @return 482|application/json - ValidationException
     * @return 483|application/json - InternalServerException
     */
    CreateLogPattern(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.CreateLogPattern", 'X-Amz-Target'>, body: Body<CreateLogPatternRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: CreateLogPatternResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 483, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Removes the specified application from monitoring. Does not delete the application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - BadRequestException
     * @return 483|application/json - InternalServerException
     */
    DeleteApplication(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.DeleteApplication", 'X-Amz-Target'>, body: Body<DeleteApplicationRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DeleteApplicationResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 483, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - InternalServerException
     */
    DeleteComponent(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.DeleteComponent", 'X-Amz-Target'>, body: Body<DeleteComponentRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DeleteComponentResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Removes the specified log pattern from a <code>LogPatternSet</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - BadRequestException
     * @return 483|application/json - InternalServerException
     */
    DeleteLogPattern(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.DeleteLogPattern", 'X-Amz-Target'>, body: Body<DeleteLogPatternRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DeleteLogPatternResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 483, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Describes the application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - InternalServerException
     */
    DescribeApplication(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.DescribeApplication", 'X-Amz-Target'>, body: Body<DescribeApplicationRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DescribeApplicationResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Describes a component and lists the resources that are grouped together in a component.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - InternalServerException
     */
    DescribeComponent(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.DescribeComponent", 'X-Amz-Target'>, body: Body<DescribeComponentRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DescribeComponentResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Describes the monitoring configuration of the component.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - InternalServerException
     */
    DescribeComponentConfiguration(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.DescribeComponentConfiguration", 'X-Amz-Target'>, body: Body<DescribeComponentConfigurationRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DescribeComponentConfigurationResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Describes the recommended monitoring configuration of the component.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - InternalServerException
     */
    DescribeComponentConfigurationRecommendation(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation", 'X-Amz-Target'>, body: Body<DescribeComponentConfigurationRecommendationRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DescribeComponentConfigurationRecommendationResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Describe a specific log pattern from a <code>LogPatternSet</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - InternalServerException
     */
    DescribeLogPattern(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.DescribeLogPattern", 'X-Amz-Target'>, body: Body<DescribeLogPatternRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DescribeLogPatternResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Describes an anomaly or error with the application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation
     * @return 200|application/json - Success
     * @return 480|application/json - InternalServerException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - ResourceNotFoundException
     */
    DescribeObservation(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.DescribeObservation", 'X-Amz-Target'>, body: Body<DescribeObservationRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DescribeObservationResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Describes an application problem.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem
     * @return 200|application/json - Success
     * @return 480|application/json - InternalServerException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - ResourceNotFoundException
     */
    DescribeProblem(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.DescribeProblem", 'X-Amz-Target'>, body: Body<DescribeProblemRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DescribeProblemResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Describes the anomalies or errors associated with the problem.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations
     * @return 200|application/json - Success
     * @return 480|application/json - InternalServerException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - ResourceNotFoundException
     */
    DescribeProblemObservations(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.DescribeProblemObservations", 'X-Amz-Target'>, body: Body<DescribeProblemObservationsRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: DescribeProblemObservationsResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Lists the IDs of the applications that you are monitoring.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListApplications
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200|application/json - Success
     * @return 480|application/json - ValidationException
     * @return 481|application/json - InternalServerException
     */
    ListApplications(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Query<string>, NextToken?: Query<string>, X_Amz_Target: Header<"EC2WindowsBarleyService.ListApplications", 'X-Amz-Target'>, body: Body<ListApplicationsRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: ListApplicationsResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Lists the auto-grouped, standalone, and custom components of the application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListComponents
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - InternalServerException
     */
    ListComponents(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Query<string>, NextToken?: Query<string>, X_Amz_Target: Header<"EC2WindowsBarleyService.ListComponents", 'X-Amz-Target'>, body: Body<ListComponentsRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: ListComponentsResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200|application/json - Success
     * @return 480|application/json - ValidationException
     * @return 481|application/json - ResourceNotFoundException
     * @return 482|application/json - InternalServerException
     */
    ListConfigurationHistory(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Query<string>, NextToken?: Query<string>, X_Amz_Target: Header<"EC2WindowsBarleyService.ListConfigurationHistory", 'X-Amz-Target'>, body: Body<ListConfigurationHistoryRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: ListConfigurationHistoryResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Lists the log pattern sets in the specific application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - InternalServerException
     */
    ListLogPatternSets(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Query<string>, NextToken?: Query<string>, X_Amz_Target: Header<"EC2WindowsBarleyService.ListLogPatternSets", 'X-Amz-Target'>, body: Body<ListLogPatternSetsRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: ListLogPatternSetsResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Lists the log patterns in the specific log <code>LogPatternSet</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - InternalServerException
     */
    ListLogPatterns(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Query<string>, NextToken?: Query<string>, X_Amz_Target: Header<"EC2WindowsBarleyService.ListLogPatterns", 'X-Amz-Target'>, body: Body<ListLogPatternsRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: ListLogPatternsResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Lists the problems with your application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListProblems
     * @param MaxResults - Pagination limit
     * @param NextToken - Pagination token
     * @return 200|application/json - Success
     * @return 480|application/json - ValidationException
     * @return 481|application/json - ResourceNotFoundException
     * @return 482|application/json - InternalServerException
     */
    ListProblems(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Query<string>, NextToken?: Query<string>, X_Amz_Target: Header<"EC2WindowsBarleyService.ListProblems", 'X-Amz-Target'>, body: Body<ListProblemsRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: ListProblemsResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     */
    ListTagsForResource(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.ListTagsForResource", 'X-Amz-Target'>, body: Body<ListTagsForResourceRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: ListTagsForResourceResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.TagResource
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - TooManyTagsException
     * @return 482|application/json - ValidationException
     */
    TagResource(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.TagResource", 'X-Amz-Target'>, body: Body<TagResourceRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: TagResourceResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Remove one or more tags (keys and values) from a specified application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UntagResource
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     */
    UntagResource(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.UntagResource", 'X-Amz-Target'>, body: Body<UntagResourceRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: UntagResourceResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Updates the application.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication
     * @return 200|application/json - Success
     * @return 480|application/json - InternalServerException
     * @return 481|application/json - ResourceNotFoundException
     * @return 482|application/json - ValidationException
     */
    UpdateApplication(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.UpdateApplication", 'X-Amz-Target'>, body: Body<UpdateApplicationRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: UpdateApplicationResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Updates the custom component name and/or the list of resources that make up the component.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceInUseException
     * @return 481|application/json - ResourceNotFoundException
     * @return 482|application/json - ValidationException
     * @return 483|application/json - InternalServerException
     */
    UpdateComponent(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.UpdateComponent", 'X-Amz-Target'>, body: Body<UpdateComponentRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: UpdateComponentResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 483, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceNotFoundException
     * @return 481|application/json - ValidationException
     * @return 482|application/json - InternalServerException
     */
    UpdateComponentConfiguration(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.UpdateComponentConfiguration", 'X-Amz-Target'>, body: Body<UpdateComponentConfigurationRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: UpdateComponentConfigurationResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
    /**
     * @description Adds a log pattern to a <code>LogPatternSet</code>.
     * @since 2018-11-25
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern
     * @return 200|application/json - Success
     * @return 480|application/json - ResourceInUseException
     * @return 481|application/json - ResourceNotFoundException
     * @return 482|application/json - ValidationException
     * @return 483|application/json - InternalServerException
     */
    UpdateLogPattern(X_Amz_Content_Sha256?: Header<string, 'X-Amz-Content-Sha256'>, X_Amz_Date?: Header<string, 'X-Amz-Date'>, X_Amz_Algorithm?: Header<string, 'X-Amz-Algorithm'>, X_Amz_Credential?: Header<string, 'X-Amz-Credential'>, X_Amz_Security_Token?: Header<string, 'X-Amz-Security-Token'>, X_Amz_Signature?: Header<string, 'X-Amz-Signature'>, X_Amz_SignedHeaders?: Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Header<"EC2WindowsBarleyService.UpdateLogPattern", 'X-Amz-Target'>, body: Body<UpdateLogPatternRequest, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: UpdateLogPatternResponse;
    }, (code: 480, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 481, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 482, mediaType: "application/json") => {
        body: any;
        isException: true;
    }, (code: 483, mediaType: "application/json") => {
        body: any;
        isException: true;
    }];
}
