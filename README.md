# Cypress-CI-CD-Pipeline

Mini project end to end automation testing on web https://magento.softwaretestingboard.com, with implementation Continous Integration on Github Action.

## Setup and Installation

#### Download and Install NodeJS 
- Node.js: Cypress requires Node.js, so make sure you have it installed on your system. You can download Node.js from the official website: https://nodejs.org/


#### Install Cypress in your project:
```bash
  npm install cypress --save-dev
```

#### After the installation, open Cypress
```bash
  npx cypress open
```
- Cypress will launch its test runner in interactive mode, and you can running tests right away.
- After following the prompts until the cypress setup is finished

#### Install Xpath Plugin
```bash
  npm install -D cypress-xpath
```

## Running Tests
Cypress automatically finds your tests located in the cypress/e2e directory and running headless on electron browser (default cypress). To run the tests, use the following command:

```bash
  npx cypress run
```

