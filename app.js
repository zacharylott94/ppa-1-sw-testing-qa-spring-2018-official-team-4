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

var ask = () => {
  inquirer.prompt(questions).then(answers => {
    output.push(answers.theme);
    if(answers.theme == "1. BMI Calculator 💪"){
        askBmi()
    }
    if(answers.theme == "5. Retirement Calculator 👵"){
      askRetirement()
    }

  });
}
var askExit = () => {
    inquirer.prompt(askToExit).then(answers => {
     if(answers.askAgain){
         ask()
     }


    });
  }

var askBmi = () => {
    inquirer.prompt(bmiQuestions).then(answers => {
        console.log(bmi(answers.userHeight,answers.userWeight));
        askExit();
      });
}

var retirementQuestions = [{

    type: 'input',
    name: 'age',
    message: "What's your current age? "

},{

    type: 'input',
    name: 'salary',
    message: "What's your salary?"

},{

    type: 'input',
    name: 'rate',
    message: "What percent of your salary do you save?"

},{

    type: 'input',
    name: 'goal',
    message: "What is your savings goal?"

}]

var askRetirement = () => {
    inquirer.prompt(retirementQuestions).then(answers => {
        let answer = retirement(answers.age,answers.salary,answers.rate,answers.goal)
        if (typeof answer === "number"){console.log("You will reach your savings goal by age " + answer + ".")}
        else{console.log(answer)}

        askExit();
      });
}

ask();
