const divide = require('./basic_modules/divide').divide
const add = require('./basic_modules/add').add
const multiply = require('./basic_modules/multiply').multiply
const GRATUITY = .15

var splitTip = (guest , cost) => {
var totalGratuity = multiply(cost , GRATUITY); // cost of the tab multiplied by const .15
var totalTab= add(cost , totalGratuity) // total cost plus gratuity(.15)
var splitTab = divide(totalTab , guest) // total cost/# of guests
console.log(splitTab)
return splitTab

}
splitTip(4,122.40)