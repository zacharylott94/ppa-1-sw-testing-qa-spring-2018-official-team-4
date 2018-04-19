
const yearlySavings = require("./basic_modules/yearlySavings")
const divide = require("./basic_modules/divide").divide
const add = require("./basic_modules/add").add
const multiply = require("./basic_modules/multiply").multiply

let retirement = (age, salary, rate, goal) => {

  age = Number(age)
  salary = Number(salary)
  rate = Number(rate)
  goal = Number(goal)

  if (rate >= 1){throw new Error("Savings rate cannot be greater than or equal to 1. Please use a decimal.")}
  if (rate <= 0){throw new Error("Savings rate cannot be less than or equal to zero.")}
  if (age < 16){throw new Error("Current age must be 16 or greater.")}
  if (age > 99){throw new Error("Current age must be less than 100.")}
  if (salary < 0){throw new Error("Salary must not be less than zero.")}
  if (goal <= 0){throw new Error("Savings goal must not be less than or equal to zero.")}

  let adjustedRate = add(rate,(multiply(rate,.35)))
  let years = divide(goal,yearlySavings(salary,adjustedRate))
  years = Math.ceil(years)
  let answer = add(years,age)
  if (answer > 99) {return "Savings goal not met."}
  return answer
}

exports.retirement = retirement
