const modules = "./basic_modules/"
const verifyNumbers = require(modules + "verifyNumbers.js")
const yearlySavings = require(modules + "yearlySavings")
function retirement(age, salary, percent, goal) {
  if (!verifyNumbers(arguments)) {throw new TypeError("Numbers Only")}
  let adjustedRate = percent + (percent * .35)
  let years = goal / yearlySavings(salary,adjustedRate)
  years = Math.ceil(years)
  let answer = years + age
  if (answer > 99) {return "Savings goal not met."}
  return answer
}

module.exports = retirement
