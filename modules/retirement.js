const modules = "./basic_modules/"
const verifyNumbers = require(modules + "verifyNumbers.js")
const yearlySavings = require(modules + "yearlySavings")
const divide = require(modules + "divide").divide
const add = require(modules + "add").add
const multiply = require(modules + "multiply").multiply

function retirement(age, salary, percent, goal) {
  if (!verifyNumbers(arguments)) {throw new TypeError("Numbers Only")}
  let adjustedRate = add(percent,(multiply(percent,.35)))
  let years = divide(goal,yearlySavings(salary,adjustedRate))
  years = Math.ceil(years)
  let answer = add(years,age)
  if (answer > 99) {return "Savings goal not met."}
  return answer
}

module.exports = retirement
