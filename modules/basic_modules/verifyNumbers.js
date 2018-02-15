function verifyNumbers(numberList){
  for (let each in numberList){
    if (typeof numberList[each] != "number") {return false}
  }
  return true
}

module.exports = verifyNumbers
