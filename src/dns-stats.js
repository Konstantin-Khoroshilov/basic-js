const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const splittedDomains = domains.map(domain => domain.split('.').reverse());
  return splittedDomains.reduce((res, domain) => {
    domain.forEach((item, index) => {
      const subDomain = domain.slice(0, index + 1).join('.');
      res[`.${subDomain}`] ? res[`.${subDomain}`] += 1 : res[`.${subDomain}`] = 1;
    });
    return res;
  }, {});
}

module.exports = {
  getDNSStats
};
