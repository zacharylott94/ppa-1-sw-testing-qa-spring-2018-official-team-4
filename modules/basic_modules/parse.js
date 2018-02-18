var parse = (feetAndInches) => {
    if (typeof feetAndInches !== "string") throw new TypeError("That isn't a string!");
    
   
  var match =  /^(\d{1,2})[\']?((\d)|([0-1][0-2]))?[\"]?$/g.exec(feetAndInches)
   
    
   if(match === null) throw new TypeError("You put inches first please put feet then inches!");
   else{
    var feet = +match[1],
    inch = +match[2];
    return  match.map(Number);
   }
    
}
exports.parse = parse