const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch (error) {
    throw new Error(error);
  }
  const seasons = {
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
    'winter': [11, 12, 0, 1]
  };
  for (let [i, v] of Object.entries(seasons)) {
    if (v.includes(date.getMonth())) {
      return i;
    }
  }
  return 'Unable to determine the time of year!';
};