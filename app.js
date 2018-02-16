var repl = require("repl");
var prompt = require('prompt');
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
 console.log("life-app  > What Would you like to use ? (Put in number of choice) \n \n" +
   "1. BMI Calculator 💪\n" +
   "2. Shortest Distance Calculator 🏃\n" +
   "3. Email verifier ✉️ \n" +
   "4. Split the Tip Calculator 💵 \n" +
   "5. Retirement Calculator 👵 \n"
 );

prompt.get(['userChoice'], function (err, result) {
  var choiceArray = ['BMI Calculator 💪', 'Shortest Distance Calculator 🏃', 'Email verifier ✉️', 'Split the Tip Calculator 💵', 'Retirement Calculator 👵' ]
  console.log('Command-line input received:');
  console.log('  You chose to use: ' + choiceArray[result.userChoice -1]);
  
});
