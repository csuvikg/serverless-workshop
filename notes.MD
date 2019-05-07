Caveats:
 - VPC not supported out of the box?

 ## Security
  - AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY available in Lambda context
  - Puresec's FunctionShield can be used

AWS Lambda:
 - Uses AMIs
 - Not docker, optimized for cost, better at cost than other platforms
 - Concurrency is an important metric

 ## Creating a function:
 - There are supported languages, but Node.js is by far the most popular - it has the best price (other languages take more time to start, classload, etc - costs money)
 - Custom runtime is supported, requires setting up things, there are custom runtimes on the internet as well (like for cpp, haskell, etc)
 - Permissions - default is to write CloudWatch logs
 - Functions has allocated memory and proportional CPU, also proportional price. More than a certain size -> second core.
 - Short timeout is expected
 - VPC can be selected
 - Debugging -> sending a payload after max retries to SNS/SQS
 - Reserve concurrency - maximum number of concurrent executions for the current function
 - ENV variables can be provided, like API keys
 - Tagging is supported (like for almost all AWS resources), should be used, like tagging the team
 - Layers can be added
 - Qualifier out of the box: $LATEST
 - Publishing by version is possible, multuple versions will be available, can be named, aliased, can also set to use certain weights serving different versions (like 10% from new version, etc.) CodeDeploy can be integrated to manage deploys
 - Should utilize permissions, as compromised functions can have very wide permissions

## Code
 - std out is captured in logs automatically

## Monitoring
 - Functions' monitoring tab provides metrics out of the box
 - Also available in CloudWatch
 - Usually these logs are forwarded to another function

 ## Serverless framework
 - cli tool, sls create, sls deploy...
 - npm install -g serverless
 - sls create --template aws-nodejs --path my-service
 - sls invoke -f hello
 - sls invoke local -f hello
 - sls invoke local -f hello -d {data}
 - Breakpoint debugging is available
 - Logs: sls logs -f hello
 - serverless offline plugin makes it possible to run it locally

 ## How to organize code?
 - Monolithic repository? Possible, but not advised
 - Microservices are preferred - multiple handler files for example in multiple repositories
    - Neo4j, GrapheneDB

## Deployment
 - Can have profiles/environments and regions, etc defined in the command to be able to operate the CD

## Cleanup
 - sns remove - deletes all project resources

## Testing
 - Lambda functions are just methods, can be tested as such as unit testing
 - Traditional testing does not hold: many unit test cannot catch the configuration errors that the reaising number of cuntions pose
 - Integration should be tested just as much
 - Instead of test pyramid -> test honeycomb: https://spotifylabscom.files.wordpress.com/2018/02/microservices-testing-honeycomb-2.png