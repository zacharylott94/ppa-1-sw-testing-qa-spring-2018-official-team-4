# ppa-sw-testing-qa-spring-2018-official-team-4
Welcome to Software Testing Team 4 Repo 

[![Coverage Status](https://coveralls.io/repos/github/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4/badge.svg)](https://coveralls.io/github/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4)
[![Build Status](https://travis-ci.org/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4.svg?branch=master)](https://travis-ci.org/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4)

### PPA-1 Team Members
* [Will Lee](https://github.com/henryjr1)
* [Damon Stamps](https://github.com/DStampsJr)
* [Jacob Stewart](https://github.com/JacobStewart20)
* [Zach Lott](https://github.com/zkl6)
* [Dillon Carley](https://github.com/Dilloncarley)

### PPA-2 Team Members
* [Will Lee](https://github.com/henryjr1)
* [Damon Stamps](https://github.com/DStampsJr)
* [Britt Faulkner](https://github.com/brittf)
* [Zach Lott](https://github.com/zkl6)
* [Dillon Carley](https://github.com/Dilloncarley)

## Table of Contents
- [Introduction](#introduction)
- [How To Get Started](#how-to-get-started)
- [Class Descriptions](#class-descriptions)
- [Programming Language](#programming-language)
- [Testing Framework](#testing-framework)

## Introduction
The Team 4 application tools will help users make simple decisions or calculations. Such as a BMI calculator, a retirement savings goal, shortest distance calculator, an email verifier, and splitting a dinner tab calulator. The application will be using the JavaScript language and Jest for testing.

## Live websites

 - [Production](https://production-dot-ppa2-app.appspot.com/)

 - [Staging](https://development-dot-ppa2-app.appspot.com/)

## How To Get Started
1. cd into a chosen directory and run `git clone https://github.com/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4.git `
2. Run `cd ppa-1-sw-testing-qa-spring-2018-official-team-4`
3. Run `npm install` to install dependencies
4. To start the command line application run `node app.js` to start the web interface run `node server.js`
5. To test the application, run `npm test`
6. To make the testing framework watch changes, run `npm test -- --watchAll`

## Testing Coverage
1. Run `npm test` to generate a coverage folder
2. To see output, run in command line or open lcov-report/index.html in a web browser

## Setup and Execution Instructions

### How to contribute
1. Clone this repo (see [How To Get Started](#how-to-get-started))
2. Make a new feature branch locally with naming scheme "f/(nameofyourbranch)
3. Add files, commit your changes and push to create your new branch on Github
4. Your feature will be reviewed and merged with Dev if accepted

### Using Travis CI
1. Make sure you have the `.travis.yml` file in your repo
2. If you are wanting a development build, push new changes into `dev` branch
3. If you are wanting a production build, push new changes into `master` branch
4. To see build output go here -> [Travis CI Builds for PPA-Team-4](https://travis-ci.org/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4)
5. Builds can also be restarted by clicking on 'Restart build' on the Travis Build page
6. Custom builds can also be triggered within Travis CI, just click on 'More options' then 'Trigger build'. 

The `.travis.yml` contains all logic for running a build. Which includes what branchs to build on, specific [Browserify](http://browserify.org/) commands to run on the Javascript and deployment pipelines to execute with taking in account the branch being pushed to. See [Customizing the Build](https://docs.travis-ci.com/user/customizing-the-build) for more information on using Travis CI

### Using Cypress
Cypress is an all-in-one end-to end testing tool used for this project. The steps to implement are as followed:
1.  Be sure to 'npm install' after pulling repository to install all modules for cypress.
2. Navigate to the main project directory.
3. Start your local server with the project you want to test.
4. Cypress can be run through the browser or headlessly.
5. To run through in the broswer, after your server has been started run 'npx cypress open' in your command line.
6. To run headlessly, run 'npx cypress run' in your command line.

Both through the browser and headlessly, Cypress will then display the test that were ran, and whether they passed or failed. The broswer version of Cypress will also implement a live and interactive preview of the app being tested.

### Basic Usage with Google Cloud Platform / Google App Engine
1. Ensure that you have the appropriate permissions to access the platform (ask [Dillon Carley](https://github.com/Dilloncarley) to request these permissions)
2. To run commands on your project: Click on the 'Activate Google Cloud Shell' button at the top of the page
   This shell has access to the project files and hosting commands see [Cloud Shell](https://cloud.google.com/shell/) for      more information.

### Accessing product versions on Google App Engine 
1. Make sure you are logged in with the correct permissions and go here -> [Google App Engine Versions](https://console.cloud.google.com/appengine/versions?project=ppa2-app&serviceId=default&versionssize=50)

This page will show active/non-active versions of the product. The production version that is being served is the site that will be theoretically served to the general public/customers, while the development version will only be accessed by developers and testers on the team. 

For more information on Google Cloud Platform go here -> [Google Cloud Platform](https://cloud.google.com/)

For more information on Google App Engine go here -> [Google App Engine](https://cloud.google.com/appengine/)


### Static Testing with JSHint
-	JSHint performs static analysis on JavaScript modules and prints a list of warning for potential defects.
-	JSHint runs before the Unit Tests, on Line 30 of .travis.yml
-	If any warnings are raised, the pipeline will fail the build.
-	Setup Instructions:
	1. Installation: Run `npm install --save jshint` in the main directory to install JSHint locally.

	2. Configuration: Set up rules for warnings in file .jshintrc file in main directory. Documentation for   		     rules found here: "http://jshint.com/docs/options/"

	3. Use: Run `jshint .` in a directory to analyze all modules within that directory and its sub-directories.

### Deploying the application
Pushing changes to the master branch will trigger the CI server, and changes will be reflected on the production website, if the build passes.
Pushing changes to the dev branch will trigger the CI server, and changes will be reflected on the development website, if the build passes.
Manually deploying the application is not required.

## Programming Language
We will be programming in JavaScript

## Testing Framework
We are using Jest as our testing framework. It contains a test runner and an assertion library.
## Report 
- https://github.com/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4/blob/master/Report/PPA%202%20Report.pdf

## Screencasts:


### PPA-2
1. Code commit initiates a build that passes - show CI Tool output
    - https://github.com/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4/blob/master/screencasts/Build_Test_Passed_Travis.mp4 done by [Dillon Carley](https://github.com/Dilloncarley)


2. Code commit that violates static analysis rule --> commit that fixes the rule
    - https://github.com/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4/blob/master/screencasts/Static%20Analysis%20Screencast.mp4 done by [Britt Faulkner](https://github.com/brittf)


3. Code commit that fails a unit test --> commit that fixes code to pass the test
    - https://github.com/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4/blob/master/screencasts/Fail-Succeed-Code.mp4 done by [Will Lee](https://github.com/henryjr1)


4. Code commit that fails an acceptance / end-to-end test --> commit that fixes code to pass the test
    - https://github.com/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4/blob/master/screencasts/End2EndExample.mp4 done by [Damon Stamps](https://github.com/DStampsJr)


5. Code running in staging environment
    - https://github.com/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4/blob/master/screencasts/devEnvironmentScreencast.mov done by [Zach Lott](https://github.com/zacharylott94)


6. Smoke and manual tests in Staging
    - https://github.com/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4/blob/master/screencasts/Smoke%20Test.mp4 done by [Will Lee](https://github.com/henryjr1)


7. Application pushed to production —> Smoke test production app
    - https://github.com/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4/blob/master/screencasts/Smoke_test_production.mp4 done by [Dillon Carley](https://github.com/Dilloncarley)



### PPA-1
1. RGR screencasts:
    - https://drive.google.com/open?id=1AXhzgZYhnpe1zVcerDUGkh8qrYyVyGnm done by [Jacob Stewart](https://github.com/JacobStewart20)
    - https://drive.google.com/open?id=1VtT4ifxjyFGc_-yPc2i_LdYv40jgmhSP done by [Will Lee](https://github.com/henryjr1)
2. All 5 functions: 
    - https://drive.google.com/file/d/1rILuZDhjKHcUdBkYC5K0BwBw85oiOpoQ/view?usp=sharing done by [Will Lee](https://github.com/henryjr1)
