const subtract = require('./basic_modules/subtract').subtract
const multiply = require('./basic_modules/multiply').multiply
const add = require('./basic_modules/add').add

var distance = (x1,y1,x2,y2) => {
    if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)) throw new TypeError("All inputs must be numbers")
    
    x = subtract(x2,x1);
    y = subtract(y2,y1);

    x = multiply(x,x);
    y = multiply(y, y);

    shortestDistance = add(x,y);
    return Math.sqrt(shortestDistance);
}

exports.distance = distance