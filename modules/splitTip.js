    //basic_module calls
const divide = require('./basic_modules/divide').divide
const add = require('./basic_modules/add').add
const multiply = require('./basic_modules/multiply').multiply
const GRATUITY = .15

var splitTip = (guest , cost) => { //method declaration
    //unaccaptable values
if(isNaN(guest) || isNaN(cost)) throw new TypeError("That isn't a number!");
if(guest <= 0) throw new TypeError("Divide totalTab by zero error");
if(cost < 0) throw new TypeError("Cost can't be negative!");
    //core functionality of splitTip
var totalGratuity = multiply(cost , GRATUITY); // cost of the tab multiplied by const .15
var totalTab= add(cost , totalGratuity) // total cost plus gratuity(.15)
var splitTab = divide(totalTab , guest) // total cost/# of guests

console.log(splitTab)

return parseFloat(splitTab).toPrecision(3) //returns 2 decimal places (ex: 1.11)
}

exports.splitTip = splitTip