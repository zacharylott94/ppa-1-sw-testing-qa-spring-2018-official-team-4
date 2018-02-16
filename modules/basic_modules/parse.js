var parse = (feetAndInches) => {
    if (typeof feetAndInches !== "string") throw new TypeError("That isn't a string!");
    
   
    var match = feetAndInches.match(/^(\d+)'(\d+)''$/);
    
   if(match === null) throw new TypeError("You put inches first please put feet then inches!");
   else{
    var feet = +match[1],
    inch = +match[2];
    return  match.map(Number);
   }
    
}

exports.parse = parse