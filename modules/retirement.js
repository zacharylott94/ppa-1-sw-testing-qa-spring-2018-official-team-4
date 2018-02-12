function retirement(age, salary, percent, goal) {
  for (let each in arguments){
    if (isNaN(arguments[each])) {throw new TypeError}
  }
  return
}

module.exports = retirement
