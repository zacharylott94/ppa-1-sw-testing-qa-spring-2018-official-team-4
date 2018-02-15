const verifyNumbers = require("./verifyNumbers.js")
const multiply = require("./multiply").multiply
function yearlySavings(salary, rate){
  if (!verifyNumbers(arguments)) {throw new TypeError("Numbers Only")}
  return multiply(salary,rate)
}

module.exports = yearlySavings
