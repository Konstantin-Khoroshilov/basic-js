const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.getOwnPropertyNames(date).length === 0 && Date.parse(date)) {
    const month = date.getMonth();
    let season = 'trololo';
    if (month >= 2 && month <= 4) {
      season = 'spring';
    } else if (month >= 5 && month <= 7) {
      season = 'summer';
    } else if (month >= 8 && month <= 10) {
      season = 'autumn';
    } else if ((month >= 0 && month <= 1) || month === 11) {
      season = 'winter';
    }
    return season;
  }
  throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
