# Azure/Perks

This repository contains common reusable libraries and tools that has been accumulating in some node.js open source projects.  

Instead of having one project publish things tangentially to it's core mission, we're migrating that code here.

### Libraries 

#### console
Adds support to make consistent command line developer tools.
- uses `yargs` for command line parsing
- uses `markedTerminal` (and monkey-patches `console.*` functions to provide full console-rendered markdown support in tools)



----

# Contributing

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
