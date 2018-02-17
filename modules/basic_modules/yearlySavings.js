const multiply = require("./multiply").multiply
function yearlySavings(salary, rate){
  for (let each in arguments){
    let value = arguments[each]
    arguments[each] = Number(value)
  }
  return multiply(salary,rate)
}

module.exports = yearlySavings
