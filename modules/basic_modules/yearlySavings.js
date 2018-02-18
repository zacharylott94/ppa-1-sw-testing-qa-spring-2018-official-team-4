const multiply = require("./multiply").multiply
let yearlySavings = (salary, rate) => {
  salary = Number(salary)
  rate = Number(rate)
  return multiply(salary,rate)
}

module.exports = yearlySavings
