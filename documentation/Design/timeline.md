# Proposed Timeline: 

### Completed
  - Abstract Model clearly defined 
  - OAI2, OAI3 input deserialization     
  - Sourcemap API 
  - extension framework support

### Jun 17
  - TS serialization (able to save ADL model/enums/aliases/operations)
  - Hook up eventing for language extensions, linting/refactoring hooks
  
### Jun 26
  - project metadata (`project.adl` )
  - simple CLI functions
  - extension loading from project, 
  - TS Project loading (data from project file, generate tsconfig, restore packages)
  
### Jul 3 
  - ALPHA ADL Consumer API (load/save/manipulate models, eventing)

### Jul 17
  - OAI2, OAI3 output serialization 
  - CSDL investigations (design to support MS Graph/ASPNET+OData?)

### Jul 31
  - BETA ADL consumer API complete
  - TS + C# bindings


## Nelson Timeline:

Improve the authoring and reviewing experience of ADL by designing and developing:
- Support for creating and executing linting rules and auto-fixers.
- Visual Studio Code extension that provides diagnostics, navigation, refactoring and intellisense.

### June 5th. Investigation
- Experiment with Visual Studio Code language server.
- Identify language server features.
- Design ADL linting service, rules and extensibility (e.g. ARM, Azure rules) .
### June 19th. Engine Internals
- ADL basic linting engine internal functional.
- Implement a set of 20 linting rules encapsulated in ADL extension.
### June 26th. Implement a Github template repository for rules creation.
### July 10th. VS Code extension support for ADL rule engine.  At this point it should show errors inline and do fixes.
### July 24th. Advanced features (e.g. navigation, refactoring, intellisense)
### August 7th.
- Fully integrated linting (i.e. API Wide)
- Extension complete with navigation, intellisense, error checking and refactoring.
