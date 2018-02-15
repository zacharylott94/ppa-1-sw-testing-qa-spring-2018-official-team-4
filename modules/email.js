function email_verifier(email) {

    //Checks that the input is not nulle
    if(email == null) throw new TypeError("Emails cannot be null!");

    //Checks that the input is a sring type
    else if(typeof(email) !== 'string') throw new TypeError("Emails must be a string!");

    //Checks that the input contains '@'
    else if(email.indexOf('@') === -1) throw new TypeError("Emails must contain the @ symbol!");

    //Checks that the input does not contain two '@' symbols
    else if(double_at(email) === true) throw new TypeError("Emails must cannot contain two @ symbols!");
      
    //Checks that the input does not start with '.'
    else if(email[0] === '.') throw new TypeError("Emails cannot begin with a .");

    //Checks that the input does not start with a numeric character
    else if(numeric_character(email[0]) === true) throw new TypeError("Emails cannot start with a numeric character");

    //Checks that the input does not end with '.'
    else if(email[email.length-1] === '.') throw new TypeError("Emails cannot end with a .");

     //Checks that the string before @ does not end with '.'
     else if(email[email.indexOf('@')-1] === '.') throw new TypeError("Emails cannot have a period right before the @ symbol");

    //Checks that the input have two consecutive periods '..'
    else if(double_period(email) === true) throw new TypeError("Emails cannot contain two consecutive periods");

    //Checks that the input does not contain invalid characters
    else if(invalid_characters(email) !== false) throw new TypeError("Emails cannot contain " + invalid_characters(email));

    //Checks that the input has a domaim
    else if(email[email.indexOf('@')+1] === undefined) throw new TypeError("Emails must have a domain");

    //Checks that the input must have text before the @ symbol
    else if(email[email.indexOf('@')-1] === undefined) throw new TypeError("Emails must include text before @");

    else{
        return true;
    }
  }

//Converts single character to an integer data type then returns true if it is between 0 and 9 otherwise returns false
function numeric_character(character){
    switch (parseInt(character)) {
        case 0:
            return true;
        case 1:
            return true;
        case 2:
            return true;
        case 3:
            return true;
        case 4:
            return true;
        case 5:
            return true;
        case 6:
            return true;
        case 7:
            return true;
        case 8:
            return true;
        case 9:
            return true;
        default:
            return false;
    }
}
  
//Locates all @ symbols in a string then return true if that number is greater than 1 otherwise return false
function double_at(string) {
    var counter = 0;
    for (var i = 0; i < string.length; i++)
    {
        if (string[i] === '@')
        {
            counter++;
        }
    }

    if (counter > 1)
    {
        return true;
    }

    else
    {
        return false;
    }
}

//Locates every . in a string then returns true if the next index is also a . otherwise return false
function double_period(string) {
    for (var i = 0; i < string.length; i++)
    {
        if (string[i] === '.')
        {
            if (string[i+1] === '.')
            {
                return true;
            }
        }
    }
    return false;
}

//Checks a string for " ' # ` ^ if that character is found return that character otherwise return false
function invalid_characters(string) {
    if (string.indexOf('"') >= 0)
    {
        return '"';
    }

    else if (string.indexOf('#') >= 0)
    {
        return '#';
    }

    else if (string.indexOf('`') >= 0)
    {
        return "`";
    }

    else if (string.indexOf('^') >= 0)
    {
        return '^';
    }

    else if (string.indexOf("'") >= 0)
    {
        return "'";
    }

    else{
        return false;
    }
}

module.exports = email_verifier;
