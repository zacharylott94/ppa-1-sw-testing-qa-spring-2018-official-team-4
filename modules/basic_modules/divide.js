var divide = (x,y) => {
    if(isNaN(x) || isNaN(y)) throw new TypeError("That isn't a number!");
    if(!y) throw new Error('Invalid dividend ' + y);
    return (x / y);
}
exports.divide = divide