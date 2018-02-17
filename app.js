var repl = require("repl");
var prompt = require('prompt');
var bmi = require('./modules/bmi').bmi
var splitTip = require('./modules/splitTip').splitTip
var retirement = require('./modules/retirement')
// var replServer = repl.start({
//   prompt: "life-app  > What Would you like to use ? \n \n" +
//   "1. BMI Calculator \n" +
//   "2. Shortest Distance Calculator \n" +
//   "3. Email verifier \n" +
//   "4. Split the Tip Calculator \n" +
//   "5. Retirement Calculator \n"

// });
// replServer.context.one = "bar";

prompt.start();
 console.log("life-app  >  \n" +
   "0. Exit \n" +
   "1. BMI Calculator 💪\n" +
   "2. Shortest Distance Calculator 🏃\n" +
   "3. Email verifier ✉️ \n" +
   "4. Split the Tip Calculator 💵 \n" +
   "5. Retirement Calculator 👵 \n"
 );

prompt.get([{
  name: 'userChoice',
  description: 'What would you like to use?: ',
  require: true
}], function (err, result) {
  var choiceArray = ['BMI Calculator 💪', 'Shortest Distance Calculator 🏃', 'Email verifier ✉️', 'Split the Tip Calculator 💵', 'Retirement Calculator 👵' ]
  console.log('Command-line input received:');

  console.log('  You chose to use: ' + choiceArray[result.userChoice -1])
  if(result.userChoice == 1){
    prompt.get([{
      name: 'userHeight',
      description: 'Enter your height '  + "(5'" + '9")',
      pattern: /^(\d{1,2})[\']?((\d)|([0-1][0-2]))?[\"]?$/,
      required: true
    },{
      name: 'userWeight',
      description: 'Enter your weight: ',
      pattern: /^\d+$/,
      required: true
    }], function (err, result) {

      console.log(bmi(result.userHeight, result.userWeight))


    });
  }
  if(result.userChoice == 4){
  prompt.get([{
    name: 'numGuests',
    description: 'Enter number of guests: ',
    require: true
  },{
    name: 'numCosts',
    description: 'Enter cost of meal (gratuity will be added to cost entered): ',
    required: true
  }], function (err, result){
    console.log("The total cost per guest is: ", splitTip(result.numGuests, result.numCosts))
  });
  }

  if(result.userChoice == 5){
    prompt.get([{
      name: 'currentAge',
      description: 'Enter your current age: ',
      required: true
    },{
      name: 'salary',
      description: 'your annual salary: ',
      required: true
    },{
      name: 'rate',
      description: 'the percent of your salary that you save: ',
      required: true
    },{
      name: 'goal',
      description: 'your retirement savings goal: ',
      required: true
    }], function (err, result){
      let answer = retirement(result.currentAge,result.salary,result.rate,result.goal)
      if (typeof answer === "number"){console.log("Your savings goal will be met at age "+ answer + ".")}
      else{
        console.log(answer)
      }
    });
  }

 

});
