function verifyNumbers(numberList){
  for (let each in numberList){
    if (typeof numberList[each] != "number") {return false}
    console.log(typeof numberList[each])
  }
  return true
}

module.exports = verifyNumbers
