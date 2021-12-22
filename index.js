const countryCodes = require('./countryCodes')
const timeZones = require('./timeZones')
const moment = require('moment-timezone')

exports.getTimeZones = () => moment.tz.names()
exports.getCountryCodes = () => countryCodes

