const verifyNumbers = require("./verifyNumbers.js")

function yearlySavings(salary, rate){
  if (!verifyNumbers(arguments)) {throw new TypeError("Numbers Only")}
  return (salary * rate)
}

module.exports = yearlySavings
