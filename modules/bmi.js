const add = require('./basic_modules/add').add
const divide= require('./basic_modules/divide').divide
const multiply = require('./basic_modules/multiply').multiply

const MCFPOUNDS = 0.45

//Multiply the weight in pounds by MCF
//Height and Weight are not ready to use as is

//todo test numbers for bmi
var bmi = (height, weight) => {
     if(isNaN(x) || isNaN(y)) throw new TypeError("That isn't a number!");
     
     var weightToPounds = multiply(weight, MCFPOUNDS)

    }
