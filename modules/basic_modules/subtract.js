var subtract = (x,y) => {
    if(isNaN(x) || isNaN(y)) throw new TypeError("That isn't a number!");
    return x - y;
    }
    exports.subtract = subtract