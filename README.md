# ppa-1-sw-testing-qa-spring-2018-official-team-4
Welcome to Software Testing Team 4 repo

[![Coverage Status](https://coveralls.io/repos/github/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4/badge.svg)](https://coveralls.io/github/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4)
[![Build Status](https://travis-ci.org/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4.svg?branch=master)](https://travis-ci.org/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4)

### Team Members
* [Will Lee](https://github.com/henryjr1)
* [Damon Stamps](https://github.com/DStampsJr)
* [Jacob Stewart](https://github.com/JacobStewart20)
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

## How To Get Started
1. cd into a chosen directory and run `git clone https://github.com/drbyron-github-classroom/ppa-1-sw-testing-qa-spring-2018-official-team-4.git `
2. Run `cd ppa-1-sw-testing-qa-spring-2018-official-team-4`
3. Run `npm install` to install dependencies
4. To start the application run `node app.js`
5. To test the application, run `npm test`
6. To make the testing framework watch changes, run `npm test -- --watchAll`

## Testing Coverage
1. Run `npm test` to generate a coverage folder
2. To see output, run in command line or open lcov-report/index.html in a web browser

## Setup and Execution Instructions

-	Static Testing with JSHint
	-	JSHint performs static analysis on JavaScript modules and prints a list of warning for potential defects.
	-	JSHint runs before the Unit Tests, on Line 30 of .travis.yml
	-	If any warnings are raised, the pipeline will fail the build.
	-	Setup Instructions:
		1. Installation:	Run "npm install --save jshint" in the main directory to install JSHint locally.
		2. Configuration:	Set up rules for warnings in file .jshintrc file in main directory. Documentation for rules found here: "http://jshint.com/docs/options/"
		3. Use:				Run "jshint ." in a directory to analyze all modules within that directory and its sub-directories.

## Programming Language
We will be programming in JavaScript

## Testing Framework
We are using Jest as our testing framework. It contains a test runner and an assertion library.

## Screencasts:
1. RGR screencasts:
    - https://drive.google.com/open?id=1AXhzgZYhnpe1zVcerDUGkh8qrYyVyGnm done by [Jacob Stewart](https://github.com/JacobStewart20)
    - https://drive.google.com/open?id=1VtT4ifxjyFGc_-yPc2i_LdYv40jgmhSP done by [Will Lee](https://github.com/henryjr1)
2. All 5 functions: 
    - https://drive.google.com/file/d/1rILuZDhjKHcUdBkYC5K0BwBw85oiOpoQ/view?usp=sharing done by [Will Lee](https://github.com/henryjr1)
