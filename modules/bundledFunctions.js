const bmi = require('./bmi')
const distance = require('./distance')
const email = require('./email')
const retirement = require('./retirement')
const splitTip = require('./splitTip')

module.exports = {
  bmi: bmi.bmi,
  distance: distance.distance,
  email: email,
  retirement: retirement.retirement,
  splitTip: splitTip.splitTip
}
