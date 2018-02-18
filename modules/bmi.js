const add = require('./basic_modules/add').add
const divide= require('./basic_modules/divide').divide
const multiply = require('./basic_modules/multiply').multiply
const parse = require('./basic_modules/parse').parse
var _ = require('lodash');
const MCFKG = 0.45
const MCFMETERS = 0.025

//Multiply the weight in pounds by MCF
//Height and Weight are not ready to use as is

//todo test numbers for bmi
var bmi = (height, weight) => {
    if(isNaN(weight)) throw new TypeError("That isn't a number!");
     
    //convert pounds to kilograms
     var poundsToKg = multiply(weight, MCFKG)

     //given feet and inches
     var heightFeet = parse(height)[1]
     var heightInches = parse(height)[2]

     //feet to inches + inches
     var feetToInches = multiply(heightFeet, 12)
     var totalInches = feetToInches += heightInches

     //inches to meters
     var inchesToMeters = multiply(totalInches, MCFMETERS)

     //square meters
     var metersSquared = multiply(inchesToMeters,inchesToMeters)

     var categoryValue = parseFloat(divide(poundsToKg,metersSquared)).toPrecision(3)
     if (categoryValue  <= 18.5){
        return "You are underweight! Your bmi value is " + categoryValue;
      } else if(categoryValue >= 18.5 && categoryValue <= 24.9){
        return "You are normal weight! Your bmi value is " + categoryValue;
      }else if(categoryValue >= 25 && categoryValue <= 29.9){
        return "You are over weight! Your bmi value is " + categoryValue;
      }else{
        return "You are obese! Your bmi value is " + categoryValue;
      }
     
      

     

    }
    
exports.bmi = bmi