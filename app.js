'use strict';

var inquirer = require('./node_modules/inquirer');
var repl = require("repl");
var prompt = require('prompt');
var bmi = require('./modules/bmi').bmi
var splitTip = require('./modules/splitTip').splitTip
var retirement = require('./modules/retirement').retirement
var email_verifier = require('./modules/email')
var distance = require('./modules/distance').distance







var output = [];

//where your questions would go
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
var shortDistanceQuestions = [
    {
    type: 'input',
    name: 'x1',
    message: "x1"
    },
    {
      type: 'input',
      name: 'y1',
      message: "y1"
    },
    {
      type: 'input',
      name: 'x2',
      message: "x2"
    },
    {
      type: 'input',
      name: 'y2',
      message: "y2"
    },
];
var splitTipQuestions = [
  {
    type: 'input',
    name: 'numGuests',
    message: "Enter number of guests"
  },
  {
    type: 'input',
    name: 'numCosts',
    message: "Enter cost of meal (gratuity will be added to cost entered)"
  }
];
var splitTipQuestions = [
{
  type: 'input',
  name: 'numGuests',
  message: "Enter number of guests"
},
{
  type: 'input',
  name: 'numCosts',
  message: "Enter cost of meal (gratuity will be added to cost entered)"
}
];
var emailVerifierQuestions = [
  {
  type: 'input',
  name: 'email',
  message: "Please enter an email: "
  },
];

  //general questions
var questions = [
    {
        type: 'list',
        name: 'theme',
        message: 'What would you like to use?',
        choices: [
            "1. BMI Calculator 💪",
            "2. Shortest Distance Calculator 🏃",
            "3. Email Verifier ✉️",
            "4. Split the Tip Calculator 💵",
            "5. Retirement Calculator 👵",
          new inquirer.Separator(),
          'Exit'
        ]
      }

];

//ask to exit prompt
var askToExit = [{
    type: 'confirm',
    name: 'askAgain',
    message: 'Would you want to use another tool? (just hit enter for YES)?',
    default: true
  }];



var ask = () => {
  inquirer.prompt(questions).then(answers => {
    output.push(answers.theme);
    if(answers.theme == "1. BMI Calculator 💪"){
        askBmi();
    }
    if(answers.theme == "2. Shortest Distance Calculator 🏃"){
      askSd();
    }
    if(answers.theme == "3. Email Verifier ✉️"){
      askEmail();
    }
    if(answers.theme == "4. Split the Tip Calculator 💵"){
      askTip();
  }
    if(answers.theme == "5. Retirement Calculator 👵"){
      askRetirement();
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
var askSd = () => {
  inquirer.prompt(shortDistanceQuestions).then(answers => {
      console.log("The distance between the points is " + parseFloat(distance(answers.x1, answers.y1, answers.x2, answers.y2)).toPrecision(2));
      askExit();
    });
}
var askEmail = () => {
  inquirer.prompt(emailVerifierQuestions).then(answers => {
    try {console.log("It is ", email_verifier(answers.email), " that this email is valid.")} catch (e) {console.log(e.message);}
    askExit();
  });
};
var askTip = () => {
  inquirer.prompt(splitTipQuestions).then(answers => {
    console.log("The total cost per guest is: ", splitTip(answers.numGuests, answers.numCosts))
    askExit();
  });
};

var askRetirement = () => {
    inquirer.prompt(retirementQuestions).then(answers => {
        let answer = retirement(answers.age,answers.salary,answers.rate,answers.goal)
        if (typeof answer === "number"){console.log("You will reach your savings goal by age " + answer + ".")}
        else{console.log(answer)}

        askExit();
      });
}

ask();
