var add = (x,y) => {
    if(isNaN(x) || isNaN(y)) throw new TypeError("That isn't a number!");
    return x + y;
    }
var divide = (x,y) => {
    if(isNaN(x) || isNaN(y)) throw new TypeError("That isn't a number!");
    if(!y) throw new Error('Invalid dividend ' + y);
    return (x / y);
}
var multiply = (x,y) => {
    // if(isNaN(x) || isNaN(y)) throw new TypeError("That isn't a number!");
    return (x * y);
}
exports.add = add
exports.divide = divide
exports.multiply = multiply
