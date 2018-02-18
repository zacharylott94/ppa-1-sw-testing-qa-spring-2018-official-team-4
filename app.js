'use strict';

var inquirer = require('./node_modules/inquirer');
var repl = require("repl");
var prompt = require('prompt');
var bmi = require('./modules/bmi').bmi
var splitTip = require('./modules/splitTip').splitTip
var retirement = require('./modules/retirement').retirement
var distance = require('./modules/distance').distance







var output = [];

//where your questions would go
var bmiQuestions = [{
    
    type: 'input',
    name: 'userHeight',
    message: "What's your height? " + "5'" +'11"'
  
},{
    
    type: 'input',
    name: 'userWeight',
    message: "What's your weight?"
  
}
];
//ask to exit prompt
var askToExit = [{
    type: 'confirm',
    name: 'askAgain',
    message: 'Would you want to use another tool? (just hit enter for YES)?',
    default: true
  }]

  //general questions
var questions = [
    {
        type: 'list',
        name: 'theme',
        message: 'What would you like to use?',
        choices: [
            "1. BMI Calculator 💪",
            "2. Shortest Distance Calculator 🏃",
            "3. Email verifier ✉️",
            "4. Split the Tip Calculator 💵",
            "5. Retirement Calculator 👵",
          new inquirer.Separator(),
          'Exit'
        ]
      }
  
];

function ask() {
  inquirer.prompt(questions).then(answers => {
    output.push(answers.theme);
    if(answers.theme == "1. BMI Calculator 💪"){
        askBmi()
    }
    
  });
}
function askExit() {
    inquirer.prompt(askToExit).then(answers => {
     if(answers.askAgain){
         ask()
     }
      
      
    });
  }

function askBmi(){
    inquirer.prompt(bmiQuestions).then(answers => {
        console.log(bmi(answers.userHeight,answers.userWeight));
        askExit();
      });
}

ask();